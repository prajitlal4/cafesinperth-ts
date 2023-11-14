import PortableTextComponents from '@/util/portableTextComponents'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export default function FullReview( { review }: { review: any }) {
  return (
    <div className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <article>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900">{review.title}</h1>
          <PortableTextComponents content={review.body} description={review.description} mainImage= {review.mainImage} publishedAt={review.publishedAt} />
        </article>
      </div>
    </div>
  )
}
