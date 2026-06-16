/**
 * Database schema index.
 *
 * Export all tables here. Imported by db.ts to build the Drizzle client.
 * To add a table: create <name>-schema.ts and re-export it below.
 *
 *   registrations -> who registered with us (public leads, no login)
 *   purchases     -> who paid us (Paystack transactions)
 */

export * from "./registrations-schema"
export * from "./purchases-schema"
