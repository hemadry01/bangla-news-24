import { INews } from '@/type/News';
import React from 'react';
import { notFound } from "next/navigation";
import NewsDetailPage from '@/components/NewsDetail';

interface INewsCardProps{
    params:Promise<{
        newsId:string
    }>
}

const NewsCard = async({params}:INewsCardProps) => {

    const {newsId} = await params
    console.log("NewsCard", newsId);

    const res = await fetch(
      `https://news-api-v2.vercel.app/api/article/${newsId}`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    const news: INews = data.data;
     if (!news) {
       notFound();
     }

     console.log("Detail",news);

    return (
      <div>
        <NewsDetailPage news={news} />
      </div>
    );
};

export default NewsCard;