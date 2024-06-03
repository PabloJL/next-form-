import Image from "next/image";
import formImage from "../public/form.png";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <form className="bg-white flex rounded-lg w-3/4 font-latoRegular">
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-3xl pb-2 font-latoBold">Let´s get started 👋</h1>
          <p className="text-lg text-gray-500">
            Join our E-learning platform today and unlock over 500+ courses and
            digital assets ready to download.
          </p>
          <div className="mt-6">
            {/*Name input field*/}
            <div className="pb-4">
              <label
                htmlFor="name"
                className="block font-latoBold text-sm pb-2 "
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:outline-none focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            {/*Email input field*/}
            <div className="pb-4">
              <label
                htmlFor="email"
                className="block font-latoBold text-sm pb-2 "
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:outline-none focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            {/*Country input field*/}
            <div className="pb-4">
              <label
                htmlFor="country"
                className="block font-latoBold text-sm pb-2 "
              >
                Country
              </label>
              <select
                name="country"
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
                <option>Germany</option>
                <option>Australia</option>
              </select>
            </div>
            {/*Terms of Service input field*/}
            <div className="pb-4">
              <label
                htmlFor="terms"
                className="block font-latoBold text-sm pb-2 "
              >
                Terms of Service
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  value="checked"
                  className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                />
                <p className="text-sm font-latoBold text-gray-500">
                  I agree to the Terms and Service that my data will be taken
                  and sold.
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
            >
              Start learning today!
            </button>
          </div>
        </div>
        <figure className=" flex-1 relative">
          <Image
            src={formImage}
            alt="Girl looking at books"
            fill
            className="object-cover rounded-lg"
          />
        </figure>
      </form>
    </main>
  );
}
