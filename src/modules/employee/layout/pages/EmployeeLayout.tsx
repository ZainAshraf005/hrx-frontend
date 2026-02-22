import { Layout } from "antd";
import Sidebar from "../components/Sidebar";

const { Content, Sider } = Layout;

interface EmployeeLayoutProps {
  children: React.ReactNode;
}

const EmployeeLayout: React.FC<EmployeeLayoutProps> = ({ children }) => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        width={270}
        className="sider-style"
        style={{ position: "fixed", height: "100vh", top: 0, left: 0 }}
      >
        <Sidebar />
      </Sider>
      <Layout style={{ marginLeft: 270 }}>
        <Content className="bg-halfWhite">
          <div id="detail">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default EmployeeLayout;
