"use client";

import Search from "@/assets/svgs/search.svg";
import Mail from "@/assets/svgs/mail.svg";
import Bell from "@/assets/svgs/noti.svg";
import Image from "next/image";
import Spark from "@/assets/svgs/spark.svg";

const Header = () => {
  return (
    <section className="w-full bg-white p-5 py-7 flex justify-between items-center rounded-tr-3xl ">
      <div className="max-sm:block hidden">
        <div className="bg-black items-center justify-center flex rounded-full w-10 h-10">
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
            src={require("@/assets/images/me.JPG")}
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
