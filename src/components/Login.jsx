import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import { useAddLoginMutation } from "../redux/authApi";

const Login = () => {
  const [login, { data, isLoading, isError }] = useAddLoginMutation();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData).unwrap();

      console.log("LOGIN_RESPONSE:", response)

      navigate("/profile", {
        replace: true,
      });
    } catch (error) {
      console.log("LOGIN_ERROR:",error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">
      <div className="w-full max-w-6xl min-h-[600px] flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
        {/* ================= LEFT SECTION ================= */}
        <div className="hidden md:flex md:w-[50%] bg-black text-white p-10 flex-col justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-3xl font-semibold font-zurixFont">ZURIX</h1>
          </div>

          {/* Content */}
          <div className="max-w-md">
            <p className="text-sm uppercase tracking-[4px] text-gray-400 mb-4">
              Welcome Back
            </p>

            <h2 className="text-4xl lg:text-5xl font-zurixFont leading-tight mb-6">
              Discover Your
              <br />
              Perfect Style.
            </h2>

            <p className="text-gray-400 text-sm leading-7">
              Sign in to your account and continue exploring our latest
              collection of premium fashion and accessories.
            </p>
          </div>

          {/* Bottom */}
          <div>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} ZURIX. All rights reserved.
            </p>
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="w-full md:w-[50%] flex items-center justify-center p-6 sm:p-10 lg:p-14">
          <div className="w-full max-w-md">
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-3xl font-semibold font-zurixFont mb-2">
                Welcome Back
              </h2>

              <p className="text-sm text-gray-500">
                Please enter your details to sign in.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
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
                    required
                    className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-md outline-none text-sm focus:border-black transition-colors"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-xs text-gray-500 hover:text-black transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>

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
                    placeholder="Enter your password"
                    required
                    className="w-full h-12 pl-10 pr-11 border border-gray-300 rounded-md outline-none text-sm focus:border-black transition-colors"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                  >
                    {showPassword ? (
                      <FiEyeOff size={18} />
                    ) : (
                      <FiEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 accent-black cursor-pointer"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-gray-500 cursor-pointer"
                >
                  Remember me
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full h-12 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
