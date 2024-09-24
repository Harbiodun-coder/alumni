
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
  const calculatePasswordStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) strength += 1;

    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;

    if (/\d/.test(password)) strength += 1;

    if (/[\W_]/.test(password)) strength += 1;

    return strength;
  };
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    degree: "",
    gradYear: "",
    currentJob: "",
    phoneNumber: "",
    profilePicture: null,
    linkedinProfile: "",
    twitterProfile: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  useEffect(() => {
    const strength = calculatePasswordStrength(formData.password);
    setPasswordStrength(strength);
  }, [formData.password]);

  useEffect(() => {
    if (
      formData.password !== formData.confirmPassword &&
      formData.confirmPassword
    ) {
      setError("Passwords do not match.");
    } else {
      setError(null);
    }
  }, [formData.password, formData.confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Something went wrong.");
      }

      
      Swal.fire({
        title: 'Success!',
        text: 'Account created successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      setSuccess("Account created successfully!");
    } catch (error) {
      setError(error.message);

     
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const passwordStrengthIndicator = (strength) => {
    switch (strength) {
      case 1:
        return "Weak";
      case 2:
        return "Moderate";
      case 3:
        return "Strong";
      case 4:
        return "Very Strong";
      default:
        return "";
    }
  };

  const progressColor = (strength) => {
    switch (strength) {
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-yellow-500";
      case 3:
        return "bg-blue-500";
      case 4:
        return "bg-green-500";
      default:
        return "bg-gray-300";
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <main
      className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url(/lsu.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="max-w-[1200px] w-full bg-white rounded-lg md:shadow-lg p-6 flex flex-col md:flex-row justify-between gap-10 h-full">
        <Image
          className="rounded-t-lg hidden md:block"
          src="/chat.jpg"
          alt="chat"
          width={500}
          height={400}
        />

        <div className="w-full md:w-1/2 text-center p-4 md:p-6">
          <h1 className="text-2xl font-semibold mb-2">
            WELCOME TO LAGOS STATE UNIVERSITY ALUMNI PLATFORM
          </h1>
          <br />
          <h1 className="text-2xl font-semibold mb-2">SIGN UP</h1>
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Sign in here
            </Link>
          </p>

          <form className="mt-2 md:mt-6" onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <div className="mb-4">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-4 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Password"
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

                <div className="mb-4">
                  <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
                    <div
                      className={`${progressColor(
                        passwordStrength
                      )} h-2.5 rounded-full`}
                      style={{ width: `${(passwordStrength / 4) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Strength: {passwordStrengthIndicator(passwordStrength)}
                  </p>
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button
                  type="button"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={nextStep}
                >
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div className="mb-4">
                  <input
                    type="text"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Degree"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="gradYear"
                    value={formData.gradYear}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Graduation Year"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="currentJob"
                    value={formData.currentJob}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Current Job"
                    required
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={nextStep}
                >
                  Next
                </button>
                <button
                  type="button"
                  className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 mt-4"
                  onClick={prevStep}
                >
                  Previous
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <div className="mb-4">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="file"
                    name="profilePicture"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="linkedinProfile"
                    value={formData.linkedinProfile}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="LinkedIn Profile"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="twitterProfile"
                    value={formData.twitterProfile}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Twitter Profile"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign me up
                </button>
                <button
                  type="button"
                  className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 mt-4"
                  onClick={prevStep}
                >
                  Previous
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
