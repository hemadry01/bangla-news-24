import React from 'react';

const SignInPage = () => {
    return (
      <div className="flex flex-col items-center justify-center mt-5">
        <h2 className="text-2xl font-bold text-red-700"> সাইন ইন</h2>
        <form>
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
      </div>
    );
};

export default SignInPage;