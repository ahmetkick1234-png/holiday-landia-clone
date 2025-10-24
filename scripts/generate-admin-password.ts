// Script to generate SHA-256 hash for admin password
// Run this script to get the SQL command to update your admin password

async function generatePasswordHash(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
  return hashHex
}

async function main() {
  const username = "holiland"
  const password = "holi21day21@"

  const passwordHash = await generatePasswordHash(password)

  console.log("\n=== Admin Password Update ===\n")
  console.log(`Username: ${username}`)
  console.log(`Password: ${password}`)
  console.log(`SHA-256 Hash: ${passwordHash}\n`)
  console.log("Run this SQL command in Supabase SQL Editor:\n")
  console.log(`UPDATE admin_users SET password_hash = '${passwordHash}' WHERE username = '${username}';\n`)
}

main()
