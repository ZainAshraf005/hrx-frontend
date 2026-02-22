"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  DashboardOutlined,
  TeamOutlined,
  UserAddOutlined,
  CalendarOutlined,
  RobotOutlined,
  FileTextOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@/components/icons/Icons";
import LogoutModal from "@/components/Modal/LogoutModal";

interface SidebarItem {
  name: string;
  icon: React.ReactNode;
  link: string;
  paths: string[];
}

const sidebarItems: SidebarItem[] = [
  {
    name: "Dashboard",
    icon: <DashboardOutlined />,
    link: "/orgnization/dashboard",
    paths: ["/orgnization/dashboard", "/orgnization"],
  },
  {
    name: "Employees",
    icon: <TeamOutlined />,
    link: "/orgnization/employees",
    paths: ["/orgnization/employees"],
  },
  {
    name: "Recruitment",
    icon: <UserAddOutlined />,
    link: "/orgnization/recruitment",
    paths: ["/orgnization/recruitment"],
  },
  {
    name: "Attendance",
    icon: <CalendarOutlined />,
    link: "/orgnization/attendance",
    paths: ["/orgnization/attendance"],
  },
  {
    name: "AI Assistant",
    icon: <RobotOutlined />,
    link: "/orgnization/chat-bot",
    paths: ["/orgnization/chat-bot"],
  },
  {
    name: "Reports",
    icon: <FileTextOutlined />,
    link: "/orgnization/reports",
    paths: ["/orgnization/reports"],
  },
  {
    name: "Settings",
    icon: <SettingOutlined />,
    link: "/orgnization/settings",
    paths: ["/orgnization/settings"],
  },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const isActiveRoute = (item: SidebarItem): boolean => {
    return item.paths.some((path) => pathname === path);
  };

  const showLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const handleLogout = () => {
    // Clear all localStorage data
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    
    // Close modal
    setIsLogoutModalOpen(false);
    
    // Navigate to home/login page
    router.push("/");
  };

  const handleCancelLogout = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <div className="h-full bg-white border-r border-gray-200 w-full flex flex-col">
      {/* Logo Section */}
      <div className="text-center py-6 px-4 border-b border-gray-200">
        <div className="flex items-center justify-center space-x-2">
          <RobotOutlined className="text-3xl text-blue-600" />
          <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            HRX AI
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-2">HR Management System</p>
      </div>

      {/* Sidebar Items */}
      <div className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-2 px-3">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActiveRoute(item)
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="p-4 border-t border-gray-200 space-y-3">
        {/* Logout Button */}
        <button
          onClick={showLogoutModal}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200"
        >
          <LogoutOutlined className="text-xl" />
          <span className="font-medium text-sm">Logout</span>
        </button>

        {/* Help Section */}
        <div className="bg-blue-50 rounded-lg p-4">
          <RobotOutlined className="text-2xl text-blue-600 mb-2" />
          <p className="text-xs font-semibold text-gray-800 mb-1">
            Need Help?
          </p>
          <p className="text-xs text-gray-600">Ask our AI Assistant</p>
        </div>
      </div>

      {/* Logout Modal */}
      <LogoutModal
        open={isLogoutModalOpen}
        onConfirm={handleLogout}
        onCancel={handleCancelLogout}
      />
    </div>
  );
};

export default Sidebar;
