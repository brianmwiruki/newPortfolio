'use client';

import React from 'react';
import toast from 'react-hot-toast';

type SocialShareButtonsProps = {
  title: string;
  slug: string;
};

export const SocialShareButtons = ({ title, slug }: SocialShareButtonsProps) => {
  const [shareUrl, setShareUrl] = React.useState<string>('');

  React.useEffect(() => {
    setShareUrl(`${window.location.origin}/blog/${slug}`);
  }, [slug]);

  if (!shareUrl) {
    return null; // Don't render until we have the URL
  }
    
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;
  const linkedinShare = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="mt-10 flex flex-wrap gap-4 items-center">
      <span className="text-white/70 font-semibold mr-2">Share:</span>
      <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="bg-[#1da1f2] text-white px-3 py-1 rounded hover:bg-[#0d8ddb] transition">Twitter/X</a>
      <a href={linkedinShare} target="_blank" rel="noopener noreferrer" className="bg-[#0077b5] text-white px-3 py-1 rounded hover:bg-[#005983] transition">LinkedIn</a>
      <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="bg-[#4267B2] text-white px-3 py-1 rounded hover:bg-[#314d86] transition">Facebook</a>
      <button
        onClick={() => {
          navigator.clipboard.writeText(shareUrl);
          toast.success('Link copied to clipboard!');
        }}
        className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition"
      >
        Copy Link
      </button>
    </div>
  );
}; 