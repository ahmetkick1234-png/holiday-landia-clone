-- Create storage bucket for tour images
INSERT INTO storage.buckets (id, name, public)
VALUES ('tour-images', 'tour-images', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to read images
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'tour-images');

-- Allow service role to upload images
CREATE POLICY "Service role can upload"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'tour-images');

-- Allow service role to update images
CREATE POLICY "Service role can update"
ON storage.objects FOR UPDATE
USING (bucket_id = 'tour-images');

-- Allow service role to delete images
CREATE POLICY "Service role can delete"
ON storage.objects FOR DELETE
USING (bucket_id = 'tour-images');
