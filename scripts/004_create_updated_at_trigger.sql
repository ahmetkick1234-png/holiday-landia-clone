-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for tours table
DROP TRIGGER IF EXISTS update_tours_updated_at ON tours;
CREATE TRIGGER update_tours_updated_at
  BEFORE UPDATE ON tours
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
