import React from 'react';
import { Post } from '../types';
import TimeAgo from './TimeAgo';

interface TimelineProps {
  posts: Post[];
}

const Timeline: React.FC<TimelineProps> = ({ posts }) => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <article
          key={post.id}
          className="border border-[#00ff00]/30 p-6 rounded-lg
                   hover:border-[#00ff00] transition-colors duration-300
                   animate-[fadeIn_0.5s_ease-out]"
        >
          {post.content && (
            <p className="whitespace-pre-wrap mb-4">{post.content}</p>
          )}

          {post.image_url && (
            <img
              src={post.image_url}
              alt=""
              className="max-h-96 object-contain rounded mb-4"
            />
          )}

          {post.video_url && (
            <div className="aspect-video mb-4">
              <iframe
                src={post.video_url}
                className="w-full h-full rounded"
                allowFullScreen
              />
            </div>
          )}

          <TimeAgo
            timestamp={post.created_at}
            className="text-sm text-[#00ff00]/50"
          />
        </article>
      ))}

      {posts.length === 0 && (
        <div className="text-center text-[#00ff00]/50 py-12">
          Nenhuma manifestação ainda...
        </div>
      )}
    </div>
  );
};

export default Timeline;