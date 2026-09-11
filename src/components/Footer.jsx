import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#111111] text-white">
      {/* Main Footer */}
      <div className="mx-auto w-[85%] py-[70px]">
        <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="font-zurixFont text-[42px] font-bold leading-none">
              ZURIX<span className="text-[28px]">.</span>
            </h2>

            <p className="mt-6 max-w-[390px] text-[17px] leading-[1.6] text-white/90">
              Thoughtful essentials for the considered wardrobe. Crafted in
              Europe, worn everywhere. Timeless over trend — since 1998.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex gap-3">
              <a
                href="#"
                className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="#"
                className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaPinterestP size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-[21px] font-semibold">Quick links</h3>

            <ul className="space-y-5 text-[16px]">
              <li>
                <a href="#" className="transition-opacity hover:opacity-60">
                  My account
                </a>
              </li>

              <li>
                <a href="#" className="transition-opacity hover:opacity-60">
                  Shopping Cart
                </a>
              </li>

              <li>
                <a href="#" className="transition-opacity hover:opacity-60">
                  Wishlist
                </a>
              </li>

              <li>
                <a href="#" className="transition-opacity hover:opacity-60">
                  Product Compare
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-6 text-[21px] font-semibold">Information</h3>

            <ul className="space-y-5 text-[16px]">
              <li>
                <a href="#" className="transition-opacity hover:opacity-60">
                  Privacy policy
                </a>
              </li>

              <li>
                <a href="#" className="transition-opacity hover:opacity-60">
                  Refund policy
                </a>
              </li>

              <li>
                <a href="#" className="transition-opacity hover:opacity-60">
                  Shipping & Return
                </a>
              </li>

              <li>
                <a href="#" className="transition-opacity hover:opacity-60">
                  Term & conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[34px] font-semibold leading-tight">
              Let’s get in touch
            </h3>

            <p className="mt-7 text-[17px] leading-[1.7]">
              Sign up for our newsletter and receive 10% off your
            </p>

            {/* Email Input */}
            <div className="mt-6 flex h-[80px] items-center rounded-full bg-white p-2">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="h-full min-w-0 flex-1 bg-transparent px-5 text-[17px] text-black outline-none placeholder:text-black/50"
              />

              <button
                type="button"
                className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:scale-105"
              >
                <FaArrowRight size={21} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="mx-auto flex w-[85%] flex-col items-center justify-between gap-6 py-7 lg:flex-row">
          {/* Copyright */}
          <p className="text-center text-[16px] lg:text-left">
            © 2026 ZURIX All rights reserved. Designed by Novaworks
          </p>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-[20px] font-bold tracking-[-1px]">
              amazon
            </span>

            <span className="text-center text-[11px] font-bold leading-none">
              AMERICAN
              <br />
              EXPRESS
            </span>

            <span className="text-[22px] font-semibold italic">PayPal</span>

            <span className="text-[11px] font-semibold leading-none">
              🚚 Cash on
              <br />
              Delivery
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
