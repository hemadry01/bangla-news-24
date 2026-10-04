
import MainNewsPage from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import { ISection } from "@/type/Section";
import Image from "next/image";

export default async function HomePage() {

let mainNews: ISection[] = [];

try{
    const res = await fetch(process.env.BANGLA_NEWS_SECTIONS_API_KEY as string);
    if(!res.ok){
      throw new Error("Failed to fetch sections data");
    }

    const data = await res.json();
    const section =data.data;

    mainNews = section[0].articles;
    //console.log("Section Data",section);
    console.log("Main News",mainNews);

}
catch(error){
  console.error("Error fetching sections data", error);
}


  return (
    <div>
      <Marquee/>
      <div className="grid grid-cols-3 max-w-7xl mx-auto mt-4">
        <div className="col-span-2 ">
          <MainNewsPage news={mainNews}/>
        </div>
        <div className="col-span-1 bg-blue-600 p-10"></div>

      </div>
    </div>
  );
}
 