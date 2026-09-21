import React from "react";
import { useAddLogoutMutation, useGetProfileQuery } from "../redux/authApi";
import { Link, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLogOut,
  FiShoppingBag,
  FiHeart,
  FiMapPin,
  FiChevronRight,
} from "react-icons/fi";

const ProfileSection = () => {
  const navigate = useNavigate();

  const {
    data: profileData,
    isLoading: profileLoading,
    isError,
  } = useGetProfileQuery();

  const [logout, { isLoading: logoutLoading }] = useAddLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();

      navigate("/login");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  if (profileLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>

          <p className="text-sm text-gray-500">Loading profile...</p>
        </div>
      </section>
    );
  }

  if (isError || !profileData?.success) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Unable to fetch profile data.</p>

          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 bg-black text-white rounded-md text-sm"
          >
            Go to Login
          </button>
        </div>
      </section>
    );
  }

  const profile = profileData?.data;

  return (
    <section className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        {/* ================= HEADER ================= */}

        <div className="mb-10">
          <p className="text-xs uppercase tracking-[4px] text-gray-400 mb-2">
            Account
          </p>

          <h1 className="text-3xl sm:text-4xl font-zurixFont">My Profile</h1>

          <p className="text-sm text-gray-500 mt-2">
            Manage your account and view your activities.
          </p>
        </div>

        {/* ================= PROFILE CONTENT ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
          {/* ================= LEFT CARD ================= */}

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            {/* Avatar */}

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center mb-5">
                <span className="text-3xl font-medium uppercase">
                  {profile?.name?.charAt(0)}
                </span>
              </div>

              <h2 className="text-xl font-medium capitalize">
                {profile?.name}
              </h2>

              <p className="text-sm text-gray-500 mt-1">{profile?.email}</p>
            </div>

            {/* Divider */}

            <div className="h-[1px] bg-gray-200 my-6"></div>

            {/* Profile Menu */}

            <div className="space-y-2">
              <button
                type="button"
                className="w-full flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <FiUser size={18} />

                  <span className="text-sm">Personal Information</span>
                </div>

                <FiChevronRight size={16} />
              </button>

              <Link to="/order">
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <FiShoppingBag size={18} />

                    <span className="text-sm">My Orders</span>
                  </div>

                  <FiChevronRight size={16} />
                </button>
              </Link>

              <button
                type="button"
                className="w-full flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <FiHeart size={18} />

                  <span className="text-sm">Wishlist</span>
                </div>

                <FiChevronRight size={16} />
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <FiMapPin size={18} />

                  <span className="text-sm">Addresses</span>
                </div>

                <FiChevronRight size={16} />
              </button>
            </div>

            {/* Logout */}

            <button
              type="button"
              onClick={handleLogout}
              disabled={logoutLoading}
              className="w-full mt-6 h-11 border border-gray-300 rounded-md flex items-center justify-center gap-2 text-sm hover:bg-black hover:text-white hover:border-black transition disabled:opacity-50"
            >
              <FiLogOut size={17} />

              {logoutLoading ? "Logging out..." : "Logout"}
            </button>
          </div>

          {/* ================= RIGHT SECTION ================= */}

          <div className="space-y-6">
            {/* Account Information */}

            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-7">
                <div>
                  <h2 className="text-xl font-medium">Account Information</h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Your basic account details
                  </p>
                </div>

                <FiUser size={22} className="text-gray-400" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}

                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <FiUser size={18} className="text-gray-500" />

                    <span className="text-xs uppercase tracking-wider text-gray-400">
                      Full Name
                    </span>
                  </div>

                  <p className="text-base capitalize">{profile?.name}</p>
                </div>

                {/* Email */}

                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <FiMail size={18} className="text-gray-500" />

                    <span className="text-xs uppercase tracking-wider text-gray-400">
                      Email Address
                    </span>
                  </div>

                  <p className="text-base break-all">{profile?.email}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}

            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-medium">Quick Actions</h2>

              <p className="text-sm text-gray-500 mt-1 mb-6">
                Quickly access your shopping activities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link to="/order">
                  <button
                    type="button"
                    onClick={() => navigate("/orders")}
                    className="border border-gray-200 rounded-lg p-5 text-left hover:border-black transition"
                  >
                    <FiShoppingBag size={22} className="mb-4" />

                    <h3 className="text-sm font-medium">View Orders</h3>

                    <p className="text-xs text-gray-500 mt-1">
                      Track your recent orders
                    </p>
                  </button>
                </Link>

                <button
                  type="button"
                  onClick={() => navigate("/wishlist")}
                  className="border border-gray-200 rounded-lg p-5 text-left hover:border-black transition"
                >
                  <FiHeart size={22} className="mb-4" />

                  <h3 className="text-sm font-medium">Wishlist</h3>

                  <p className="text-xs text-gray-500 mt-1">
                    View your saved products
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
