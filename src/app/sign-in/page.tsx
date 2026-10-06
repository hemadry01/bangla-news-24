"use client"
import { signIn } from '@/lib/auth-client';
import React from 'react';

const SignInPage = () => {

  const onSubmit = async(e: React.SubmitEvent<HTMLFormElement>) =>{

    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const data = Object.fromEntries(fromData.entries()) as {email:string, password:string};

    const { data: resdata, error } = await signIn.email({
      email: data.email ,
      password: data.password ,
      rememberMe: true,
      callbackURL: "/",
      
    });
    if(error){
      alert("Invalid email or password");
    }
  }

  const handleWithGoogle = async() =>{
  
         try {
           await signIn.social({
             provider: "google",
           });
         } catch (error) {
           console.error("Google Sign In Error:", error);
         }
      }

    return (
      <div className="flex flex-col items-center justify-center mt-5">
        <h2 className="text-2xl font-bold text-red-700"> সাইন ইন</h2>
        <form onSubmit={onSubmit}>
          <fieldset className="fieldset rounded-box w-[400px] ">
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
              সাইন ইন করুন
            </button>
          </fieldset>
        </form>
        <button onClick={handleWithGoogle} className="btn">
          Sign In With Google
        </button>
      </div>
    );
};

export default SignInPage;