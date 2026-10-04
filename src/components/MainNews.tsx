import { ISection } from "@/type/Section";
import Image from "next/image";
import React from "react";

interface ISectionProps {
  news: ISection[];
}

const MainNewsPage = ({ news }: ISectionProps) => {
  const [firstNews, ...otherNews] = news;

  if (!firstNews) return null;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* ================= Main News ================= */}
        <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
          {/* Image */}
          <div className="relative h-64 w-full overflow-hidden md:h-80">
            {firstNews.imageUrl ? (
              <Image
                src={firstNews.imageUrl}
                alt={firstNews.imageAlt || firstNews.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gray-100 text-gray-400">
                No Image
              </div>
            )}

            {/* Category overlay */}
            <div className="absolute bottom-3 left-3">
              <span className="rounded bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                {firstNews.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h1 className="text-xl font-bold leading-snug text-gray-900 transition group-hover:text-red-600 md:text-2xl">
              {firstNews.title}
            </h1>

            {firstNews.description && (
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                {firstNews.description}
              </p>
            )}

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-gray-500">{firstNews.source}</span>

              <span className="text-sm font-semibold text-red-600">
                বিস্তারিত →
              </span>
            </div>
          </div>
        </article>

        {/* ================= Other News ================= */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          {otherNews.slice(0, 4).map((other, index) => (
            <article
              key={other.id}
              className={`group flex gap-4 p-4 transition hover:bg-gray-50 ${
                index !== 3 ? "border-b border-gray-200" : ""
              }`}
            >
              {/* Small Image */}
              <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                {other.imageUrl ? (
                  <Image
                    src={other.imageUrl}
                    alt={other.imageAlt || other.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-gray-400">
                    No Image
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <p className="mb-1 text-xs font-semibold text-red-600">
                  {other.category}
                </p>

                <h2 className="line-clamp-2 text-sm font-bold leading-5 text-gray-800 transition group-hover:text-red-600 md:text-base">
                  {other.title}
                </h2>

                <p className="mt-1 text-xs text-gray-400">{other.source}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainNewsPage;
