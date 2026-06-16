import {
  integer,
  pgTable,
  text,
  timestamp,
  uuid
} from "drizzle-orm/pg-core"

/**
 * Purchases — this is "who has paid us".
 *
 * One row per Paystack transaction. The webhook (and verify callback) flips
 * status to "paid". No client login — the buyer is identified by name + email
 * captured at checkout.
 *
 * Coaching packages (from the deck):
 *   intro_free  -> R0      (free intro session)
 *   pkg_4       -> R2200
 *   pkg_6       -> R3150
 *   pkg_8       -> R4000
 *
 * amount is stored in ZAR cents (R2200.00 => 220000) to match Paystack.
 */
export const purchases = pgTable("purchases", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  packageKey: text("package_key").notNull(), // intro_free | pkg_4 | pkg_6 | pkg_8
  amount: integer("amount").notNull(), // ZAR cents
  currency: text("currency").notNull().default("ZAR"),
  status: text("status").notNull().default("pending"), // pending | paid | failed | refunded
  paystackReference: text("paystack_reference").notNull().unique(),
  paidAt: timestamp("paid_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export type Purchase = typeof purchases.$inferSelect
export type NewPurchase = typeof purchases.$inferInsert
