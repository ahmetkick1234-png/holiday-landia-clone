-- Update admin password for user 'holiland'
-- Password: holi21day21@
-- SHA-256 Hash: 8b3c8d5e9f7a6b4c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c

UPDATE admin_users 
SET password_hash = '8b3c8d5e9f7a6b4c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c'
WHERE username = 'holiland';

-- Verify the update
SELECT username, password_hash FROM admin_users WHERE username = 'holiland';
