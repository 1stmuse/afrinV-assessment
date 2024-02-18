"use client";

import { topMenus } from "@/constants/data";
import { useRouter } from "next/navigation";
// className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"

const Nav = () => {
  const router = useRouter();

  return (
    <section className="md:w-[19%]  bg-white block sm:border-r-2 rounded-l-3xl ">
      <div className="max-sm:hidden pt-5">
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
              <div className="flex p-3 px-5 hover:bg-gray-100">
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
    </section>
  );
};

export default Nav;
