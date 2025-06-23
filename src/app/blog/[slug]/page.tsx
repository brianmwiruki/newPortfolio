import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { Metadata } from 'next';
import BlogInteractiveSection from "@/components/BlogInteractiveSection";
import { SocialShareButtons } from "@/components/SocialShareButtons";
import LikeButton from "@/components/LikeButton";

type Props = {
  params: { slug: string };
};

// DYNAMIC METADATA
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      metaTitle,
      metaDescription,
      "mainImageUrl": mainImage.asset->url,
      "socialImageUrl": socialImage.asset->url,
    }`,
    { slug: params.slug }
  );

  if (!post) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }

  const pageTitle = post.metaTitle || post.title;
  const pageDescription = post.metaDescription || 'Read this amazing blog post.';
  const imageUrl = post.socialImageUrl || post.mainImageUrl || 'https://yourdomain.com/default-social-image.jpg';

  return {
    title: `${pageTitle} | Your Site Name`,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `/blog/${params.slug}`,
      siteName: 'Your Site Name',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// MAIN PAGE COMPONENT
export default async function BlogPostPage({ params }: Props) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      "mainImageUrl": mainImage.asset->url,
      "mainImageAlt": mainImage.alt,
      body
    }`,
    { slug: params.slug }
  );

  if (!post) return notFound();

  return (
    <section className="py-16 lg:py-24 bg-gray-950 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/blog" className="text-emerald-300 hover:underline mb-8 inline-block">&larr; Back to all posts</Link>
        <h1 className="font-serif text-4xl md:text-5xl text-sky-300 mb-6">{post.title}</h1>
        <div className="text-xs text-white/50 mb-6">{post.publishedAt ? formatDate(post.publishedAt) : ''}</div>
        {post.mainImageUrl && (
          <div className="relative w-full aspect-[4/3] mb-8">
            <Image
              src={post.mainImageUrl}
              alt={post.mainImageAlt || post.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        )}
        <article className="prose prose-invert prose-lg max-w-none">
          <PortableText value={post.body} />
        </article>
        
        <BlogInteractiveSection 
          title={post.title} 
          slug={post.slug.current} 
        />
      </div>
    </section>
  );
} 