FROM node:24-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN corepack use pnpm@latest-10

# --- Builder ---
FROM --platform=$BUILDPLATFORM base AS builder
WORKDIR /app

ARG APP

# Copy obly the needed files
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm add turbo --global
COPY . .
RUN cd src && turbo prune $APP --docker


# --- Installer ---
FROM --platform=$BUILDPLATFORM base AS installer
WORKDIR /app

ARG APP
ENV CI=true
ENV NX_WORKSPACE_ROOT=/app

# Install dependencies
COPY .gitignore .gitignore
COPY --from=builder /app/src/out/json .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY --from=builder /app/src/out/full .
RUN pnpm turbo build --filter=$APP

# Remove dev-dependencies from node_modules
# RUN pnpm pinst --disable
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod


# --- Runner ---
FROM base AS runner
WORKDIR /app

ENV NODE_ENV="production"

# Set the user
RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app
USER app

ARG APP

# Copy over the application
COPY --from=installer --chown=app:app /app/apps/$APP/dist ./apps/$APP/dist
COPY --from=installer --chown=app:app /app/apps/$APP/node_modules ./apps/$APP/node_modules
COPY --from=installer --chown=app:app /app/apps/$APP/package.json ./apps/$APP/package.json

# Copy over the packages
COPY --from=installer --chown=app:app /app/package.json package.json
COPY --from=installer --chown=app:app /app/node_modules node_modules

WORKDIR /app/apps/$APP

ENTRYPOINT ["pnpm", "run", "start"]