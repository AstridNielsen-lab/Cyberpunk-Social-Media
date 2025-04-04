import React, { useEffect, useRef, useState } from 'react';
import { Post } from '../types';
import TimeAgo from './TimeAgo';

interface TimelineProps {
  posts: Post[];
}

const Timeline: React.FC<TimelineProps> = ({ posts }) => {
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          // Ready for next batch of posts when implemented
          setIsLoading(true);
          setTimeout(() => setIsLoading(false), 1000);
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [isLoading]);

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
              loading="lazy"
            />
          )}

          {post.video_url && (
            <div className="aspect-video mb-4">
              <iframe
                src={post.video_url}
                className="w-full h-full rounded"
                allowFullScreen
                loading="lazy"
              />
            </div>
          )}

          <TimeAgo
            timestamp={post.created_at}
            className="text-sm text-[#00ff00]/50"
          />
        </article>
      ))}

      {posts.length === 0 ? (
        <div className="text-center text-[#00ff00]/50 py-12">
          Nenhuma manifestação ainda...
        </div>
      ) : (
        <div
          ref={observerTarget}
          className="py-8 text-center text-[#00ff00]/50"
        >
          {isLoading ? (
            <div className="animate-pulse">Carregando mais posts...</div>
          ) : (
            <div className="h-4" /> // Invisible element for intersection observer
          )}
        </div>
      )}
    </div>
  );
};

export default Timeline;