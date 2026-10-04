import { IMostReadNews } from "@/type/MostReadNews";
import React from "react";

const MostReadNewsPage = async () => {
  let mostreadnews: IMostReadNews[] = [];

  try {
    const res = await fetch(
      process.env.BANGLA_NEWS_MOST_READ_API_KEY as string,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch most read news");
    }

    const data = await res.json();
    mostreadnews = data.data;

    console.log("most read data", mostreadnews);
  } catch (error) {
    console.error("Error fetching most read news", error);
  }

  return (
    <section className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
        <h1 className="border-l-4 border-red-600 pl-3 text-lg font-bold text-gray-900">
          সর্বাধিক পঠিত
        </h1>

        <span className="text-xs font-medium text-gray-400">Most Read</span>
      </div>

      {/* News List */}
      <div>
        {mostreadnews.map((news, i) => (
          <article
            key={news.id}
            className="group flex gap-3 border-b border-gray-100 px-4 py-3 transition last:border-b-0 hover:bg-red-50"
          >
            {/* Number */}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-500 transition group-hover:bg-red-600 group-hover:text-white">
              {i + 1}
            </div>

            {/* Title */}
            <div className="min-w-0 flex-1">
              <h2 className="line-clamp-2 text-sm font-semibold leading-5 text-gray-800 transition group-hover:text-red-600 md:text-base">
                {news.title}
              </h2>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MostReadNewsPage;
