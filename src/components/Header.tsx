import Image from 'next/image';
import React from 'react';
import Nevbar from './Nevbar';
import UserInfo from './UserInfo';

const HeaderPage = () => {

    const date = new Date().toLocaleDateString('bn-BD',{
        dateStyle:'full'
    });
    console.log(date);

    return (
      <div className="relative justify-center mt-4 ">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className=" flex items-center gap-2 max-width-7xl mx-auto">
            <Image src={"/logo.webp"} alt="Logo" width={50} height={50} />
            <div>
              <h2>Bangla News 24</h2>
              <p className="text-gray-400">{date}</p>
            </div>
          </div>
         <UserInfo/>
        </div>
        <Nevbar/>
      </div>
    );
};

export default HeaderPage;