import { format } from "date-fns";
import { FeaturedReviewPost } from "../../../sanity/lib/api";
import Image from "next/image";

export default function FeaturedReview({review} : { review: FeaturedReviewPost}) {
  const publishedDate = format(new Date(review.publishedAt), "do LLLL yyyy");

  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <Image
          src={review.imageUrl}
          alt=""
          height={400}
          width={600}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <p className="text-gray-500">
            {publishedDate}
          </p>
          <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {review.location}
          </p>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={"review/" + review.slug}>
              <span className="absolute inset-0" />
              {review.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {review.bodyText}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image
            src={review.author.image}
            alt=""
            height={40}
            width={40}
            className="h-10 w-10 rounded-full bg-gray-100"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <p>
                {review.author.name}
              </p>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
