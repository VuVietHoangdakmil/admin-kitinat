import { Button, Menu, Layout } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

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
              icon: <UserOutlined />,
              label: "Sản phẩm",
            },
            {
              key: path.page,
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
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
            margin: "24px 16px",

            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutFC;
