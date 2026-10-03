import Image from 'next/image';
import React from 'react';

const HeaderPage = () => {

    const date = new Date().toLocaleDateString('bn-BD',{
        dateStyle:'full'
    });
    console.log(date);

    return (
      <div className="  justify-center">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className=" flex items-center gap-2 max-width-7xl mx-auto">
            <Image src={"/logo.webp"} alt="Logo" width={50} height={50} />
            <div>
              <h2>Bangla News 24</h2>
              <p className="text-gray-400">{date}</p>
            </div>
          </div>
          <div className="flex gap-2 items-baseline">
            <button className="hover:text-red-700 cursor-pointer">
              সাইন ইন
            </button>
            <button className="btn bg-red-700 text-white hover:bg-red-900 cursor-pointer">
              সাইন আপ
            </button>
          </div>
        </div>
      </div>
    );
};

export default HeaderPage;