import { PortableText } from "@portabletext/react";
import { client } from "../../sanity/lib/api";
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import imageUrlBuilder from '@sanity/image-url';
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { format } from "date-fns";
import { DateTimeInputProps } from "sanity";

const builder = imageUrlBuilder(client);

function urlFor({ source }: { source: SanityImageSource }) {
  return builder.image(source).url();
}

const PortableTextComponents = ({ content, description, publishedAt }: {content: any, description: string, publishedAt: Date}) => {
  const publishedDate = format(new Date(publishedAt), "do LLLL yyyy");
  
  return (
    <>
    {description && <p className="mb-2 mt-3 text-lg leading-7 text-gray-600">{description}</p>}
    {publishedAt && <p className="text-gray-500">{publishedDate}</p>}
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
                      .width(800)
                      .format("webp")
                      .height(800)
                      .url()}
                    width={500}
                    height={500}
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
            h1: ({ children }) => <h1 className="mb-5 text-5xl font-bold tracking-tight text-gray-900">{children}</h1>,
            h2: ({ children }) => <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900">{children}</h2>,
            h3: ({ children }) => <h3 className="mb-3 mt-6 text-2xl font-bold tracking-tight text-gray-900">{children}</h3>,
            h4: ({ children }) => <h4 className="mb-3 text-xl font-bold tracking-tight text-gray-900">{children}</h4>,
            normal: ({ children }) => <p className="mb-2 mt-3 text-lg leading-7 text-gray-600">{children}</p>,
          },
        }}
      />
    </>
  )
}

export default PortableTextComponents
