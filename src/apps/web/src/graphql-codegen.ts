import "dotenv/config";

import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: process.env.GRAPHQL_SCHEMA_URL || "https://localhost:4000/graphql",
	documents: "./src/components/gql/graphql/*.graphql",
	generates: {
		"./src/components/gql/_generated.ts": {
			plugins: ["typescript", "typescript-operations", "typed-document-node"],
			config: {
				apolloReactCommonImportFrom: "@apollo/client/react",
				apolloReactHooksImportFrom: "@apollo/client/react"
			}
		}
	}
};
export default config;
