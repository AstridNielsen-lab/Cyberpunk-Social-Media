import React, { useState, useEffect } from 'react';
import { Plus, X } from 'lucide-react';
import PostEditor from './components/PostEditor';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import { Post } from './types';
import { loadPosts, savePosts } from './lib/posts';

function App() {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    loadPosts().then(setPosts);
    setTimeout(() => setShowSplash(false), 3000);
  }, []);

  const handleCreatePost = async (post: Omit<Post, 'id' | 'created_at'>) => {
    const newPost: Post = {
      id: crypto.randomUUID(),
      content: post.content,
      image_url: post.image_url,
      video_url: post.video_url,
      created_at: new Date().toISOString()
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    await savePosts(updatedPosts);
    setIsEditorOpen(false);
  };

  return (
    <>
      {showSplash && <SplashScreen />}
      <div className="min-h-screen bg-black text-[#00ff00] font-mono p-4">
        <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-[#00ff00]/20 p-4 z-40">
          <h1 className="text-2xl font-bold text-center glitch-text">
            manipulations
            <span className="block text-sm opacity-50">manipulando seu microcosmo</span>
          </h1>
        </header>

        <main className="mt-24 mb-24 max-w-2xl mx-auto">
          <Timeline posts={posts} />
        </main>

        <Footer />

        <button
          onClick={() => setIsEditorOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-[#00ff00] text-black rounded-full 
                   flex items-center justify-center shadow-[0_0_15px_#00ff00] 
                   hover:shadow-[0_0_25px_#00ff00] transition-shadow duration-300
                   animate-pulse"
        >
          <Plus size={32} />
        </button>

        {isEditorOpen && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-2xl bg-black border border-[#00ff00] p-6 rounded-lg 
                          shadow-[0_0_30px_rgba(0,255,0,0.2)] relative">
              <button
                onClick={() => setIsEditorOpen(false)}
                className="absolute top-4 right-4 text-[#00ff00] hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <PostEditor onSubmit={handleCreatePost} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;