import { BetterSQLite3Database, drizzle } from "drizzle-orm/better-sqlite3"
import Database from "better-sqlite3"
import path from "path"

const dbPath = path.resolve( process.cwd(), "sqlite.db" )
console.log( `Database path: ${ dbPath }` )
export const sqlite = new Database( dbPath )

export const db: BetterSQLite3Database = drizzle( sqlite )