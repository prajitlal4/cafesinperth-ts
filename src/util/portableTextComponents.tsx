import { PortableText } from "@portabletext/react";
import { client } from "../../sanity/lib/api";
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import imageUrlBuilder from '@sanity/image-url';
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { format } from "date-fns";
import { DateTimeInputProps } from "sanity";

const builder = imageUrlBuilder(client);

const mainImageUrl = (mainImage: any) => {
  return builder.image(mainImage.asset._ref).width(800).format("webp").height(800).url();
}

const PortableTextComponents = ({ content, description, publishedAt, mainImage }: {content: any, description: string, publishedAt: Date, mainImage: any}) => {
  const publishedDate = format(new Date(publishedAt), "do LLLL yyyy");
  
  return (
    <>
    {description && <p className="mb-4 mt-3 text-md lg:text-lg leading-7 text-gray-900 font">{description}</p>}
    {publishedAt && <p className="text-gray-500">{publishedDate}</p>}
    {mainImage && <Image src={mainImageUrl(mainImage)} width={800} height={800} alt={mainImage?.alt || "Descriptive text for image"} className="bg-gray-50 object-cover rounded-2xl aspect-video mt-10 mb-10" />}
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
                    width={800}
                    height={800}
                    alt={value?.alt || "Descriptive text for image"} // Ensure alt text is descriptive for SEO
                    className="bg-gray-50 object-cover rounded-2xl aspect-video" // 'aspect-video' removed since width and height are set
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
            h1: ({ children }) => <h1 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl">{children}</h1>,
            h2: ({ children }) => <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">{children}</h2>,
            h3: ({ children }) => <h3 className="mb-3 mt-6 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl">{children}</h3>,
            h4: ({ children }) => <h4 className="mb-3 text-lg font-bold tracking-tight text-gray-900 lg:text-xl">{children}</h4>,
            normal: ({ children }) => <p className="mb-2 mt-3 text-md leading-7 text-gray-900 lg:text-lg">{children}</p>,
          },
        }}
      />
    </>
  )
}

export default PortableTextComponents
