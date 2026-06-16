import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

// Allow DATABASE_URL to be optional for development (will use file storage as fallback)
const connectionString = process.env.DATABASE_URL

let client: postgres.Sql | null = null
let dbInstance: ReturnType<typeof drizzle> | null = null

if (connectionString && connectionString.trim() !== "") {
  try {
    client = postgres(connectionString, {
      idle_timeout: 20,       // close idle connections after 20s (Render kills at ~300s)
      max_lifetime: 60 * 5,   // recycle connections every 5 min
      connect_timeout: 10,    // fail fast on connect
      max: 10,                // connection pool size
    })
    dbInstance = drizzle(client, { schema })
  } catch (error) {
    console.warn("Failed to initialize database connection:", error)
    console.warn("Falling back to file-based storage")
  }
}

export const db = dbInstance

// Helper to check if database is available
export function isDatabaseAvailable(): boolean {
  return dbInstance !== null && client !== null
}
