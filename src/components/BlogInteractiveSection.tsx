'use client';

import { SocialShareButtons } from "./SocialShareButtons";
import LikeButton from "./LikeButton";
import BlogCommentsClient from "./BlogCommentsClient";

type BlogInteractiveSectionProps = {
  title: string;
  slug: string;
};

export default function BlogInteractiveSection({ title, slug }: BlogInteractiveSectionProps) {
  return (
    <>
      <div className="mt-10 mb-6">
        <LikeButton slug={slug} />
      </div>
      <SocialShareButtons title={title} slug={slug} />
      <BlogCommentsClient />
    </>
  );
} 