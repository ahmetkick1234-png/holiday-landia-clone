-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tour_id UUID REFERENCES tours(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  passport_number TEXT NOT NULL,
  address TEXT NOT NULL,
  booking_date TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policies for bookings
CREATE POLICY "Anyone can create bookings" ON bookings
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role can view all bookings" ON bookings
  FOR SELECT
  USING (true);

CREATE POLICY "Service role can update bookings" ON bookings
  FOR UPDATE
  USING (true);

CREATE POLICY "Service role can delete bookings" ON bookings
  FOR DELETE
  USING (true);

-- Create trigger for bookings table
DROP TRIGGER IF EXISTS update_bookings_updated_at ON bookings;
CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_bookings_tour_id ON bookings(tour_id);
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);
