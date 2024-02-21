"use client";

import { bottomMenus, topMenus } from "@/constants/data";
import { useNavState } from "@/hooks/navState";
import { useRouter, usePathname } from "next/navigation";
import Spark from "@/public/assets/svgs/spark.svg";

const Nav = () => {
  const router = useRouter();
  const { show, setShow } = useNavState();
  const pathName = usePathname();

  console.log(show, "THE SHOW VALUE");

  return (
    <section className="md:w-[19%]  bg-white  sm:border-r-2 rounded-l-3xl  flex flex-col h-screen ">
      <div className={`max-sm:${show ? "block" : "hidden"} pt-5`}>
        <div>
          <div className={`sm:hidden w-full flex justify-center mb-20`}>
            <div
              onClick={() => setShow(!show)}
              className="bg-black items-center justify-center flex rounded-full w-10 h-10"
            >
              <Spark height={20} width={20} />
            </div>
          </div>
          {topMenus.map((item) => {
            return (
              <div
                onClick={() => {
                  if (!item.subMenu) {
                    router.push(item.key);
                  }
                }}
                key={item.key}
              >
                <div
                  className={`flex p-3 px-5 hover:bg-gray-100 bg-${
                    pathName === item.key ? "gray-100" : "none"
                  } cursor-pointer`}
                >
                  <div className=" mr-2">{item.icon}</div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {item.label}
                    </p>
                  </div>
                </div>
                {item.subMenu &&
                  item.subMenu.map((subMenu) => (
                    <div key={subMenu.key}>
                      <div className="flex p-3 pl-10 hover:bg-gray-100 cursor-pointer">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {subMenu.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            );
          })}
        </div>
        <div className="flex-1 flex pb-10">
          <div className="self-end w-full">
            <div className="w-[80%] h-0.5 bg-gray-100 mx-auto " />
            {bottomMenus.map((item) => {
              return (
                <div
                  onClick={() => {
                    if (!item.subMenu) {
                      router.push(item.key);
                    }
                  }}
                  key={item.key}
                >
                  <div
                    className={`flex p-3 px-5 hover:bg-gray-100 bg-${
                      pathName === item.key ? "gray-100" : "none"
                    } cursor-pointer`}
                  >
                    <div className=" mr-2">{item.icon}</div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {item.label}
                      </p>
                    </div>
                  </div>
                  {item.subMenu &&
                    item.subMenu.map((subMenu) => (
                      <div key={subMenu.key}>
                        <div className="flex p-3 pl-10 hover:bg-gray-100">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {subMenu.label}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
