import { ICategory } from '@/type/Category';
import Link from 'next/link';
import React from 'react';



const NavbarPage = async () => {
    let filterData: ICategory[] = [];

    try{
        const res = await fetch(process.env.BANGLA_NEWS_CATEGORIES_API_KEY as string);
        if(!res.ok){
            throw new Error('Failed to fetch data');
        }
        const categories = await res.json();
        const data: ICategory[] = categories.data;

         filterData = data.filter(item=>item.scrapable);
    }
    catch(err){
        console.error("Error featching fit data", err);
    }

    return (
      <div className="flex gap-5 justify-center items-center mt-4  ">
        <Link href="/" className="hover:text-red-700 transition-colors">
          হোম
        </Link>
        {filterData.map((item, index) => (
          <Link
            key={index}
            href={item.slug}
            className="hover:text-red-700 transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </div>
    );
};

export default NavbarPage;
