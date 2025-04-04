import React, { useState } from 'react';
import { ImagePlus, Video, Send, X } from 'lucide-react';
import { Post } from '../types';

interface PostEditorProps {
  onSubmit: (post: Omit<Post, 'id' | 'created_at'>) => void;
}

const PostEditor: React.FC<PostEditorProps> = ({ onSubmit }) => {
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content && !imageUrl && !videoUrl) return;

    onSubmit({
      content,
      image_url: imageUrl,
      video_url: videoUrl,
    });

    setContent('');
    setImageUrl('');
    setVideoUrl('');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Manifeste seu microcosmo..."
        className="w-full h-32 bg-black border border-[#00ff00]/30 rounded p-3 
                   text-[#00ff00] placeholder-[#00ff00]/30 focus:border-[#00ff00] 
                   focus:outline-none resize-none"
      />

      <div className="flex gap-4">
        <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
          <ImagePlus size={20} />
          <span>Imagem</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>

        <label className="flex items-center gap-2">
          <Video size={20} />
          <input
            type="url"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="URL do vídeo"
            className="bg-transparent border-b border-[#00ff00]/30 
                     focus:border-[#00ff00] focus:outline-none px-2 py-1"
          />
        </label>
      </div>

      {imageUrl && (
        <div className="relative">
          <img
            src={imageUrl}
            alt="Preview"
            className="max-h-48 object-contain rounded"
          />
          <button
            type="button"
            onClick={() => setImageUrl('')}
            className="absolute top-2 right-2 bg-black/50 rounded-full p-1"
          >
            <X size={16} />
          </button>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-[#00ff00] text-black py-2 rounded 
                 hover:shadow-[0_0_15px_#00ff00] transition-shadow
                 flex items-center justify-center gap-2"
      >
        <Send size={20} />
        Publicar
      </button>
    </form>
  );
};

export default PostEditor;