import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function Subscribe() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
              Stay in the Loop with Perth&apos;s Best Cafes.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Join our weekly newsletter and never miss out on the latest and
              greatest in Perth&apos;s cafe scene.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 border flex-auto rounded-md border-gray-300 bg-white/5 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md border border-gray-300 px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-xs leading-8 text-gray-600">
              Only coffee, no spam. ☕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
