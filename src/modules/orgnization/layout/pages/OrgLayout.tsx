"use client";
import { Layout } from "antd";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "@/components/Header/Header";

const { Content, Sider } = Layout;

interface OrgLayoutProps {
  children: React.ReactNode;
}

const OrgLayout: React.FC<OrgLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const sidebarWidth = sidebarCollapsed ? 80 : 250;

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      {/* Fixed Sidebar */}
      <Sider
        width={sidebarWidth}
        collapsed={sidebarCollapsed}
        className="sider-style"
        style={{
          position: "fixed",
          height: "100vh",
          top: 0,
          left: 0,
          transition: "all 0.3s ease",
        }}
      >
        <Sidebar />
      </Sider>

      {/* Main Layout with Header */}
      <Layout style={{ marginLeft: sidebarWidth, transition: "all 0.3s ease" }}>
        {/* Fixed Header */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: sidebarWidth,
            right: 0,
            width: `calc(100% - ${sidebarWidth}px)`,
            transition: "all 0.3s ease",
            zIndex: 30,
          }}
        >
          <Header
            onToggleSidebar={toggleSidebar}
            isSidebarCollapsed={sidebarCollapsed}
          />
        </div>

        {/* Content Area with top padding for fixed header */}
        <Content
          className="bg-halfWhite"
          style={{
            marginTop: "64px", // Height of fixed header
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <div id="detail" className="p-6">
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default OrgLayout;
