import Image from "next/image";
import Link from "next/link";

export default function HomeComponent() {

  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center  py-5 mx-3 rounded-2xl bg-opacity-80">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl px-3">
              Your one source of truth for the best Cafes in Perth.
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={`/review`}
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Cafes <span aria-hidden="true">→</span>
              </Link>
              <Link href={`#subscribe`} className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Stay up to date! <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
