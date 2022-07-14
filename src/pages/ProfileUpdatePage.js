import React from "react";
import UpdateUserForm from "../components/users/UpdateUserForm";

export default function ProfileUpdatePage() {
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-auto object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="absolute top-0 left-0 w-full h-auto px-4 py-8 z-30">
        <div className="max-w-[450px] h-auto mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] h-auto mx-auto py-4">
            <p className="text-2xl font-bold text-2 text-center">
              Update Your Information
            </p>
            <UpdateUserForm />
          </div>
        </div>
      </div>
    </div>
  );
}
