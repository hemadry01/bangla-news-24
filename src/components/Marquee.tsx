import { INews } from '@/type/News';
import React from 'react';
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async() => {
    let data: INews[] = [];
    try {
      const res = await fetch(
        process.env.BANGLA_NEWS_LETEST_NEWS_API_KEY as string,
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const latestNews = await res.json();
       data = latestNews.data;
      //console.log("Latest News:", data);
    } catch (err) {
      console.error("Error fetching latest news", err);
    }

    return (
      <div className="bg-red-700 text-white mt-3">
        <div className="flex max-w-7xl mx-auto items-center">
          <div className="bg-red-800 py-1 px-5">সর্বশেষ</div>

          <MarqueeText direction="right" duration={10} py-1>
            {data.map((item) => (
              <span key={item.id}>
                <span>{item.title}</span>
                <span className="mx-5">•</span>
              </span>
            ))}
          </MarqueeText>
        </div>
      </div>
    );
};

export default Marquee;