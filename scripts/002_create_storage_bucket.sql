-- Create storage bucket for tour images
INSERT INTO storage.buckets (id, name, public)
VALUES ('tour-images', 'tour-images', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies to allow public read access
CREATE POLICY "Public Access for Tour Images" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'tour-images');

-- Allow service role to upload images
CREATE POLICY "Service role can upload tour images" ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'tour-images');

-- Allow service role to update images
CREATE POLICY "Service role can update tour images" ON storage.objects
  FOR UPDATE
  USING (bucket_id = 'tour-images');

-- Allow service role to delete images
CREATE POLICY "Service role can delete tour images" ON storage.objects
  FOR DELETE
  USING (bucket_id = 'tour-images');
