import NewsCardPage from "@/components/NewsCard";
import { IArticle } from "@/type/Article";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  
  const { slug } = await params;
  console.log("Slug:", slug);
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${slug}`,
  );

  if(!res.ok){
    throw new Error("Failed to fetch data");
  }
   
  const data = await res.json();
  const otherNews:IArticle[]=data.data;
  
  if (!otherNews) {
    notFound();
  }

   return (
     <main className="container mx-auto p-5">
       <h1 className="text-3xl font-bold mb-1 text-red-500 ">{data.title}</h1>
       <hr className="border-gray-300 mb-6" />

       <div className="grid grid-cols-3 gap-10">
         {otherNews.map((anews) => (
           <NewsCardPage key={anews.id} anews={anews} />
         ))}
       </div>
     </main>
   );
};

export default CategoryPage;
