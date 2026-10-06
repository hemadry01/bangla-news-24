"use client"
import { signUp } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';

const SignUpPage = () => {

    const onSubmit = async(e: React.SubmitEvent<HTMLElement> ) => {
        e.preventDefault();
        // const fromData = new FormData(e.currentTarget);
        const fromData = new FormData(e.target);
        const data = Object.fromEntries(fromData.entries()) as {name:string, email:string, image:string, password:string};
        //const data = Object.fromEntries(fromData.entries()) ;

        console.log("from data submit",data);

        const { data: resdata, error } = await signUp.email({
          ...data,
          callbackURL: "/",
        })
        if(resdata){
            console.log(resdata);
            redirect("/");
        }
        if(error){
            alert("User already exists. Use another email");
        }

        ///////////////////////////////////////////////////////////////
        // const { data: resdata, error } = await signUp.email({
        //   name: String(data.name),
        //   image:String(data.image),
        //   email: String(data.email),
        //   password: String(data.password),
        //   callbackURL: "/",
        // });
        //  if (resdata) {
        //    console.log(resdata);
        //    redirect("/");
        //  }
        //  if (error) {
        //    //console.log(error);
        //    alert("User already exists. Use another email");
        //  }
        ///////////////////////////////////////////////////////////////
    };

    return (
      <div className="flex flex-col items-center justify-center mt-5">
        <h2 className="text-2xl font-bold text-red-700"> সাইন আপ</h2>
        <form onSubmit={onSubmit}>
          <fieldset className="fieldset rounded-box w-[400px] ">
            <label className="label">নাম</label>
            <input
              name="name"
              type="name"
              className="input w-full"
              placeholder="Enter name"
            />

            <label className="label">Image</label>
            <input
              name="image"
              type="url"
              className="input w-full"
              placeholder="Image"
            />

            <label className="label">ইমেইল</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
            />

            <label className="label">পাসওয়ার্ড</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
            />

            <button className="btn bg-red-600 mt-4 text-white">
              সাইন আপ করুন
            </button>
          </fieldset>
        </form>
      </div>
    );
};

export default SignUpPage;