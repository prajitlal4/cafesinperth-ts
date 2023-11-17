import PortableTextComponents from '@/util/portableTextComponents'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import Breadcrumbs from './Breadcrumbs'
import { fetchNextPrevPost } from '../../../sanity/lib/api'
import Link from 'next/link'

export default async function FullReview( { review }: { review: any }) {

  const pathsArray = [
    { name: 'Review', href: '/review', current: false },
    { name: review.title, href: `/review/${review.slug}`, current: true },
  ]

  const nextPrevious = await fetchNextPrevPost(review.slug);
  const next = nextPrevious.nextPost;
  const prev = nextPrevious.prevPost;

  console.log(nextPrevious)

  return (
    <div className="px-6 py-8 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <Breadcrumbs pathsArray={pathsArray}/>
        <article>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">{review.title}</h1>
          <PortableTextComponents content={review.body} description={review.description} mainImage= {review.mainImage} publishedAt={review.publishedAt} updatedAt={review._updatedAt} author={review.author} />
        </article>
        <div className="flex justify-between w-full flex-nowrap">
          {prev && (
            <span className="flex-1 flex-grow py-8 rounded-xl mt-8 outline outline-2 outline-gray-100 mr-4 lg:mr-10 transition-colors duration-150 ease-in-out hover:bg-gray-50">
              <Link href={`/review/${prev.slug}`} className="flex text-gray-900  ml-5">
                <span className="text-sm font-medium">Previous Review</span>
              </Link>
              <Link href={`/review/${prev.slug}`} className="block mt-2 text-md font text-gray-900 hover:text-gray-700 ml-5 mr-5">{prev.title}</Link>
            </span>
          )}
          {next && (
            <span className="flex-1 flex-grow py-8 text-right rounded-xl outline outline-2 outline-gray-100 mt-8 ml-4 lg:ml-10 transition-colors duration-150 ease-in-out hover:bg-gray-50">
              <Link href={`/review/${next.slug}`} className="flex justify-end text-gray-900 mr-5">
                <span className="text-sm font-medium">Next Review</span>
              </Link>
              <Link href={`/review/${next.slug}`} className="block mt-2 text-md font text-gray-900 hover:text-gray-700 mr-5 ml-5">{next.title}</Link>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
