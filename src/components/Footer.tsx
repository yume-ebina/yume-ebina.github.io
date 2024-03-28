import { Button } from "@mui/material";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-black py-24">
        <div className="text-center mb-20">
          <Button>
            <div className="w-96 bg-white rounded-lg text-black flex items-center p-12 justify-between">
              <div>
                <p className=" text-3xl font-semibold tracking-widest mb-6">
                  CONTACT
                </p>
                <p>お問い合わせはこちらから</p>
              </div>
              <div>{<MdNavigateNext />}</div>
            </div>
          </Button>
        </div>
        <div className="flex p-5 flex-col items-center md:flex-row">
          <a
            href="#home"
            className="text-xl font-medium text-white ml-3 mb-5 md:mb-0"
          >
            SMART CAMPANY
          </a>
          <nav className="md:ml-auto text-white">
            <a
              href="#home"
              className="mr-5 tracking-wide hover:text-gray-500 duration-300"
            >
              HOME
            </a>
            <a
              href="#"
              className="mr-5 tracking-wide hover:text-gray-500 duration-300"
            >
              CAMPANY
            </a>
            <a
              href="#service"
              className="mr-5 tracking-wide hover:text-gray-500 duration-300"
            >
              SERVICE
            </a>
            <a
              href="#news"
              className="mr-5 tracking-wide hover:text-gray-500 duration-300"
            >
              NEWS
            </a>
            <a
              href="#"
              className="mr-5 tracking-wide hover:text-gray-500 duration-300"
            >
              CONTACT
            </a>
          </nav>
        </div>
        <div className="text-center">
          <div className="flex pb-5  justify-center">
            <div className="pr-10 hover:text-gray-500 duration-300">
              <Link href={"https://preview.studio.site/live/4Ra4LEXoaD/"}>
                PRESS KIT
              </Link>
            </div>
            <div className="hover:text-gray-500 duration-300">
              <Link href={"https://preview.studio.site/live/4Ra4LEXoaD/"}>
                PRIVACY POLICY
              </Link>
            </div>
          </div>
          <div>
            <p>(C)2024 SMART COMPANY.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
