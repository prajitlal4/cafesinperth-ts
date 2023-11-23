import Link from "next/link";
import { FeaturedReviewPost } from "../../../sanity/lib/api";
import FeaturedReview from "./FeaturedReview";

export default function Featured({
  reviews,
  showAll,
}: {
  reviews: FeaturedReviewPost[];
  showAll?: boolean;
}) {
  return (
    <div className="bg-white py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {showAll ? "Recent Articles" : "All Articles"}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {showAll
              ? "Check out our recent posts on cafes which we have visited in Perth."
              : "Take a look at all the cafes we have visited in Perth."}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <FeaturedReview key={review.slug} review={review} />
          ))}
          {showAll && (
            <div className="flex flex-grow-1 ">
              <Link
                href={`/review`}
                className="inline-flex relative w-full items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-2xl text-black bg-gray-100 transition-colors duration-150 ease-in-out hover:bg-gray-200 outline-dashed outline-2 outline-gray-200"
              >
                See all reviews
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
