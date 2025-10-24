-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  published_date TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Create policies for blogs (public can read, service role can modify)
CREATE POLICY "Anyone can view blogs" ON blogs
  FOR SELECT
  USING (true);

CREATE POLICY "Service role can insert blogs" ON blogs
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role can update blogs" ON blogs
  FOR UPDATE
  USING (true);

CREATE POLICY "Service role can delete blogs" ON blogs
  FOR DELETE
  USING (true);

-- Create trigger for blogs table
DROP TRIGGER IF EXISTS update_blogs_updated_at ON blogs;
CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON blogs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_category ON blogs(category);
