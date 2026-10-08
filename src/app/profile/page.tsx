"use client"
import { useState } from 'react';
import { signOut, updateUser, useSession } from '@/lib/auth-client';
import Link from 'next/link';

const ProfilePage = () => {
    const { data: session, isPending } = useSession();
  const [show, setShow] = useState(false);
    
        if (isPending) {
          return <p>Loading...</p>;
        }
        
        const user = session?.user 

        //  const handleSignOut =async()=>{
                
        //         await signOut();
        //     }

    const handleUpdateProfile = async(e:React.SubmitEvent<HTMLFormElement>) =>{

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries()) as {name:string, image:string};

        await updateUser({
          ...userData
        });
    }

    const handleShowForm = () => {
      setShow(!show);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 px-4 py-10">
      <div className="mx-auto max-w-md">
        <div className="overflow-hidden rounded-3xl bg-base-100 shadow-2xl ring-1 ring-base-300">
          {/* Header */}
          <div className="h-28 bg-gradient-to-r from-red-600 to-rose-500"></div>

          {/* Profile */}
          <div className="-mt-14 px-6 pb-6">
            <div className="flex justify-center">
              <Link href="/profile">
                <div className="avatar">
                  <div className="w-28 rounded-full bg-base-100 p-1 shadow-xl ring-4 ring-base-100">
                    <img
                      alt="Profile avatar"
                      src={user?.image as string}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold text-base-content">
                {user?.name}
              </h2>

              <p className="mt-1 text-sm text-base-content/60">
                {user?.email}
              </p>
            </div>

            {/* Edit Button */}
            <div className="mt-6">
              <button
                onClick={handleShowForm}
                className="btn w-full border-0 bg-gradient-to-r from-red-600 to-rose-500 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-red-700 hover:to-rose-600"
              >
                {show ? "Close Edit Profile" : "Edit Profile"}
              </button>
            </div>

            {/* Edit Form */}
            {show && (
              <form
                onSubmit={handleUpdateProfile}
                className="mt-6 rounded-2xl border border-base-300 bg-base-200/50 p-5 shadow-inner"
              >
                <fieldset className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-base-content">
                      নাম
                    </label>

                    <input
                      name="name"
                      type="text"
                      className="input w-full rounded-xl border-base-300 bg-base-100 transition-all focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="Enter name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-base-content">
                      Image
                    </label>

                    <input
                      name="image"
                      type="url"
                      className="input w-full rounded-xl border-base-300 bg-base-100 transition-all focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="Image URL"
                    />
                  </div>

                  <button className="btn mt-2 w-full rounded-xl border-0 bg-red-600 text-white shadow-md hover:bg-red-700">
                    Update Profile
                  </button>
                </fieldset>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
   
};

export default ProfilePage;