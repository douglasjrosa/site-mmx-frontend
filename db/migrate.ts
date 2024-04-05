import { loadEnvConfig } from "@next/env";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db } from "@/db";

const dev = process.env.NODE_ENV !== "production";
loadEnvConfig("./", dev);

migrate(db, { migrationsFolder: "./db/drizzle" });