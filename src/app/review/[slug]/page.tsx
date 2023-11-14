import { PortableText } from "@portabletext/react";
import { fetchReviewsPath, fetchReview } from "../../../../sanity/lib/api";
import FullReview from "@/app/components/FullReview";


export async function generateStaticParams() {
  const reviewSlugs = await fetchReviewsPath();

  return reviewSlugs.map((review: any) => ({
    params: {
      slug: review.slug.current,
    },
  }));
}

export default async function Review({ params }: { params: { slug: string }}) {
  const review = await fetchReview(params.slug);

  return (
    <div>
      <FullReview review={review} />
    </div>
  )
}


