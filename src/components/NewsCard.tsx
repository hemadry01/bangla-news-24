import { INews } from '@/type/News';
import Image from 'next/image';
import React from 'react';

interface INewsProps{
    anews:INews
}

const NewsCardPage = ({ anews }:INewsProps) => {

    if (anews.category === "সামাজিক মাধ্যমে বিবিসি বাংলা") {
      return null;
    }

    if (anews.category === "বিবিসি বাংলা এখন ইন্সটাগ্রামে!") {
      return null;
    }

    if (anews.category === "বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!") {
      return null;
    }



  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-gray-100">
        {anews.imageUrl ? (
          <Image
            src={anews.imageUrl}
            alt={anews.imageAlt || anews.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-red-600">
          {anews.category}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-bold leading-7 text-gray-900 transition-colors duration-200 group-hover:text-red-600">
          {anews.title}
        </h2>

        {/* Description */}
        {anews.description && (
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
            {anews.description}
          </p>
        )}

        {/* Bottom */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-xs text-gray-500">{anews.source}</span>

          <span className="text-xs font-semibold text-red-600">
            বিস্তারিত →
          </span>
        </div>
      </div>
    </article>
  );
};

export default NewsCardPage;