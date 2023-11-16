import { fetchReviewsPath, fetchReview } from "../../../../sanity/lib/api";
import FullReview from "@/app/components/FullReview";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";
import Subscribe from "@/app/components/Subscribe";


export async function generateStaticParams() {
  const reviewSlugs = await fetchReviewsPath();

  return reviewSlugs.map((review: any) => ({
    params: {
      slug: review.slug.current,
    },
  }));
}

export async function generateMetadata({ params }: { params: { slug: string }}): Promise<Metadata> {
  const review = await fetchReview(params.slug);
  return {
    title: review.seoTitle ?? "Cafe Review",
    description: review.seoDescription ?? "Review of a Cafe in Perth, Western Australia"
  };
}

export default async function Review({ params }: { params: { slug: string }}) {
  const review = await fetchReview(params.slug);
  const title = "Love this article? Subscribe to our newsletter!";
  const description ="Sign up to our weekly digests to help soothe your coffee cravings.";

  return (
    <div>
      <Navbar />
      <FullReview review={review} />
      <Subscribe title={title} description={description} />
      <Footer />
    </div>
  )
}


