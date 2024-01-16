import React from "react";
import { AiOutlineFacebook } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';

function Footer() {
  return (
    <div className="bg-[#feecd8]">
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-[130px] py-6 lg:py-8">
        <div className="md:flex md:justify-between gap-4 ">
          <div className="w-[100%] md:w-[50%]">
            <div className="mb-6 md:mb-0">
              <a href="/" className="w-[200px] flex items-center">
                <img src="travel1.png" />
              </a>
            </div>
            <p className="w-[100%] md:w-[60%] text-[#4F4E4E] mt-8">
              Duis sit amet ornare urna. Mauris felis lectus, porttitor vitae
              ultrices in, congue ulla dui metus ullamcorper non sagittis in
              maximus in leo. Morbi rutrum sollicitudin nisi. Aliquam ut mi
              suscipit, suscipit ipsum vel, rhoncus diam.
            </p>

            <div className="flex gap-4 mt-6 mb-6 ">
              <AiOutlineFacebook color="orange" size="36" />
              <BsInstagram color="orange" size="32" />
              <FaTwitterSquare color="orange" size="32" />
              <CiLinkedin color="orange" size="36" />
            </div>
          </div>
          <div className="w-[100%] md:w-[50%] grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="mt-[55px]">
              <h2 className="mb-3 text-lg font-semibold text-[#F89725]  uppercase ">
                Platform
              </h2>
              <ul className="text-[#4F4E4E] space-y-2 font-medium">
                <li className="">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    LoremIpsum
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Dummy Data
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Don't Use
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-[55px]">
              <h2 className="mb-3 text-lg font-semibold text-[#F89725] uppercase ">
                Agency
              </h2>
              <ul className="text-[#4F4E4E] space-y-2 font-medium">
                <li className="">
                  <a
                    href="/"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-[55px]">
              <h2 className="mb-3 text-lg font-semibold text-[#F89725] uppercase ">
                Help & Support
              </h2>
              <ul className="text-[#4F4E4E] space-y-2 font-medium">
                <li className="">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F89725] flex justify-center items-center py-[5px] text-[11px] md:text-[13px]">
        All CopyRight @ Reserved by Lorem Ipsum Holidays 2023{" "}
      </div>
    </div>
  );
}

export default Footer;
