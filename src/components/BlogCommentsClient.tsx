'use client';
import dynamic from 'next/dynamic';

const GiscusComments = dynamic(() => import('@/components/GiscusComments'), { ssr: false });

export default function BlogCommentsClient() {
  return <GiscusComments />;
}
