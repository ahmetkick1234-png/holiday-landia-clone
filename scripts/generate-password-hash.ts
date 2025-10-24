// Script to generate SHA-256 password hash for admin login
// Run this script to get the hash for your password, then update it in the database

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
  return hashHex
}

// Change this to your desired password
const password = "your-password-here"

hashPassword(password).then((hash) => {
  console.log("\n=== Password Hash Generator ===")
  console.log("Password:", password)
  console.log("SHA-256 Hash:", hash)
  console.log("\nUpdate your database with this SQL command:")
  console.log(`UPDATE admin_users SET password_hash = '${hash}' WHERE username = 'holiland';`)
  console.log("\n===============================\n")
})
