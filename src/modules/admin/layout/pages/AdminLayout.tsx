import { Layout } from "antd";
import Sidebar from "../components/Sidebar";

const { Content, Sider } = Layout;

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
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
                    <div id="detail">
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
