import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const loginDetails = {
      email,
      password,
    };

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginDetails),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Invalid email or password");
      }

      const { jwt_token } = data.data; 
      localStorage.setItem("alumni_jwt_token", jwt_token);

      Swal.fire({
        title: "Success",
        text: "Login successful!",
        icon: "success",
        confirmButtonText: "OK",
      });

      router.push("/home");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message || "Something went wrong",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <main
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url(/lsu.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="max-w-[1000px] w-full bg-white rounded-lg md:shadow-lg p-6 flex flex-col md:flex-row justify-between gap-10 h-full">
        <Image
          className="rounded-t-lg hidden md:block"
          src="/chat.jpg"
          alt="chat"
          width={500}
          height={400}
        />
        <div className="text-center w-full md:w-1/2 md:p-6 p-4">
          <h1 className="text-2xl font-semibold mb-2">
            WELCOME BACK TO LAGOS STATE UNIVERSITY ALUMNI PLATFORM
          </h1>
          <br />
          <h1 className="text-2xl font-semibold mb-2">Sign in</h1>
          <p className="mb-4">
          Don&#39;t have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Click here to sign up
            </Link>
          </p>

          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Enter password"
                required
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEye className="text-gray-500 cursor-pointer" />
                ) : (
                  <FaEyeSlash className="text-gray-500 cursor-pointer" />
                )}
              </span>
            </div>

            <div className="mb-4 flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" id="rememberCheck" className="mr-2" />
                <label htmlFor="rememberCheck" className="text-sm">
                  Remember me?
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-blue-500 hover:underline text-sm"
              >
                Forgot password?
              </Link>
            </div>

            <div className="mb-4">
            <button
                  type="submit"
                  className={`w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                  ) : (
                    "Login"
                  )}
                </button>
            </div>

            <p className="text-center text-sm text-gray-500">
              ©2024{" "}
              <Link href="https://www.lasu.com" className="hover:underline">
                LASU
              </Link>
              . All rights reserved.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
