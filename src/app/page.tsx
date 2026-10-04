
import MainNewsPage from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostReadNewsPage from "@/components/MostReadNews";
import NewsCardPage from "@/components/NewsCard";
import { IArticle } from "@/type/Article";
import { ISection } from "@/type/Section";

export default async function HomePage() {

let mainNews: IArticle[] = [];
let otherNews: ISection[] = [];

try{
    const res = await fetch(process.env.BANGLA_NEWS_SECTIONS_API_KEY as string);
    if(!res.ok){
      throw new Error("Failed to fetch sections data");
    }

    const data = await res.json();
    const section: ISection[] =data.data;

    mainNews = mainNews = section[0]?.articles ?? [];
    otherNews = section.slice(1);

}
catch(error){
  console.error("Error fetching sections data", error);
}


  return (
    <div>
      <Marquee />
      <div className="grid grid-cols-3 max-w-7xl mx-auto mt-4">
        <div className="col-span-2 p-4">
          <MainNewsPage news={mainNews} />
          {/* ================= Other News ================= */}
          <div className=" grid gap-5 mt-5 p-2">
            {otherNews.map((on) => (
              <div key={on.curationId}>
                <h2>{on.title}</h2>
                <div className="grid mt-3 grid-cols-3 gap-2">
                  {on.articles.map((anews) => (
                    <NewsCardPage key={anews.id} anews={anews} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1">
          <MostReadNewsPage />
        </div>
      </div>
    </div>
  );
}
 