'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

type LikeButtonProps = {
  slug: string;
};

export default function LikeButton({ slug }: LikeButtonProps) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Load likes from localStorage
    const storedLikes = localStorage.getItem(`blog-likes-${slug}`);
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    }
    const hasUserLiked = localStorage.getItem(`blog-liked-${slug}`);
    if (hasUserLiked) {
      setHasLiked(true);
    }
  }, [slug]);

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      setIsAnimating(true);
      
      // Store in localStorage
      localStorage.setItem(`blog-likes-${slug}`, newLikes.toString());
      localStorage.setItem(`blog-liked-${slug}`, 'true');

      // Reset animation
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full 
        ${hasLiked 
          ? 'bg-pink-500/10 text-pink-500' 
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        } transition-all duration-300 ease-in-out`}
      disabled={hasLiked}
    >
      <Heart 
        className={`w-4 h-4 ${isAnimating ? 'scale-125' : 'scale-100'} 
          ${hasLiked ? 'fill-pink-500' : 'fill-none'} 
          transition-all duration-300`}
      />
      <span>{likes} {likes === 1 ? 'like' : 'likes'}</span>
    </button>
  );
} 