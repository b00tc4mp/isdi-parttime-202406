import React, { useEffect, useState } from "react";
import UserProfile from "../../components/forms/UserProfile";
import getUser from "../../logic/getUser";
{
  /* import updateUser */
}

function MyProfile() {
  return (
    <>
      <section className="w-screen h-full min-h-[calc(100vh-var(--header-heigth))] sm:py-20">
        <UserProfile
          className="mx-auto max-sm:min-h-[calc(100vh-var(--header-heigth))]"
          onSubmit={onSubmit}
        />
      </section>
    </>
  );
}

export default MyProfile;
