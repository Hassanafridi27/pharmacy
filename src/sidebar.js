// Sidebar.js
import React from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  LogoutOutlined,
  SyncOutlined,
  ApartmentOutlined,
  FileTextOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <Sider
      width={190}
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 60,
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: "1px solid #f0f0f0",
        zIndex: 1000,
      }}
    >
      <div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>

          <SubMenu
            key="sub1"
            icon={<DeploymentUnitOutlined />}
            title="Dispensing"
          >
            <Menu.Item key="2" icon={<FileTextOutlined />}>
              OPD
            </Menu.Item>
            <Menu.Item key="3" icon={<ApartmentOutlined />}>
              IPD
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="4" icon={<SyncOutlined />}>
            Refilling
          </Menu.Item>

          <Menu.Item key="5" icon={<LogoutOutlined />}>
            Log Out
          </Menu.Item>
        </Menu>
      </div>
    </Sider>
  );
};

export default Sidebar;
