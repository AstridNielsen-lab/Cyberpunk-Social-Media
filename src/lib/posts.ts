import { Post } from '../types';

export async function loadPosts(): Promise<Post[]> {
  try {
    const storedPosts = localStorage.getItem('blog_posts');
    return storedPosts ? JSON.parse(storedPosts) : [];
  } catch (error) {
    console.error('Error loading posts from localStorage:', error);
    return [];
  }
}

export async function savePosts(posts: Post[]): Promise<void> {
  try {
    localStorage.setItem('blog_posts', JSON.stringify(posts));
  } catch (error) {
    console.error('Error saving posts to localStorage:', error);
    throw error;
  }
}