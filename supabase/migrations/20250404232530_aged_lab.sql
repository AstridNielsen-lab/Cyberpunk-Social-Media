/*
  # Create posts table for public timeline

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `content` (text)
      - `image_url` (text, optional)
      - `video_url` (text, optional)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `posts` table
    - Add policies for:
      - Anyone can read posts
      - Anyone can create posts (updated from authenticated-only)
*/

CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content text,
  image_url text,
  video_url text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can read posts"
  ON posts
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create posts"
  ON posts
  FOR INSERT
  TO public
  WITH CHECK (true);