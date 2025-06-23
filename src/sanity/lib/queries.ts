// src/sanity/lib/queries.ts
export const projectsQuery = `
  *[_type == "project"] | order(year desc) {
    _id,
    title,
    slug,
    company,
    year,
    summary,
    description,
    "coverImageUrl": coverImage.asset->url,
    results,
    link,
    tags
  }
`

export const testimonialsQuery = `
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    company,
    quote,
    "imageUrl": image.asset->url,
    link
  }
`;

export const blogPreviewQuery = `
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    publishedAt,
    "mainImageUrl": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    body[0]{..., children[]{text}},
  }
`;