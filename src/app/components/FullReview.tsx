import PortableTextComponents, { builder } from "@/util/portableTextComponents";
import Breadcrumbs from "./Breadcrumbs";
import { fetchNextPrevPost } from "../../../sanity/lib/api";
import Link from "next/link";
import { chooseIcon } from "./FeaturedReview";
import { Key } from "react";

const imageUrl = (mainImage: any) => {
  return builder
    .image(mainImage.asset._ref)
    .width(1800)
    .format("webp")
    .height(1800)
    .url();
};

export default async function FullReview({ review }: { review: any }) {
  const pathsArray = [
    { name: "Review", href: `/review`, current: false },
    { name: review.title, href: `/review/${review.slug}`, current: true },
  ];

  const nextPrevious = await fetchNextPrevPost(review.slug);
  const next = nextPrevious.nextPost;
  const prev = nextPrevious.prevPost;

  //SEO JsonLD Optimisationg
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: review.title,
    image: imageUrl(review.mainImage),
    datePublished: review.publishedAt,
    dateModified: review._updatedAt,
    author: {
      "@type": "Person",
      name: review.author.name,
      // url: "https://www.prajitlal.tech", will insert this later after I have a personal website
    },
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="px-6 py-8 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <Breadcrumbs pathsArray={pathsArray} />
          <article>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              {review.title}
            </h1>
            <div className="grid grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-3 my-5">
              {review.categories.map(
                (
                  category: { title: string },
                  index: Key | null | undefined
                ) => (
                  <span
                    key={index}
                    className="relative inline-flex justify-center items-center py-2 rounded-full text-md font-medium bg-gray-100 text-gray-800"
                  >
                    {chooseIcon(category.title)}
                  </span>
                )
              )}
            </div>
            <PortableTextComponents
              content={review.body}
              description={review.description}
              mainImage={review.mainImage}
              publishedAt={review.publishedAt}
              updatedAt={review._updatedAt}
              author={review.author}
            />
          </article>
          <div className="flex justify-between w-full flex-nowrap">
            {prev && (
              <span className="flex-1 flex-grow py-8 rounded-xl mt-8 outline outline-2 outline-gray-100 mr-4 lg:mr-10 transition-colors duration-150 ease-in-out hover:bg-gray-50">
                <Link
                  href={`/review/${prev.slug}`}
                  className="flex text-gray-900  ml-5"
                >
                  <span className="text-sm font-medium">Previous Review</span>
                </Link>
                <Link
                  href={`/review/${prev.slug}`}
                  className="block mt-2 text-md font text-gray-900 hover:text-gray-700 ml-5 mr-5"
                >
                  {prev.title}
                </Link>
              </span>
            )}
            {next && (
              <span className="flex-1 flex-grow py-8 text-right rounded-xl outline outline-2 outline-gray-100 mt-8 ml-4 lg:ml-10 transition-colors duration-150 ease-in-out hover:bg-gray-50">
                <Link
                  href={`/review/${next.slug}`}
                  className="flex justify-end text-gray-900 mr-5"
                >
                  <span className="text-sm font-medium">Next Review</span>
                </Link>
                <Link
                  href={`/review/${next.slug}`}
                  className="block mt-2 text-md font text-gray-900 hover:text-gray-700 mr-5 ml-5"
                >
                  {next.title}
                </Link>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
