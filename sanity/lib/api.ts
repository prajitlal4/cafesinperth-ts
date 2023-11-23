import { createClient } from "@sanity/client"
import { getReview, getAllPaths, getTopThreePosts, getSiteMapInfo, getNextPrevPosts, getAllPosts } from './queries';

export const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
  apiVersion: "2021-03-25",
});

export type FeaturedReviewPost = { //The review which gets displayed on the home page
  title: string;
  slug: string;
  author : {
    name: string;
    image: string;
  };
  location: string;
  categories: any;
  imageUrl: string;
  publishedAt: string;
  description: string;
}


export const fetchReview = async (slug : String) => {
  const review = await client.fetch(getReview, { slug });
  return review;
}

export const fetchReviewsPath = async () => {
  const reviewPaths = await client.fetch(getAllPaths);
  return reviewPaths;
}

export const fetchTop3ReviewsPath = async () => {
  const featuredReviews: FeaturedReviewPost[] = await client.fetch(getTopThreePosts);
  return featuredReviews;
}

export const fetchSiteMapInfo = async () => {
  const siteMapInfo = await client.fetch(getSiteMapInfo);
  return siteMapInfo;
}

export const fetchNextPrevPost = async (currentSlug : String) => {
  const nextPrevPosts = await client.fetch(getNextPrevPosts, { currentSlug });
  return nextPrevPosts;
}

export const fetchAllReviews = async () => {
  const allReviews = await client.fetch(getAllPosts);
  return allReviews;
}
