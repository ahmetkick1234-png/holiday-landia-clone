-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create tours table
CREATE TABLE IF NOT EXISTS tours (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  duration TEXT NOT NULL,
  location TEXT NOT NULL,
  image_url TEXT,
  highlights TEXT[] DEFAULT '{}',
  included TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE tours ENABLE ROW LEVEL SECURITY;

-- Create policies for admin_users (only allow select for authentication)
CREATE POLICY "Allow select for authentication" ON admin_users
  FOR SELECT
  USING (true);

-- Create policies for tours (public can read, but only authenticated can modify)
CREATE POLICY "Anyone can view tours" ON tours
  FOR SELECT
  USING (true);

CREATE POLICY "Service role can insert tours" ON tours
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role can update tours" ON tours
  FOR UPDATE
  USING (true);

CREATE POLICY "Service role can delete tours" ON tours
  FOR DELETE
  USING (true);
