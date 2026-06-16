import { desc } from "drizzle-orm"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { db } from "@/db/db"
import { purchases, registrations } from "@/db/schema"
import { ADMIN_COOKIE, verifyToken } from "@/lib/admin-auth"
import { AdminLogout } from "./logout-button"

// Rendered at request time (reads the admin cookie).
export const dynamic = "force-dynamic"

function formatZar(cents: number) {
  return `R${(cents / 100).toFixed(2)}`
}

export default async function AdminPage() {
  const cookieStore = await cookies()
  if (!verifyToken(cookieStore.get(ADMIN_COOKIE)?.value)) {
    redirect("/admin/login")
  }

  const [regs, buys] = db
    ? await Promise.all([
        db.select().from(registrations).orderBy(desc(registrations.createdAt)),
        db.select().from(purchases).orderBy(desc(purchases.createdAt))
      ])
    : [[], []]

  const paid = buys.filter(b => b.status === "paid")
  const revenue = paid.reduce((sum, b) => sum + b.amount, 0)

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-4xl">Admin</h1>
        <AdminLogout />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <Stat label="Registered" value={regs.length} />
        <Stat label="Paid" value={paid.length} />
        <Stat label="Revenue" value={formatZar(revenue)} />
      </div>

      <Section title={`Who registered (${regs.length})`}>
        {regs.length === 0 ? (
          <Empty>No registrations yet.</Empty>
        ) : (
          <Table head={["Name", "Email", "Phone", "Interest", "When"]}>
            {regs.map(r => (
              <tr key={r.id} className="border-border border-t">
                <Td>{r.name}</Td>
                <Td>{r.email}</Td>
                <Td>{r.phone ?? "—"}</Td>
                <Td>{r.packageInterest ?? r.source}</Td>
                <Td>{r.createdAt.toLocaleDateString()}</Td>
              </tr>
            ))}
          </Table>
        )}
      </Section>

      <Section title={`Who paid (${buys.length})`}>
        {buys.length === 0 ? (
          <Empty>No purchases yet.</Empty>
        ) : (
          <Table head={["Name", "Email", "Package", "Amount", "Status", "When"]}>
            {buys.map(b => (
              <tr key={b.id} className="border-border border-t">
                <Td>{b.name ?? "—"}</Td>
                <Td>{b.email}</Td>
                <Td>{b.packageKey}</Td>
                <Td>{formatZar(b.amount)}</Td>
                <Td>{b.status}</Td>
                <Td>{b.createdAt.toLocaleDateString()}</Td>
              </tr>
            ))}
          </Table>
        )}
      </Section>

      {!db && (
        <p className="text-muted-foreground/70 mt-8 text-xs">
          Database not configured — set DATABASE_URL to see data.
        </p>
      )}
    </main>
  )
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="border-border bg-card rounded-lg border p-4">
      <p className="text-muted-foreground text-sm">{label}</p>
      <p className="font-serif text-3xl">{value}</p>
    </div>
  )
}

function Section({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function Table({
  head,
  children
}: {
  head: string[]
  children: React.ReactNode
}) {
  return (
    <div className="border-border overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead className="bg-muted text-muted-foreground text-left">
          <tr>
            {head.map(h => (
              <th key={h} className="px-3 py-2 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-3 py-2">{children}</td>
}

function Empty({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-border text-muted-foreground rounded-lg border border-dashed p-8 text-center">
      {children}
    </div>
  )
}
