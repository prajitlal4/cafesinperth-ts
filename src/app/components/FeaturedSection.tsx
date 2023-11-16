import { FeaturedReviewPost } from "../../../sanity/lib/api";
import FeaturedReview from "./FeaturedReview";

export default function Featured({ 
  reviews,
}: { reviews: FeaturedReviewPost[] }) {
  return (
    <div className="bg-white py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Recent Articles
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Check out our recent posts on cafes which we have visited in Perth.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {reviews.map((review) => (
            <FeaturedReview key={review.slug} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
