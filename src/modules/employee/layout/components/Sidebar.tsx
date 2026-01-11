import { useState } from "react";
import "./sidebar.scss";
import Link from "next/link";
// import {
//   Setting,
//   LogoutIcon,
//   SidebarLogo,
//   Home,
//   Trophy,
//   Star,
//   Shield,
//   TrendArrow,
//   Chart,
//   Export,
// } from "../../assets/image";

interface SidebarItem {
  name: string;
  // icon?: any;
  link: string;
  paths: string[];
}

const sidebarItems: SidebarItem[] = [
  {
    name: "Dashboard",
    // icon: Home,
    link: "/hr-portal/dashboard",
    paths: ["/hr-portal/dashboard"],
  },
  // {
  //   name: "Organizations",
  //   // icon: Trophy,
  //   link: "/admin/organization",
  //   paths: ["/admin/organization",],
  // },
  //  
];

const Sidebar: React.FC = () => {
  const isActiveRoute = (item: SidebarItem): boolean => {
    return false;
  };

  return (
    <div className="h-full bg-whiteColor text-white w-full">
      <div className="text-center py-3 mb-4">
      </div>

      <div className="flex flex-col justify-between">
        {/* Top Sidebar Items */}
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index} className="mb-4 mx-8 relative font-custom">
              {/* {item.isLogout ? (
                <a
                  href="#"
                  onClick={showLogoutModal}
                  className={`logout-link sidebar-link flex items-center text-h4 font-b5 px-6 py-3 rounded-custom text-greyColor 
                     hover:bg-mainColor hover:font-b7 hover:!text-whiteColor`}
                >
                  <img
                    className="mr-3 w-6 flex-shrink-0"
                    src={item.icon}
                    alt={item.name}
                  />
                  <span className="truncate block max-w-[150px]">{item.name}</span>
                </a>
              ) : ( */}
              <Link
                href={item.link}
                className={`sidebar-link flex items-center text-h4 font-b5 px-6 py-3 rounded-md before-class
                   ${isActiveRoute(item)
                    ? "bg-mainColor text-whiteColor! font-b7 rounded-custom active"
                    : "text-greyColor hover:bg-mainColor hover:text-whiteColor hover:font-b7 hover:rounded-custom"
                  }`}
              >
                {/* <img
                    className="mr-3 w-6 flex-shrink-0"
                    src={item.icon}
                    alt={item.name}
                  /> */}
                <span className="truncate block max-w-[150px]">{item.name}</span>
              </Link>

              {/* )} */}
            </li>
          ))}
        </ul>
      </div>

      {/* Logout Modal */}
      {/* <Logout open={isLogoutModalOpen} handleOk={handleLogout} handleCancel={closeLogoutModal} /> */}
    </div>
  );
};

export default Sidebar;
