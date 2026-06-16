import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

/**
 * Registrations — this is "who registered with us".
 *
 * A public lead: anyone who submits the intro-session / contact form.
 * No login required (clients never authenticate). The coach views these in
 * the admin area alongside `purchases`.
 */
export const registrations = pgTable("registrations", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  packageInterest: text("package_interest"), // intro_free | pkg_4 | pkg_6 | pkg_8 | null
  message: text("message"),
  source: text("source").notNull().default("intro_form"), // intro_form | contact | enneagram
  createdAt: timestamp("created_at").defaultNow().notNull()
})

export type Registration = typeof registrations.$inferSelect
export type NewRegistration = typeof registrations.$inferInsert
