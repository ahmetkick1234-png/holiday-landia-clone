-- Add images array column to tours table
ALTER TABLE tours ADD COLUMN IF NOT EXISTS images TEXT[] DEFAULT '{}';

-- Add images array column to blogs table  
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS images TEXT[] DEFAULT '{}';

-- Migrate existing single images to images array for tours
UPDATE tours 
SET images = ARRAY[image_url]
WHERE image_url IS NOT NULL AND image_url != '' AND (images IS NULL OR array_length(images, 1) IS NULL);

-- Migrate existing single images to images array for blogs
UPDATE blogs
SET images = ARRAY[image_url]
WHERE image_url IS NOT NULL AND image_url != '' AND (images IS NULL OR array_length(images, 1) IS NULL);

-- Create index for faster image queries
CREATE INDEX IF NOT EXISTS idx_tours_images ON tours USING GIN (images);
CREATE INDEX IF NOT EXISTS idx_blogs_images ON blogs USING GIN (images);
