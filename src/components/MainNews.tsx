import { IArticle } from '@/type/Article';
import Image from 'next/image';
import React from 'react';

interface ISectionProps{
    news: IArticle[];
}

const MainNewsPage = ({ news }: ISectionProps) => {
    const [firstNews,...otherNews]=news;

    // const otherNews=news.slice(1);
     if (!firstNews) return null;

  return (
    <div className="flex gap-2">
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <Image
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt}
              width={600}
              height={600}
            />
          </figure>
          <div className="card-body">
            <p className="text-red-600 font-semibold">{firstNews.category}</p>
            <h2 className="card-title">{firstNews.title}</h2>
            <p>{firstNews.description}</p>
          </div>
        </div>
      </div>
      <div className="card overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm divide-y divide-gray-300">
        {otherNews.slice(0, 4).map((other) => (
          <div key={other.id} className="p-4">
            <p className="text-red-600 font-semibold">{other.category}</p>
            {other.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNewsPage;