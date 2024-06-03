"use client";
import Image from "next/image";
import formImage from "../public/form.png";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Home() {
  const router = useRouter();

  //Fomik logic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "Mexico",
      terms: false,
    },

    //Validate form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 character or less")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid Email Adress")
        .required("Email is required"),
      terms: Yup.boolean().oneOf([true], "Terms of Service must be accepted"),
    }),

    //submit form
    onSubmit: (values) => {
      router.push(`/success+${values.name}+${values.email}`);
    },
  });
  return (
    <main className="h-screen flex items-center justify-center">
      <form
        className="bg-white flex rounded-lg w-3/4 font-latoRegular"
        onSubmit={formik.handleSubmit}
      >
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
                className={`block font-latoBold text-sm pb-2 ${
                  formik.touched.name && formik.errors.name
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : "Name"}
              </label>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Enter your name"
                onBlur={formik.handleBlur}
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:outline-none focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            {/*Email input field*/}
            <div className="pb-4">
              <label
                htmlFor="email"
                className={`block font-latoBold text-sm pb-2 ${
                  formik.touched.email && formik.errors.email
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email"}
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                value={formik.values.country}
                onChange={formik.handleChange}
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
                className={`block font-latoBold text-sm pb-2 ${
                  formik.touched.terms && formik.errors.terms
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.terms && formik.errors.terms
                  ? formik.errors.terms
                  : "Terms of Service"}
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  onChange={formik.handleChange}
                  value={formik.values.terms}
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
