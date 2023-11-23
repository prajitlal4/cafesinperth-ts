import { format } from "date-fns";
import { FeaturedReviewPost } from "../../../sanity/lib/api";
import Image from "next/image";
import Link from "next/link";
import { FaGlassMartiniAlt } from "@react-icons/all-files/fa/FaGlassMartiniAlt";
import { FaWheelchair } from "@react-icons/all-files/fa/FaWheelchair";
import { FaToilet } from "@react-icons/all-files/fa/FaToilet";
import { FaDog } from "@react-icons/all-files/fa/FaDog";
import { FaCoffee } from "@react-icons/all-files/fa/FaCoffee";
import { FaUtensils } from "@react-icons/all-files/fa/FaUtensils";
import { FaBaby } from "@react-icons/all-files/fa/FaBaby";

export function chooseIcon(category: string) {
  switch (category) {
    case "Wheelchair Access":
      return <FaWheelchair />;
    case "Alcohol":
      return <FaGlassMartiniAlt />;
    case "Restroom":
      return <FaToilet />;
    case "Pet Friendly":
      return <FaDog />;
    case "Coffee":
      return <FaCoffee />;
    case "Food":
      return <FaUtensils />;
    case "Kids Area":
      return <FaBaby />;
    default:
      return null;
  }
}

export default function FeaturedReview({
  review,
}: {
  review: FeaturedReviewPost;
}) {
  const publishedDate = format(new Date(review.publishedAt), "do LLLL yyyy");

  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <Image
          src={review.imageUrl}
          alt=""
          height={300}
          width={500}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="grid grid-cols-6 gap-3 mt-4">
          {review.categories.map((category, index) => (
            <span
              key={index}
              className="relative inline-flex justify-center items-center py-2 rounded-full text-md font-medium bg-gray-100 text-gray-800"
            >
              {chooseIcon(category.title)}
            </span>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-xs">
          <p className="text-gray-500 py-1.5 ">{publishedDate}</p>
          <p className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {review.location}
          </p>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={`review/${review.slug}`}>
              <span className="absolute inset-0" />
              <p className="line-clamp-2">{review.title}</p>
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {review.description}
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
            <p className=" text-gray-900">{review.author.name}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
