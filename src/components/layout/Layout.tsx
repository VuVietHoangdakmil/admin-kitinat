import { Button, Menu, Layout } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BiSolidDrink } from "react-icons/bi";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
type Props = {
  children: React.ReactNode;
};
import { path } from "../../routes";

const LayoutFC: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const customPath = pathname.startsWith(path.product)
    ? path.product
    : pathname;
  useEffect(() => {
    if (pathname === "/") {
      navigate(path.productView);
    }
  }, [pathname]);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          onClick={({ key }) => {
            const pathcustom = key.startsWith(path.product)
              ? path.productView
              : key;
            navigate(pathcustom);
          }}
          style={{ border: "none" }}
          mode="inline"
          selectedKeys={[customPath]}
          items={[
            {
              key: path.product,
              icon: <BiSolidDrink />,
              label: "Sản phẩm",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, backgroundColor: "white" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            padding: "24px 16px",
            overflow: "hidden",
            // overflowY: "scroll",
            height: "100vh",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutFC;
