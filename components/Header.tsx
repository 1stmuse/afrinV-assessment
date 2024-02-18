"use client";

import Search from "@/public/assets/svgs/search.svg";
import Mail from "@/public/assets/svgs/mail.svg";
import Bell from "@/public/assets/svgs/noti.svg";
import Image from "next/image";
import Spark from "@/public/assets/svgs/spark.svg";
import { useNavState } from "@/hooks/navState";

const Header = () => {
  const { show, setShow } = useNavState();

  console.log(show);

  return (
    <section className="w-full bg-white p-5 py-7 flex justify-between items-center rounded-tr-3xl ">
      <div className={`max-sm:${show ? "hidden" : "block"} sm:hidden`}>
        <div
          onClick={() => setShow(!show)}
          className="bg-black items-center justify-center flex rounded-full w-10 h-10"
        >
          <Spark height={20} width={20} />
        </div>
      </div>
      <div className="flex max-sm:justify-end justify-between  w-full">
        <div className="header_search">
          <Search height={25} width={25} />
          <input
            type="text"
            className="w-full bg-transparent pl-2"
            placeholder="Search for various stocks"
          />
        </div>
        <div className="flex items-center sm:justify-around justify-end sm:w-72">
          <div className="max-sm:hidden">
            <Mail height={20} width={20} />
          </div>
          <div className="max-sm:hidden">
            <Bell height={20} width={20} />
          </div>

          <div className="h-6 w-0.5 bg-black max-sm:hidden " />
          <Image
            src={require("@/public/assets/images/me.JPG")}
            alt="profile img"
            className="w-8 h-8 object-cover rounded-full max-sm:ml-4"
          />
          <p className="max-sm:hidden">Oluwasegun Muse</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
