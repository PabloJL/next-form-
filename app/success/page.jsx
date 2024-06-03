"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Sucess() {
  const router = useRouter();
  const params = useSearchParams();
  // const { name, email } = router.query;
  console.log(params.get("email"));
  // const { name } = routers.query;
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="bg-white flex rounded-lg w-3/4 font-latoRegular text-gray-700 p-16">
        <h1 className="text-3xl pb-4 font-latoBold">
          Thanks for the interest 💫
        </h1>
        <p className="text-lg  text-gray-500">
          We have sent you an email over at . We will get back to you as soon as
          we can!
        </p>
      </div>
    </main>
  );
}
