import groq from "groq";

// getting slugs for reviews
export const getAllPaths = groq`*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}`;

// getting top 3 posts for featured section
export const getTopThreePosts = groq`*[_type == "post"] | order(_createdAt desc)[0...3] {
  "slug": slug.current,
  title,
  author->{
    name,
    "image": image.asset->url
  },
  location,
  description,
  categories[]->{
    title
  },
  "imageUrl": mainImage.asset->url,
  "publishedAt": publishedAt,
}`;

export const getAllPosts = groq`*[_type == "post"] | order(_createdAt desc) {
  "slug": slug.current,
  title,
  author->{
    name,
    "image": image.asset->url
  },
  location,
  description,
  categories[]->{
    title
  },
  "imageUrl": mainImage.asset->url,
  "publishedAt": publishedAt,
}`;

// getting single review
export const getReview = groq`*[_type == "post" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  author->{
    name,
    "image": image.asset->url
  },
  location,
  description,
  categories[]->{
    title
  },
  mainImage,
  "publishedAt": publishedAt,
  body,
  seoTitle,
  seoDescription,
  _updatedAt
}`;

export const getAuthor = groq`*[_id == $ref][0]`;

export const getSiteMapInfo = groq`*[_type == "post"]{
  "slug": slug.current,
  _updatedAt,
  _createdAt
}`;

export const getNextPrevPosts = groq`*[_type == "post" && slug.current == $currentSlug]{
  "prevPost": *[_type == "post" && _createdAt < ^._createdAt] | order(_createdAt desc)[0]{
    "slug": slug.current,
    title,
    description,
    mainImage,
    author->{
      name,
      "image": image.asset->url
    },
  },
  "nextPost": *[_type == "post" && _createdAt > ^._createdAt] | order(_createdAt asc)[0]{
    "slug": slug.current,
    title,
    description,
    mainImage,
    author->{
      name,
      "image": image.asset->url
    },
  }
}[0]`;