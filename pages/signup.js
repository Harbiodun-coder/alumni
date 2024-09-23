import { useState } from "react";
import Link from "next/link";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-2">Sign up</h1>
          <p>
            Already have an account?{" "}
            <Link href="/sign-in" className="text-blue-500 hover:underline">
              Sign in here
            </Link>
          </p>
        </div>

        <form className="mt-6">
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              placeholder="Enter email"
            />
            <small className="text-gray-500">We will never share your email with anyone else.</small>
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              placeholder="Enter new password"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
            </span>
            
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              placeholder="Confirm password"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="keepsignedCheck"
              className="mr-2"
            />
            <label htmlFor="keepsignedCheck" className="text-sm">Keep me signed in</label>
          </div>

         
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign me up
            </button>
          </div>

          <p className="text-center text-sm text-gray-500">
            ©2024 <Link href="https://www.lasu.com" className="hover:underline">LASU</Link>. All rights reserved.
          </p>
        </form>
      </div>
    </main>
  );
}
