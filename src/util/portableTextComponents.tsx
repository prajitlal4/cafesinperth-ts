import { PortableText } from "@portabletext/react";
import { client } from "../../sanity/lib/api";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { format } from "date-fns";

export const builder = imageUrlBuilder(client);

const mainImageUrl = (mainImage: any) => {
  return builder
    .image(mainImage.asset._ref)
    .width(1280)
    .format("webp")
    .height(720)
    .url();
};

const PortableTextComponents = ({
  content,
  description,
  publishedAt,
  mainImage,
  updatedAt,
  author,
}: {
  content: any;
  description: string;
  publishedAt: Date;
  mainImage: any;
  updatedAt: Date;
  author: any;
}) => {
  const publishedDate = format(new Date(publishedAt), "do LLLL yyyy");
  const updatedDate = format(new Date(updatedAt), "do LLLL yyyy");

  return (
    <>
      {description && (
        <p className="mb-4 mt-3 text-md lg:text-lg leading-7 text-gray-900">
          {description}
        </p>
      )}
      {publishedAt && (
        <p className="text-gray-500 font-light">{publishedDate}</p>
      )}
      {mainImage && (
        <Image
          src={mainImageUrl(mainImage)}
          width={1280}
          height={720}
          alt={mainImage?.alt || "Descriptive text for image"}
          className="bg-gray-50 object-cover rounded-2xl mt-5 mb-10 aspect-video"
        />
      )}
      <PortableText
        value={content}
        components={{
          types: {
            image: ({ value }: { value: any }) => {
              if (!value?.asset?._ref) {
                return null;
              }
              return (
                <figure className="flex flex-col items-center justify-center my-8">
                  <Image
                    src={builder
                      .image(value.asset._ref)
                      .width(1920)
                      .format("webp")
                      .height(1080)
                      .url()}
                    width={1920}
                    height={1080}
                    alt={value?.alt || "Descriptive text for image"} // Ensure alt text is descriptive for SEO
                    className="bg-gray-50 object-cover rounded-2xl" // 'aspect-video' removed since width and height are set
                  />
                  {value.caption && (
                    <figcaption className="mt-4 text-center text-sm leading-6 text-gray-500">
                      {value.caption}
                    </figcaption>
                  )}
                </figure>
              );
            },
          },
          block: {
            h1: ({ children }) => (
              <h1 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mb-3 mt-6 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl">
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className="mb-3 text-lg font-bold tracking-tight text-gray-900 lg:text-xl">
                {children}
              </h4>
            ),
            normal: ({ children }) => (
              <p className="mb-2 mt-3 text-md leading-7 text-gray-900 lg:text-lg">
                {children}
              </p>
            ),
          },
        }}
      />
      {author && (
        <div className="flex gap-x-3 mt-10">
          {updatedAt && (
            <p className="text-gray-500 font-light">
              Last updated: {updatedDate} by
            </p>
          )}
          <Image
            src={author.image}
            width={800}
            height={800}
            alt={author?.alt || "Descriptive text for image"}
            className="bg-gray-50 object-cover rounded-full w-8 h-8"
          />
          <p className="text-gray-500 font-light">{author.name} </p>
        </div>
      )}
      <hr className="h-px mt-6 bg-gray-200 border-0 dark:bg-gray-300" />
    </>
  );
};

export default PortableTextComponents;
