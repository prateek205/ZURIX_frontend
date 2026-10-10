import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiMail, FiLock, FiUser } from "react-icons/fi";
import { toast } from "react-toastify";
import { useRegisterUserMutation } from "../redux/authApi";

const Register = () => {
  const navigate = useNavigate();

  // REGISTER API
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  // STATES
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // REGISTER SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      };

      const response = await registerUser(payload).unwrap();

      console.log("REGISTER_RESPONSE:", response);

      toast.success(response?.message || "Account created successfully!");

      // Navigate to login after successful registration
      navigate("/login");
    } catch (error) {
      console.error("REGISTER_ERROR:", error);

      toast.error(
        error?.data?.message ||
          error?.error ||
          "Registration failed. Please try again.",
      );
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">
      <div className="w-full max-w-6xl min-h-[650px] flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
        {/* LEFT SECTION */}
        <div className="hidden md:flex md:w-1/2 bg-black text-white p-10 flex-col justify-between">
          <div>
            <Link to="/" className="inline-block">
              <h1 className="text-3xl font-semibold font-zurixFont">ZURIX</h1>
            </Link>
          </div>

          <div className="max-w-md">
            <p className="text-sm uppercase tracking-[4px] text-gray-400 mb-4">
              Join The Community
            </p>

            <h2 className="text-4xl lg:text-5xl font-zurixFont leading-tight mb-6">
              Define Your
              <br />
              Own Style.
            </h2>

            <p className="text-gray-400 text-sm leading-7">
              Create your ZURIX account and discover a collection designed for
              your individuality. Explore premium fashion, find your favorites,
              and make every look your own.
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} ZURIX. All rights reserved.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-14">
          <div className="w-full max-w-md">
            {/* HEADING */}
            <div className="mb-8">
              <h2 className="text-3xl font-semibold font-zurixFont mb-2">
                Create Account
              </h2>

              <p className="text-sm text-gray-500">
                Enter your details to get started with ZURIX.
              </p>
            </div>

            {/* REGISTER FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* FULL NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>

                <div className="relative">
                  <FiUser
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-md outline-none text-sm focus:border-black transition-colors"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>

                <div className="relative">
                  <FiMail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-md outline-none text-sm focus:border-black transition-colors"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>

                <div className="relative">
                  <FiLock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    minLength={8}
                    required
                    className="w-full h-12 pl-10 pr-11 border border-gray-300 rounded-md outline-none text-sm focus:border-black transition-colors"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                  >
                    {showPassword ? (
                      <FiEyeOff size={18} />
                    ) : (
                      <FiEye size={18} />
                    )}
                  </button>
                </div>

                <p className="text-xs text-gray-400 mt-2">
                  Password must contain at least 8 characters.
                </p>
              </div>

              {/* REGISTER BUTTON */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            {/* LOGIN LINK */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-black underline underline-offset-4 hover:text-gray-600 transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </div>

            {/* HOME LINK */}
            <div className="mt-5 text-center">
              <Link
                to="/"
                className="text-xs text-gray-500 hover:text-black transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
