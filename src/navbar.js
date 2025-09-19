import React from "react";
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ReactComponent as LogoShifa } from "./shifa-logo.svg"

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#fff",
        padding: "0 20px",
        boxShadow: "0 2px 8px #f0f1f2",
      }}
    >
      {/* Logo on left */}
      <div style={{ fontSize: 18, fontWeight: "bold", color: "#1890ff", marginTop: 20 }}>
        <LogoShifa/>
      </div>

      {/* Avatar on right */}
       <div style={{ position: "relative", display: "inline-block" }}>
        <Avatar
          size="large"
          icon={<UserOutlined />}
          style={{ cursor: "pointer", backgroundColor: "#1890ff" }}
        />
        {/* Online dot */}
        <span
          style={{
            position: "absolute",
            bottom: 2,
            right: 2,
            width: 10,
            height: 10,
            backgroundColor: "#52c41a", // green color
            borderRadius: "50%",
            border: "2px solid white", // white border to separate from avatar
          }}
        />
      </div>
    </Header>
  );
};

export default Navbar;
