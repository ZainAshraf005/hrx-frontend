"use client";
import React, { useState } from "react";
import { Input, Badge, Avatar, Dropdown } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

interface HeaderProps {
  onToggleSidebar?: () => void;
  isSidebarCollapsed?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onToggleSidebar,
  isSidebarCollapsed = false,
}) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  // Get user info from localStorage
  const userEmail = localStorage.getItem("userEmail") || "user@example.com";
  const userRole = localStorage.getItem("userRole") || "employee";

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    router.push("/auth/login");
  };

  const userMenuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Profile",
      onClick: () => console.log("Profile clicked"),
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
      onClick: () => console.log("Settings clicked"),
    },
    {
      type: "divider" as const,
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      onClick: handleLogout,
      danger: true,
    },
  ];

  const notificationItems = [
    {
      key: "1",
      label: (
        <div className="py-2">
          <p className="font-semibold text-gray-800">New Employee Joined</p>
          <p className="text-sm text-gray-500">John Doe joined the team</p>
          <p className="text-xs text-gray-400 mt-1">5 minutes ago</p>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="py-2">
          <p className="font-semibold text-gray-800">Leave Request</p>
          <p className="text-sm text-gray-500">Sarah requested time off</p>
          <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="py-2">
          <p className="font-semibold text-gray-800">Task Completed</p>
          <p className="text-sm text-gray-500">Onboarding process completed</p>
          <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
        </div>
      ),
    },
    {
      type: "divider" as const,
    },
    {
      key: "all",
      label: (
        <div className="text-center text-blue-600 font-medium">
          View All Notifications
        </div>
      ),
    },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 w-full transition-all duration-300">
      <div className="h-16 px-6 flex items-center justify-between w-full">
        {/* Left Section - Toggle & Search */}
        <div className="flex items-center space-x-4 flex-1">
          {/* Sidebar Toggle Button */}
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg transition-colors"
            >
              {isSidebarCollapsed ? (
                <MenuUnfoldOutlined className="text-xl" />
              ) : (
                <MenuFoldOutlined className="text-xl" />
              )}
            </button>
          )}

          {/* Search Bar */}
          <div className="hidden md:block w-full max-w-md">
            <Input
              placeholder="Search employees, documents, tasks..."
              prefix={<SearchOutlined className="text-gray-400" />}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              size="large"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Section - Actions & Profile */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search Icon */}
          <button className="md:hidden text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <SearchOutlined className="text-xl" />
          </button>

          {/* Notifications */}
          <Dropdown
            menu={{ items: notificationItems }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <button className="relative text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg transition-colors">
              <Badge count={3} size="small" offset={[-2, 2]}>
                <BellOutlined className="text-xl" />
              </Badge>
            </button>
          </Dropdown>

          {/* User Profile Dropdown */}
          <Dropdown
            menu={{ items: userMenuItems }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <button className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg transition-colors">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-semibold text-gray-800 capitalize">
                  {userRole}
                </p>
                <p className="text-xs text-gray-500">{userEmail}</p>
              </div>
              <Avatar
                size={40}
                icon={<UserOutlined />}
                className="bg-blue-500"
              />
            </button>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
