import { createClient } from "@sanity/client"
import { getReview, getAllPaths, getTopThreePosts } from './queries';

const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
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
  categories: string[];
  imageUrl: string;
  publishedAt: string;
  bodyText: string;
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
