import MainNewsPage from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostReadNewsPage from "@/components/MostReadNews";
import NewsCardPage from "@/components/NewsCard";
import { IArticle } from "@/type/Article";
import { ISection } from "@/type/Section";

export default async function HomePage() {
  let mainNews: IArticle[] = [];
  let otherNews: ISection[] = [];

  try {
    const res = await fetch(process.env.BANGLA_NEWS_SECTIONS_API_KEY as string);

    if (!res.ok) {
      throw new Error("Failed to fetch sections data");
    }

    const data = await res.json();

    const section: ISection[] = data.data;

    mainNews = section[0]?.articles ?? [];
    otherNews = section.slice(1);
  } catch (error) {
    console.error("Error fetching sections data", error);
  }

  return (
    <div>
      {/* <Marquee /> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto mt-4">
        {/* Main Content */}
        <div className="lg:col-span-2 p-4">
          <MainNewsPage news={mainNews} />

          {/* Other News */}
          <div className="grid gap-8 mt-5">
            {otherNews.map((on) => (
              <div key={on.curationId}>
                <h2 className="text-2xl font-bold mb-3">{on.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {on.articles.map((anews) => (
                    <NewsCardPage key={anews.id} anews={anews} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Read */}
        <div className="lg:col-span-1">
          <MostReadNewsPage />
        </div>
      </div>
    </div>
  );
}
