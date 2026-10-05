import { INews } from "@/type/News";
import Image from "next/image";

interface INewsProps {
  news: INews;
}

const NewsDetailPage = ({ news }: INewsProps) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
        {news.title}
      </h1>

      {/* Main Image */}
      <div className="relative w-full h-[250px] md:h-[450px] overflow-hidden rounded-xl mb-8">
        <Image
          src={news.imageUrl}
          alt={news.imageAlt || news.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Article Body */}
      <div className="space-y-6">
        {news.body.map((item, index) => (
          <div key={index}>
            {/* Text */}
            {item.type === "text" && (
              <p className="text-lg leading-8 text-gray-700">{item.text}</p>
            )}

            {/* Subheading */}
            {item.type === "subheading" && (
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
                {item.text}
              </h2>
            )}

            {/* Image */}
            {item.type === "image" && (
              <figure className="my-8">
                <Image
                  src={item.url!}
                  alt={item.caption || ""}
                  width={item.width || 800}
                  height={item.height || 450}
                  className="w-full h-auto rounded-lg"
                />

                {item.caption && (
                  <figcaption className="text-sm text-gray-500 mt-2">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};

export default NewsDetailPage;
