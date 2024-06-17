import { defineConfig } from "drizzle-kit"
import path from "path"

const dbPath = path.resolve( process.cwd(), "sqlite.db" )
const schemaPath = path.resolve( process.cwd(), "db/schema.ts" )

export default defineConfig( {
	dialect: "sqlite",
	schema: schemaPath,
	dbCredentials: {
		url: `file:${ dbPath }`
	}
} )