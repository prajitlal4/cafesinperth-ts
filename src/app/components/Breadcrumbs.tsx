import { HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default async function Breadcrumbs({ pathsArray }: { pathsArray: any }) {
  return (
    <nav className="flex mb-7 lg:mb-10" aria-label="Breadcrumb">
      <ol
        itemType="https://schema.org/BreadcrumbList"
        role="list"
        className="flex items-center space-x-4"
      >
        <li>
          <div>
            <Link href={`/`} className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pathsArray.map((path: any, key: any) => (
          <li key={key}>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                href={path.href}
                className="ml-4 text-xs lg:text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={path.current ? "page" : undefined}
              >
                {path.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
