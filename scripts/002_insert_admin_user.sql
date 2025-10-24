-- Insert admin user with hashed password
-- Username: holiland
-- Password: holi21day21@
INSERT INTO admin_users (username, password_hash)
VALUES (
  'holiland',
  crypt('holi21day21@', gen_salt('bf', 10))
)
ON CONFLICT (username) DO NOTHING;
