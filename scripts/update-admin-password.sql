-- Update admin password hash
-- First, generate the hash using the generate-password-hash.ts script
-- Then run this SQL command with your generated hash

-- Example: If your password is "admin123", generate the hash first, then:
-- UPDATE admin_users SET password_hash = 'your-generated-hash-here' WHERE username = 'holiland';

-- Or create a new admin user:
-- INSERT INTO admin_users (id, username, password_hash, created_at)
-- VALUES (gen_random_uuid(), 'holiland', 'your-generated-hash-here', NOW());
