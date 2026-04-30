FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# --- Builder ---
FROM --platform=$BUILDPLATFORM base AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat
RUN apk update

ARG APP

# Copy obly the needed files
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm add turbo --global
COPY . .
RUN cd src && turbo prune $APP --docker


# --- Installer ---
FROM --platform=$BUILDPLATFORM base AS installer
WORKDIR /app

RUN apk add --no-cache libc6-compat
RUN apk update

ARG APP
ENV CI=true

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
RUN apk add --no-cache libc6-compat
RUN apk update

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

CMD cd ./apps/$APP && pnpm start