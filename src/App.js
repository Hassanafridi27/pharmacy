import React, { useState } from "react";
import {
  Radio,
  Tabs,
  Input,
  Select,
  DatePicker,
  Checkbox,
  Row,
  Col,
  Table,
  Avatar,
  Button,
  Space,
  Divider,
  Form,
  Flex,
} from "antd";
import {
  UserOutlined,
  EyeOutlined,
  EllipsisOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import userImage from "./Mask group.png";
import Sidebar from "./sidebar";
import CustomIcon from "./Group.svg";
import { ReactComponent as ArrowIcon } from "./Group 1171275913.svg";
import { ReactComponent as PanelIcon1 } from "./assets/Group (1).svg";
import { ReactComponent as PanelIcon2 } from "./assets/BSA.svg";
import { ReactComponent as PanelIcon3 } from "./assets/Group (2).svg";
import { ReactComponent as PanelIcon4 } from "./assets/Group (3).svg";
import { ReactComponent as PanelIcon5 } from "./assets/Group (4).svg";
import { ReactComponent as PanelIcon6 } from "./assets/Group (5).svg";
import { ReactComponent as PanelIcon7 } from "./assets/Group (6).svg";
import { ReactComponent as PanelIcon8 } from "./assets/Group 1000001306.svg";
import { ReactComponent as PanelIcon9 } from "./assets/Group 1171275890.svg";
import { ReactComponent as PanelIcon10 } from "./assets/height.svg";
import { ReactComponent as PanelIcon11 } from "./assets/weight.svg";
import { ReactComponent as PanelIcon12 } from "./assets/BSA (1).svg";
import PanelIcon13 from "./assets/Group (9).svg";
import PrescriptionModal from "./pharmacy/modal";
import Navbar from "./navbar";
import "./App.css";
const { TabPane } = Tabs;
const { Option } = Select;

const PrescriptionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Lab Results Data
  const labData = [
    {
      key: "1",
      date: "11/04/2024",
      test: "PARACETAMOL+TRAMADOL",
      result: 55.8,
      refRange: "45.0 - 66.0",
    },
    {
      key: "2",
      date: "11/04/2024",
      test: "PANADOL-CF",
      result: 66.2,
      refRange: "65.0 - 100.0",
    },
    {
      key: "3",
      date: "11/04/2024",
      test: "BECLOMETHASONE+SALBUTAMOL",
      result: 77.9,
      refRange: "22.6 - 101.5",
    },
  ];

  const labColumns = [
    {
      title: (
        <span style={{ fontSize: 12, fontWeight: "600", color: "#fff" }}>
          Allergy Type
        </span>
      ),
      dataIndex: "type",
      key: "type",
      width: 90, // Reduced width here
      render: (text) => <span style={{ fontSize: 10 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
    {
      title: (
        <span style={{ fontSize: 12, fontWeight: "600", color: "#fff" }}>
          Allergy Description
        </span>
      ),
      dataIndex: "description",
      key: "description",
      width: 200,
      render: (text) => <span style={{ fontSize: 10 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
    {
      title: (
        <span style={{ fontSize: 12, fontWeight: "600", color: "#fff" }}>
          Severity Level
        </span>
      ),
      dataIndex: "severity",
      key: "severity",
      width: 100,
      render: (text) => <span style={{ fontSize: 10 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
  ];

  const leftColumn = [
    {
      label: "MR Number",
      value: "25172C",
      icon: <PanelIcon1 style={{ width: 16, height: 16 }} />,
    },
    {
      label: "Height (cm)",
      value: "55.7",
      icon: <PanelIcon10 style={{ width: 16, height: 16 }} />,
    },
    {
      label: "Insurance",
      value: "United",
      icon: <PanelIcon3 style={{ width: 16, height: 16 }} />,
    },
  ];
  const middleColumn = [
    {
      label: "Age",
      value: "14 Y 05 M 30 D",
      icon: <PanelIcon8 style={{ width: 16, height: 16 }} />,
    },
    {
      label: "Weight (kg)",
      value: "88.8",
      icon: <PanelIcon11 style={{ width: 16, height: 16 }} />,
    },
    // { label: "Panel", value: "Shifa International Employee", icon: "🏥" }, // <--- Here
  ];

  const rightColumn = [
    {
      label: "Gender",
      value: "Male",
      icon: <PanelIcon5 style={{ width: 16, height: 16 }} />,
    },
    {
      label: "BSA (m²)",
      value: "1.17",
      icon: <PanelIcon12 style={{ width: 16, height: 16 }} />,
    },
  ];

  const panelInfo = [
    {
      label: "Contact #",
      value: "+9233574856",
      icon: <PanelIcon9 style={{ width: 16, height: 16 }} />,
    },
    {
      label: "Blood Group",
      value: "AB+",
      icon: <PanelIcon6 style={{ width: 16, height: 16 }} />,
    },
    {
      label: "Discount",
      value: "10%",
      icon: <PanelIcon7 style={{ width: 16, height: 16 }} />,
    },
  ];

  const renderBlock = (item) => (
    <div
      style={{
        backgroundColor: "#557EB4",
        // width: "174px",              // fixed width
        // height: "20px",              // fixed height
        padding: "4px 8px", // enough padding inside
        borderRadius: "6px", // rounded corners
        display: "flex",
        alignItems: "center",
        opacity: 1, // fully visible
        fontSize: "12px", // compact text
        color: "#fff", // optional for visibility
      }}
    >
      <span style={{ marginRight: 6 }}>{item.icon}</span>
      <span>{item.label}:</span>
      <span style={{ fontWeight: "bold", marginLeft: 4 }}>{item.value}</span>
    </div>
  );

  const allergyColumns = [
    {
      title: (
        <span style={{ fontSize: 10, fontWeight: "600", color: "#fff" }}>
          Allergy Type
        </span>
      ),
      dataIndex: "type",
      key: "type",
      width: 90, // Reduced width here
      render: (text) => <span style={{ fontSize: 9 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
      // width: '30%',
    },
    {
      title: (
        <span style={{ fontSize: 10, fontWeight: "600", color: "#fff" }}>
          Allergy Description
        </span>
      ),
      dataIndex: "description",
      key: "description",
      width: 200,
      render: (text) => <span style={{ fontSize: 9 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
      width: "70%",
      height: "30%",
    },
    {
      title: (
        <span style={{ fontSize: 10, fontWeight: "600", color: "#fff" }}>
          Severity Level
        </span>
      ),
      dataIndex: "severity",
      key: "severity",
      width: 100,
      render: (text) => <span style={{ fontSize: 9 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
  ];

  const allergyColumns2 = [
    {
      title: (
        <span style={{ fontSize: 10, fontWeight: "600", color: "#fff" }}>
          Date
        </span>
      ),
      dataIndex: "type",
      key: "type",
      width: 70, // Reduced width here
      render: (text) => <span style={{ fontSize: 9 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
      // width: '30%',
    },
    {
      title: (
        <span style={{ fontSize: 10, fontWeight: "600", color: "#fff" }}>
          Test Name
        </span>
      ),
      dataIndex: "description",
      key: "description",
      width: 150,
      render: (text) => <span style={{ fontSize: 9 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
    {
      title: (
        <span style={{ fontSize: 10, fontWeight: "600", color: "#fff" }}>
          Result
        </span>
      ),
      dataIndex: "severity",
      key: "severity",
      width: 70,
      render: (text) => <span style={{ fontSize: 9 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
    {
      title: (
        <span style={{ fontSize: 10, fontWeight: "600", color: "#fff" }}>
          Ref - Range
        </span>
      ),
      dataIndex: "severity",
      key: "severity",
      width: 70,
      render: (text) => <span style={{ fontSize: 9 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
  ];

  const highlightedStyle = { backgroundColor: "#F1F7FF" };
  const headerStyle = { backgroundColor: "#2971A8", color: "#ffff" };
  const allergyData = [
    {
      key: "1",
      type: "GENERIC",
      description: "FOOD-SUPPLEMENT",
      severity: "Moderate",
      render: (text) => <span style={{ fontSize: 10 }}>{text}</span>,
    },
    {
      key: "2",
      type: "SUB CLASS",
      description: "ANTIBIOTICS",
      severity: "Moderate",
      render: (text) => <span style={{ fontSize: 10 }}>{text}</span>,
    },
    {
      key: "3",
      type: "GENERIC",
      description: "ALTEPLASE (TISSUE)",
      severity: "Mild",
      render: (text) => <span style={{ fontSize: 10 }}>{text}</span>,
    },
  ];
  const eshifaData = []; // or real data if available
  const eshifaColumns = [
    {
      title: "Job Description",
      dataIndex: "job",
      key: "job",
    },
  ];
  const [data, setData] = useState(
    Array.from({ length: 6 }, (_, index) => ({
      key: index,
      medicationName: "",
      form: "",
      prescriptionDetail: "",
      dispensingDetail: "",
      qty: "",
      amount: "",
    }))
  );

  // Add new row
  const handleAdd = () => {
    setData([
      ...data,
      {
        key: Date.now(),
        medicationName: "",
        form: "",
        dose: "",
        frequency: "",
        route: "",
        batch: "",
        expireDate: null,
        remarks: "",
        qty: "",
        amount: "",
      },
    ]);
  };

  // Delete row
  const handleDelete = (key) => {
    setData(data.filter((item) => item.key !== key));
  };

  // Handle input change
  const handleChange = (value, key, column) => {
    const newData = data.map((item) => {
      if (item.key === key) {
        return { ...item, [column]: value };
      }
      return item;
    });
    setData(newData);
  };

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      render: (_, __, index) => <Checkbox style={{ marginLeft: 5 }}></Checkbox>,

      width: 30,

      onHeaderCell: () => ({ style: headerStyle }),
      onCell: () => ({ style: highlightedStyle }),
    },

{
  title: "Medication Name",
  dataIndex: "medicationName",
  width: 230,
  render: (_, record, index) => (
    <Input.TextArea
      size="small"
      autoSize={{ minRows: 1, maxRows: 5 }} // ✅ flexible height
      value={record.medicationName}
      onChange={(e) =>
        handleInputChange(index, "medicationName", e.target.value)
      }
      style={{
        fontSize: 12,
        lineHeight: 1.5,
        padding: "2px 6px",
      }}
    />
  ),
  onHeaderCell: () => ({ style: headerStyle }),
  onCell: () => ({ style: highlightedStyle }),
},
    {
      title: "Form",
      dataIndex: "form",
      width: 100,
      render: (_, record, index) => (
        <Input
          size="small"
          value={record.form}
          onChange={(e) => handleInputChange(index, "form", e.target.value)}
          style={{
            fontSize: 12,
            lineHeight: 1.5, // ✅ cleaner and scalable
            padding: "2px 6px",
          }}
        />
      ),
      onHeaderCell: () => ({ style: headerStyle }),
      onCell: () => ({ style: highlightedStyle }),
    },
{
  title: "Prescription Detail",
  dataIndex: "prescriptionDetail",
  width: 300,
  render: (_, record, index) => (
    <Input.TextArea
      autoSize={{ minRows: 1, maxRows: 5 }} // ✅ flexible height
      size="small"
      value=""
      onChange={(e) =>
        handleInputChange(index, "prescriptionDetail", e.target.value)
      }
      style={{
        fontSize: 12,
        lineHeight: 1.5,
        padding: "2px 6px",
      }}
    />
  ),
  onHeaderCell: () => ({ style: headerStyle }),
  onCell: () => ({ style: highlightedStyle }),
},
    {
      title: "Medication Name",
      dataIndex: "medicationName2",
      width: 200,
      render: (_, record, index) => (
        <Input
          size="small"
          value={record.medicationName2}
          onChange={(e) =>
            handleInputChange(index, "medicationName2", e.target.value)
          }
          style={{
            fontSize: 12,
            lineHeight: 1.5, // ✅ added line-height
            padding: "2px 6px", // ✅ optional, same as TextArea for consistency
          }}
        />
      ),
      onHeaderCell: () => ({ style: headerStyle }),
    },
{
  title: "Dispensing Detail",
  dataIndex: "dispensingDetail",
  width: 300,
  render: (_, record, index) => (
    <Input.TextArea
      autoSize={{ minRows: 1, maxRows: 5 }} // ✅ flexible height
      value=""
      onChange={(e) =>
        handleInputChange(index, "dispensingDetail", e.target.value)
      }
      style={{
        fontSize: 12,
        lineHeight: 1.5,
        padding: "2px 6px",
      }}
    />
  ),
  onHeaderCell: () => ({ style: headerStyle }),
},
    {
      title: "Qty",
      dataIndex: "qty",
      render: (_, record, index) => (
        <Input
          size="small"
          value={record.qty}
          onChange={(e) => handleInputChange(index, "qty", e.target.value)}
          style={{
            fontSize: 12,
            lineHeight: 1.5, // ✅ cleaner and scalable
            padding: "2px 6px",
          }}
        />
      ),
      onHeaderCell: () => ({ style: headerStyle }),
      width: 85,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (_, record, index) => (
        <Input
          size="small"
          value={record.amount}
          onChange={(e) => handleInputChange(index, "amount", e.target.value)}
          style={{
            fontSize: 12,
            lineHeight: 1.5, // ✅ cleaner and scalable
            padding: "2px 6px",
          }}
        />
      ),
      onHeaderCell: () => ({ style: headerStyle }),
      width: 88,
    },
    {
      title: "Actions",
      width: 20,
      render: (_, __, index) => (
        <Flex>
          {/* First Icon Button */}
          {/* <span
    type="text"
    icon={
      <EllipsisOutlined
        style={{ transform: "rotate(90deg)", fontSize: 18 }}
      />
    }
    onClick={() => console.log("vertical ellipsis clicked")}
    style={{ padding: 0, marginRight: 2 }} // 👈 tiny gap
  /> */}
          <span>
            <EllipsisOutlined
              style={{ transform: "rotate(90deg)", fontSize: 18 }}
            />
          </span>

          {/* Second Icon Button */}
          <span>
            <img
              src={CustomIcon}
              alt="custom"
              style={{ width: 12, height: 16, marginLeft: 4 }}
              onClick={() => removeRow(index)}
            />
          </span>
        </Flex>
      ),
      onHeaderCell: () => ({ style: headerStyle }),
      width: 10,
    },
  ];

  const handleInputChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };

  const removeRow = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const itemCount = data.length;
  const totalAmount = data.reduce(
    (sum, item) => sum + (parseFloat(item.amount) || 0),
    0
  );

  const [selected, setSelected] = useState(null);

  const handleChanges = (value) => {
    setSelected(value === selected ? null : value); // toggle off if same
  };


  return (
    <>
      <div
        style={{
          color: "#fff",
          padding: "18px",
          borderRadius: "6px",
          marginTop: "-24px",
        }}
      >
        <Row
          gutter={3}
          style={{
            marginBottom: 65,
            marginLeft: -40,
            padding: 0,
            borderRadius: 6,
            alignItems: "stretch",
          }}
        >
          {/* Content with Background (Avatar + Info + Panel Info) */}
          <Col span={17}>
            <div
              style={{
                backgroundColor: "#2C5A7B",
                borderRadius: 6,
                padding: 10,
                marginTop: 10,
                // height: "74%",
                // width:"95%"
              }}
            >
              <Row gutter={20}>
                {/* Avatar */}
                <Col
                  span={4} // ⬅️ Smaller width using grid
                  style={{
                    height: "100px", // ⬅️ Adjust height here
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    size={100}
                    src={userImage}
                    style={{
                      backgroundColor: "#787f86",
                      marginTop: 25,
                      // marginLeft: 16
                    }}
                    onError={() => true} // fallback to default if image fails
                  ></Avatar>
                </Col>

                {/* Patient Info */}
                <Col xs={22} md={20}>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      marginBottom: 8,
                    }}
                  >
                    Muhammad Hammad Arif
                  </div>

                  <Row gutter={[6, 4]} justify="start" align="top">
                    {/* Row 1 */}
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(leftColumn[0])}
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(middleColumn[0])}
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(rightColumn[0])}
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(panelInfo[0])}
                    </Col>

                    {/* Row 2 */}
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(leftColumn[1])}
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(middleColumn[1])}
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(rightColumn[1])}
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(panelInfo[1])}
                    </Col>

                    {/* Row 3 */}
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(leftColumn[2])}
                    </Col>

                    <Col xs={24} sm={24} md={12}>
                      <div
                        style={{
                          backgroundColor: "#557EB4",
                          minHeight: "20px",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "12px",
                          color: "#fff",
                          flexWrap: "wrap",
                        }}
                      >
                        <img
                          src={PanelIcon13}
                          alt="Panel Icon"
                          style={{ marginRight: 6, width: 16, height: 16 }}
                        />
                        <span>Panel:</span>
                        <span
                          style={{
                            fontWeight: "bold",
                            marginLeft: 4,
                            flex: 1,
                            textAlign: "center",
                            minWidth: "150px",
                          }}
                        >
                          Shifa International Employee
                        </span>
                      </div>
                    </Col>

                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(panelInfo[2])}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>

          {/* Tabs: NO Background */}
          <Col
            xs={24} // full width on mobile
            sm={24} // full width on small tablets
            md={12} // half width on medium screens
            lg={8} // one-third width on large screens
            xl={7} // fixed 7/24 on big screens
            style={{
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              marginBottom: 4,
              marginRight: 0,
            }}
          >
            <Tabs
              defaultActiveKey="lab"
              size="small"
              style={{
                borderRadius: 4,
                height: "100%",
                width: "100%", // ✅ takes parent width
                fontSize: 14,
                display: "flex",
                flexDirection: "column",
                marginBottom: 5,
              }}
              tabBarStyle={{ marginBottom: 0 }}
            >
              {/* === Allergies Tab === */}
              <TabPane
                tab="Allergies"
                key="allergies"
                // style={{ marginRight: 21 }}
              >
                <div style={{ overflow: "hidden" }}>
                  <Table
                    dataSource={allergyData}
                    columns={allergyColumns}
                    pagination={false}
                    size="small"
                    bordered
                    scroll={{ y: 160 }}
                    className="small-font-table"
                    style={{ background: "none" }}
                    locale={{ emptyText: "No lab results found" }}
                    scrollbar={{ alwaysVisible: false }}
                  />
                </div>
              </TabPane>

              {/* === Lab Results Tab === */}
              <TabPane tab="Lab Result" key="lab">
                <div style={{ overflow: "hidden" }}>
                  <Table
                    dataSource={allergyData}
                    columns={allergyColumns2}
                    pagination={false}
                    size="small"
                    bordered
                    scroll={{ y: 160 }}
                    className="small-font-table"
                    style={{ background: "none" }}
                    locale={{ emptyText: "No lab results found" }}
                  />
                </div>
              </TabPane>

              {/* === eShifa Job Tab === */}
              <TabPane tab="eShifa Job" key="eshifa">
                <div
                  style={{
                    height: 112, // reduced container height
                    minWidth: 390, // same as before
                    padding: "8px 10px",
                    margin: 0,
                    border: "1px dashed #ccc",
                    borderRadius: 6,
                    position: "relative", // for absolute-positioning the single eye icon
                    boxSizing: "border-box",
                    background: "transparent",
                  }}
                >
                  {/* Row 1 */}
                  <Row
                    align="middle"
                    style={{ padding: "4px 0", gap: 8, fontSize: 13 }}
                  >
                    <Col style={{}}>
                      <Checkbox />
                    </Col>

                    <Col style={{ flex: 1, minWidth: 0 }}>
                      <span
                        style={{
                          fontWeight: 500,
                          fontSize: 13,
                          marginTop: 4,
                          display: "inline-block",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        eShifa Prescription
                      </span>
                    </Col>

                    <Col style={{ minWidth: 0, paddingRight: 4 }}>
                      <span
                        style={{ fontWeight: 500, fontSize: 13, marginTop: 2 }}
                      >
                        Job Id:
                      </span>
                    </Col>

                    <Col
                      style={{
                        width: 160,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <Select
                        size="small"
                        placeholder=""
                        style={{ flex: 1, fontSize: 13 }}
                        options={[]}
                      />
                      <Button
                        type="primary"
                        shape="circle"
                        icon={<EyeOutlined style={{ width: 10 }} />}
                        size="small"
                        style={{
                          width: 18,
                          height: 22,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      />
                    </Col>
                  </Row>

                  {/* Row 2 */}
                  <Row
                    align="middle"
                    style={{ padding: "4px 0", gap: 8, fontSize: 13 }}
                  >
                    <Col style={{}}>
                      <Checkbox />
                    </Col>

                    <Col style={{ flex: 1, minWidth: 0 }}>
                      <span
                        style={{
                          fontWeight: 500,
                          fontSize: 13,
                          display: "inline-block",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Services Charges
                      </span>
                    </Col>

                    <Col
                      style={{ width: 60, textAlign: "right", paddingRight: 8 }}
                    >
                      <span style={{ fontWeight: 500, fontSize: 13 }}>
                        Amount
                      </span>
                    </Col>

                    <Col style={{ width: 130 }}>
                      <Select
                        size="small"
                        placeholder=""
                        style={{ width: "100%", fontSize: 13 }}
                        options={[]}
                      />
                    </Col>
                  </Row>
                </div>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
      <div
        style={{
          padding: 10,
          marginTop: "-100px",
          width: "101%",
          marginLeft: -36,
        }}
      >
        <Row
          justify="space-between"
          align="middle"
          style={{ padding: "8px 1px", marginTop: -6 }}
          gutter={[]}
        >
          <Col>
            <h3 style={{ margin: 0, marginLeft: -1 }}>Medication Detail</h3>
          </Col>
          <Col>
            {/* <Button type="primary">Proceed</Button> */}
            <Button
              type="primary"
              icon={<ArrowIcon />}
              style={{
                width: 90,
                height: 25,
                fontSize: "14px",
                marginLeft: "10px",
              }}
              onClick={() => setIsModalOpen(true)}
            >
              Proceed
            </Button>
          </Col>
        </Row>

        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          className="medicine-detail-table"
          style={{ marginTop: -6 }}
          bordered
          size="small"
        />

        <Row justify="end" style={{ marginTop: 0 }}>
          <Col span={24}>
            <span style={{ marginLeft: "980px" }}>
              {" "}
              Item Count: <strong>{itemCount}</strong>
            </span>
            <span style={{ marginLeft: "20px" }}>
              {" "}
              Total Amount: <strong>{totalAmount}</strong>
            </span>
          </Col>
          {/* <Col span={12} style={{ textAlign: "right" }}>
          Total Amount: <strong>{totalAmount}</strong>
        </Col> */}
        </Row>

        {/* <Divider /> */}

        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: 4,
            width: "62%",
            marginTop: "0px",
            marginLeft: "auto", // 🔹 Pushes div to the right
            marginRight: 0,
          }}
        >
          <h4
            style={{
              background: "#4E8DBD",
              color: "#fff",
              padding: "6px 12px",
              margin: 0,
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              fontSize: 14,
            }}
          >
            Current Transaction Detail
          </h4>

          <div style={{ padding: 8 }}>
            {/* Row 1 */}
            <Row gutter={4} align="middle" style={{ marginBottom: -2 }}>
              <Col>
                <Checkbox
                  checked={selected === "cash"}
                  onChange={() => handleChanges("cash")}
                >
                  Cash
                </Checkbox>
              </Col>
              <Col>
                <Checkbox
                  checked={selected === "credit"}
                  onChange={() => handleChanges("credit")}
                >
                  Credit Card
                </Checkbox>
              </Col>
              <Col>
                <Checkbox
                  checked={selected === "online"}
                  onChange={() => handleChanges("online")}
                >
                  Online
                </Checkbox>
              </Col>

              {/* Add some spacing before inputs */}
              <Col flex="auto" />

              <Col>
                <Form.Item
                  label="Discount Amount"
                  style={{ marginBottom: 0, marginRight: 8 }}
                >
                  <Input
                    style={{
                      width: 90,
                      fontSize: 12,
                      lineHeight: 1.5, // ✅ added line-height
                      padding: "2px 6px", // optional, for consistent spacing
                    }}
                  />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item label="Payment" style={{ marginBottom: 0 }}>
                  <Input
                    style={{
                      width: 90,
                      fontSize: 12,
                      lineHeight: 1.5, // ✅ consistent line height
                      padding: "2px 6px", // ✅ optional, same as other inputs
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* Row 2 */}
            <Row gutter={26} align="middle">
              <Col>
                <Checkbox>No Cash</Checkbox>
              </Col>

              <Col style={{ marginLeft: -22 }}>
                <Input size="small" style={{ width: 70 }} />{" "}
                <Input size="small" style={{ width: 190 }} />
              </Col>

              {/* Add space before last two */}
              <Col flex="auto" />

              <Col>
                <Form.Item
                  label="Charge to Panel"
                  style={{ marginBottom: 0, marginRight: -18 }}
                >
                  <Input
                    style={{
                      width: 90,
                      fontSize: 12,
                      lineHeight: 1.5, // ✅ consistent line height
                      padding: "2px 6px", // ✅ matches other inputs
                    }}
                  />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item label="To Return" style={{ marginBottom: 0 }}>
                  <Input
                    style={{
                      width: 90,
                      fontSize: 12,
                      lineHeight: 1.5, // ✅ consistent line height
                      padding: "2px 6px", // ✅ same as other inputs
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </div>
        </div>

        <Row justify="end" style={{ marginTop: 3 }}>
          <Space>
            <Button type="primary" style={{ background: "green" }}>
              Save
            </Button>
            <Button type="primary">Print</Button>
          </Space>
        </Row>
      </div>

      <PrescriptionModal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      />
    </>
  );
};

const WalkingComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Lab Results Data
  const labData = [
    {
      key: "1",
      date: "11/04/2024",
      test: "PARACETAMOL+TRAMADOL",
      result: 55.8,
      refRange: "45.0 - 66.0",
    },
    {
      key: "2",
      date: "11/04/2024",
      test: "PANADOL-CF",
      result: 66.2,
      refRange: "65.0 - 100.0",
    },
    {
      key: "3",
      date: "11/04/2024",
      test: "BECLOMETHASONE+SALBUTAMOL",
      result: 77.9,
      refRange: "22.6 - 101.5",
    },
  ];

  const labColumns = [
    {
      title: (
        <span style={{ fontSize: 12, fontWeight: "600", color: "#fff" }}>
          Allergy Type
        </span>
      ),
      dataIndex: "type",
      key: "type",
      width: 90, // Reduced width here
      render: (text) => <span style={{ fontSize: 10 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
    {
      title: (
        <span style={{ fontSize: 12, fontWeight: "600", color: "#fff" }}>
          Allergy Description
        </span>
      ),
      dataIndex: "description",
      key: "description",
      width: 200,
      render: (text) => <span style={{ fontSize: 10 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
    {
      title: (
        <span style={{ fontSize: 12, fontWeight: "600", color: "#fff" }}>
          Severity Level
        </span>
      ),
      dataIndex: "severity",
      key: "severity",
      width: 100,
      render: (text) => <span style={{ fontSize: 10 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
  ];

  const leftColumn = [
    {
      label: "MR Number",
      value: "25172C",
      icon: <PanelIcon1 style={{ width: 16, height: 16 }} />,
    },
    {
      label: "Height (cm)",
      value: "55.7",
      icon: <PanelIcon10 style={{ width: 16, height: 16 }} />,
    },
    {
      label: "Insurance",
      value: "United",
      icon: <PanelIcon3 style={{ width: 16, height: 16 }} />,
    },
  ];
  const middleColumn = [
    {
      label: "Age",
      value: "14 Y 05 M 30 D",
      icon: <PanelIcon8 style={{ width: 16, height: 16 }} />,
    },
    {
      label: "Weight (kg)",
      value: "88.8",
      icon: <PanelIcon11 style={{ width: 16, height: 16 }} />,
    },
    // { label: "Panel", value: "Shifa International Employee", icon: "🏥" }, // <--- Here
  ];

  const rightColumn = [
    {
      label: "Gender",
      value: "Male",
      icon: <PanelIcon5 style={{ width: 16, height: 16 }} />,
    },
    {
      label: "BSA (m²)",
      value: "1.17",
      icon: <PanelIcon12 style={{ width: 16, height: 16 }} />,
    },
  ];

  const panelInfo = [
    {
      label: "Contact #",
      value: "+9233574856",
      icon: <PanelIcon9 style={{ width: 16, height: 16 }} />,
    },
    {
      label: "Blood Group",
      value: "AB+",
      icon: <PanelIcon6 style={{ width: 16, height: 16 }} />,
    },
    {
      label: "Discount",
      value: "10%",
      icon: <PanelIcon7 style={{ width: 16, height: 16 }} />,
    },
  ];

  const renderBlock = (item) => (
    <div
      style={{
        backgroundColor: "#557EB4",
        // width: "174px",              // fixed width
        // height: "20px",              // fixed height
        padding: "4px 8px", // enough padding inside
        borderRadius: "6px", // rounded corners
        display: "flex",
        alignItems: "center",
        opacity: 1, // fully visible
        fontSize: "12px", // compact text
        color: "#fff", // optional for visibility
      }}
    >
      <span style={{ marginRight: 6 }}>{item.icon}</span>
      <span>{item.label}:</span>
      <span style={{ fontWeight: "bold", marginLeft: 4 }}>{item.value}</span>
    </div>
  );

  const allergyColumns = [
    {
      title: (
        <span style={{ fontSize: 10, fontWeight: "600", color: "#fff" }}>
          Allergy Type
        </span>
      ),
      dataIndex: "type",
      key: "type",
      width: 90, // Reduced width here
      render: (text) => <span style={{ fontSize: 9 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
      // width: '30%',
    },
    {
      title: (
        <span style={{ fontSize: 10, fontWeight: "600", color: "#fff" }}>
          Allergy Description
        </span>
      ),
      dataIndex: "description",
      key: "description",
      width: 200,
      render: (text) => <span style={{ fontSize: 9 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
      width: "70%",
      height: "30%",
    },
    {
      title: (
        <span style={{ fontSize: 10, fontWeight: "600", color: "#fff" }}>
          Severity Level
        </span>
      ),
      dataIndex: "severity",
      key: "severity",
      width: 100,
      render: (text) => <span style={{ fontSize: 9 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
  ];

  const allergyColumns2 = [
    {
      title: (
        <span style={{ fontSize: 10, fontWeight: "600", color: "#fff" }}>
          Date
        </span>
      ),
      dataIndex: "type",
      key: "type",
      width: 70, // Reduced width here
      render: (text) => <span style={{ fontSize: 9 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
      // width: '30%',
    },
    {
      title: (
        <span style={{ fontSize: 10, fontWeight: "600", color: "#fff" }}>
          Test Name
        </span>
      ),
      dataIndex: "description",
      key: "description",
      width: 150,
      render: (text) => <span style={{ fontSize: 9 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
    {
      title: (
        <span style={{ fontSize: 10, fontWeight: "600", color: "#fff" }}>
          Result
        </span>
      ),
      dataIndex: "severity",
      key: "severity",
      width: 70,
      render: (text) => <span style={{ fontSize: 9 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
    {
      title: (
        <span style={{ fontSize: 10, fontWeight: "600", color: "#fff" }}>
          Ref - Range
        </span>
      ),
      dataIndex: "severity",
      key: "severity",
      width: 70,
      render: (text) => <span style={{ fontSize: 9 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
  ];

  const allergyData = [
    {
      key: "1",
      type: "GENERIC",
      description: "FOOD-SUPPLEMENT",
      severity: "Moderate",
      render: (text) => <span style={{ fontSize: 10 }}>{text}</span>,
    },
    {
      key: "2",
      type: "SUB CLASS",
      description: "ANTIBIOTICS",
      severity: "Moderate",
      render: (text) => <span style={{ fontSize: 10 }}>{text}</span>,
    },
    {
      key: "3",
      type: "GENERIC",
      description: "ALTEPLASE (TISSUE)",
      severity: "Mild",
      render: (text) => <span style={{ fontSize: 10 }}>{text}</span>,
    },
  ];

  const [data, setData] = useState([
    {
      key: 1,
      medicationName: "",
      form: "",
      dose: "",
      frequency: "",
      route: "",
      batch: "",
      expireDate: null,
      remarks: "",
      qty: "",
      amount: "",
    },
  ]);

  // Add new row
  const handleAdd = () => {
    setData([
      ...data,
      {
        key: Date.now(),
        medicationName: "",
        form: "",
        dose: "",
        frequency: "",
        route: "",
        batch: "",
        expireDate: null,
        remarks: "",
        qty: "",
        amount: "",
      },
    ]);
  };

  // Delete row
  const handleDelete = (key) => {
    setData(data.filter((item) => item.key !== key));
  };

  // Handle input change
  const handleChange = (value, key, column) => {
    const newData = data.map((item) => {
      if (item.key === key) {
        return { ...item, [column]: value };
      }
      return item;
    });
    setData(newData);
  };

  const columns = [
    {
      title: "Medication Name",
      dataIndex: "medicationName",
      render: (_, record) => (
        <Input
          value={record.medicationName}
          onChange={(e) =>
            handleChange(e.target.value, record.key, "medicationName")
          }
        />
      ),
    },
    {
      title: "Form",
      dataIndex: "form",
      render: (_, record) => (
        <Input
          value={record.form}
          onChange={(e) => handleChange(e.target.value, record.key, "form")}
        />
      ),
    },
    {
      title: "Dose",
      dataIndex: "dose",
      render: (_, record) => (
        <Input
          value={record.dose}
          onChange={(e) => handleChange(e.target.value, record.key, "dose")}
        />
      ),
    },
    {
      title: "Frequency",
      dataIndex: "frequency",
      render: (_, record) => (
        <Select
          value={record.frequency}
          onChange={(val) => handleChange(val, record.key, "frequency")}
          style={{ width: "100%" }}
        >
          <Option value="1x/d">1x/d</Option>
          <Option value="2x/d">2x/d</Option>
          <Option value="3x/d">3x/d</Option>
          <Option value="PRN">PRN</Option>
        </Select>
      ),
    },
    {
      title: "Route",
      dataIndex: "route",
      render: (_, record) => (
        <Select
          value={record.route}
          onChange={(val) => handleChange(val, record.key, "route")}
          style={{ width: "100%" }}
        >
          <Option value="oral">Oral</Option>
          <Option value="iv">IV</Option>
          <Option value="im">IM</Option>
          <Option value="sc">SC</Option>
        </Select>
      ),
    },
    {
      title: "Batch",
      dataIndex: "batch",
      render: (_, record) => (
        <Input
          value={record.batch}
          onChange={(e) => handleChange(e.target.value, record.key, "batch")}
        />
      ),
    },
    {
      title: "Expire Date",
      dataIndex: "expireDate",
      render: (_, record) => (
        <DatePicker
          style={{ width: "100%" }}
          value={record.expireDate}
          onChange={(date) => handleChange(date, record.key, "expireDate")}
        />
      ),
    },
    {
      title: "Remarks & Instructions",
      dataIndex: "remarks",
      render: (_, record) => (
        <Input
          value={record.remarks}
          onChange={(e) => handleChange(e.target.value, record.key, "remarks")}
        />
      ),
    },
    {
      title: "Qty",
      dataIndex: "qty",
      render: (_, record) => (
        <Input
          value={record.qty}
          onChange={(e) => handleChange(e.target.value, record.key, "qty")}
        />
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (_, record) => (
        <Input
          value={record.amount}
          onChange={(e) => handleChange(e.target.value, record.key, "amount")}
        />
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Space>
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd} />
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.key)}
          />
        </Space>
      ),
    },
  ];

  const handleInputChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };

  const removeRow = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const itemCount = data.length;
  const totalAmount = data.reduce(
    (sum, item) => sum + (parseFloat(item.amount) || 0),
    0
  );

  return (
    <>
      <div
        style={{
          color: "#fff",
          padding: "18px",
          borderRadius: "6px",
          marginTop: "-10px",
        }}
      >
        <Row
          gutter={[]}
          style={{
            marginBottom: 65,
            marginLeft: -40,
            padding: 0,
            borderRadius: 6,
            alignItems: "stretch",
          }}
        >
          {/* Content with Background (Avatar + Info + Panel Info) */}
          <Col span={17}>
            <div
              style={{
                backgroundColor: "#2C5A7B",
                borderRadius: 6,
                padding: 10,
                marginTop: 10,
              }}
            >
              <Row gutter={20}>
                <Col
                  span={4}
                  style={{
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    size={100}
                    src={userImage}
                    style={{
                      backgroundColor: "#787f86",
                      marginTop: 25,
                      // marginLeft: 16
                    }}
                    onError={() => true} // fallback to default if image fails
                  ></Avatar>
                </Col>

                {/* Patient Info */}
                <Col xs={22} md={20}>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      marginBottom: 8,
                    }}
                  >
                    Muhammad Hammad Arif
                  </div>

                  <Row gutter={[6, 4]} justify="start" align="top">
                    {/* Row 1 */}
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(leftColumn[0])}
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(middleColumn[0])}
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(rightColumn[0])}
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(panelInfo[0])}
                    </Col>

                    {/* Row 2 */}
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(leftColumn[1])}
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(middleColumn[1])}
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(rightColumn[1])}
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(panelInfo[1])}
                    </Col>

                    {/* Row 3 */}
                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(leftColumn[2])}
                    </Col>

                    <Col xs={24} sm={24} md={12}>
                      <div
                        style={{
                          backgroundColor: "#557EB4",
                          minHeight: "20px",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "12px",
                          color: "#fff",
                          flexWrap: "wrap",
                        }}
                      >
                        <img
                          src={PanelIcon13}
                          alt="Panel Icon"
                          style={{ marginRight: 6, width: 16, height: 16 }}
                        />
                        <span>Panel:</span>
                        <span
                          style={{
                            fontWeight: "bold",
                            marginLeft: 4,
                            flex: 1,
                            textAlign: "center",
                            minWidth: "150px",
                          }}
                        >
                          Shifa International Employee
                        </span>
                      </div>
                    </Col>

                    <Col xs={12} sm={12} md={6}>
                      {renderBlock(panelInfo[2])}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>

          {/* Tabs: NO Background */}
          <Col
            xs={24} // full width on mobile
            sm={24} // full width on small tablets
            md={12} // half width on medium screens
            lg={8} // one-third width on large screens
            xl={7} // fixed 7/24 on big screens
            style={{
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              marginBottom: 4,
            }}
          >
            <Tabs
              defaultActiveKey="lab"
              size="small"
              style={{
                borderRadius: 4,
                height: "100%",
                width: "100%", // ✅ takes parent width
                fontSize: 14,
                display: "flex",
                flexDirection: "column",
                marginBottom: 5,
              }}
              tabBarStyle={{ marginBottom: 0 }}
            >
              {/* === Allergies Tab === */}
              <TabPane tab="Allergies" key="allergies">
                <div style={{ height: 120, overflow: "hidden", width: "100%" }}>
                  <Table
                    dataSource={allergyData}
                    columns={allergyColumns}
                    pagination={false}
                    size="small"
                    bordered
                    scroll={{ y: 160 }}
                    className="small-font-table"
                    style={{ background: "none", width: "100%" }}
                    locale={{ emptyText: "No lab results found" }}
                  />
                </div>
              </TabPane>

              {/* === Lab Results Tab === */}
              <TabPane tab="Lab Result" key="lab">
                <div style={{ overflow: "hidden", width: "100%" }}>
                  <Table
                    dataSource={allergyData}
                    columns={allergyColumns2}
                    pagination={false}
                    size="small"
                    bordered
                    scroll={{ y: 160 }}
                    className="small-font-table"
                    style={{ background: "none", width: "100%" }}
                    locale={{ emptyText: "No lab results found" }}
                  />
                </div>
              </TabPane>

              {/* === eShifa Job Tab === */}
              <TabPane tab="eShifa Job" key="eshifa">
                <div
                  style={{
                    height: 112, // reduced container height
                    minWidth: 390, // same as before
                    padding: "8px 10px",
                    margin: 0,
                    border: "1px dashed #ccc",
                    borderRadius: 6,
                    position: "relative", // for absolute-positioning the single eye icon
                    boxSizing: "border-box",
                    background: "transparent",
                  }}
                >
                  {/* Row 1 */}
                  <Row
                    align="middle"
                    style={{ padding: "4px 0", gap: 8, fontSize: 13 }}
                  >
                    <Col style={{}}>
                      <Checkbox />
                    </Col>

                    <Col style={{ flex: 1, minWidth: 0 }}>
                      <span
                        style={{
                          fontWeight: 500,
                          fontSize: 13,
                          marginTop: 4,
                          display: "inline-block",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        eShifa Prescription
                      </span>
                    </Col>

                    <Col style={{ minWidth: 0, paddingRight: 4 }}>
                      <span
                        style={{ fontWeight: 500, fontSize: 13, marginTop: 2 }}
                      >
                        Job Id:
                      </span>
                    </Col>

                    <Col
                      style={{
                        width: 160,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <Select
                        size="small"
                        placeholder=""
                        style={{ flex: 1, fontSize: 13 }}
                        options={[]}
                      />
                      <Button
                        type="primary"
                        shape="circle"
                        icon={<EyeOutlined style={{ width: 10 }} />}
                        size="small"
                        style={{
                          width: 18,
                          height: 22,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      />
                    </Col>
                  </Row>

                  {/* Row 2 */}
                  <Row
                    align="middle"
                    style={{ padding: "4px 0", gap: 8, fontSize: 13 }}
                  >
                    <Col style={{}}>
                      <Checkbox />
                    </Col>

                    <Col style={{ flex: 1, minWidth: 0 }}>
                      <span
                        style={{
                          fontWeight: 500,
                          fontSize: 13,
                          display: "inline-block",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Services Charges
                      </span>
                    </Col>

                    <Col
                      style={{ width: 60, textAlign: "right", paddingRight: 8 }}
                    >
                      <span style={{ fontWeight: 500, fontSize: 13 }}>
                        Amount
                      </span>
                    </Col>

                    <Col style={{ width: 130 }}>
                      <Select
                        size="small"
                        placeholder=""
                        style={{ width: "100%", fontSize: 13 }}
                        options={[]}
                      />
                    </Col>
                  </Row>
                </div>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
      <div
        style={{
          padding: 10,
          marginTop: "-100px",
          width: "101%",
          marginLeft: -36,
        }}
      >
        <Row
          justify="space-between"
          align="middle"
          style={{ padding: "8px 1px" }}
          gutter={[]}
        >
          <Col>
            <h3 style={{ margin: 0, marginLeft: -1 }}>Medication Detail</h3>
          </Col>
          <Col>
            {/* <Button type="primary">Proceed</Button> */}
            <Button
              type="primary"
              icon={<ArrowIcon />}
              style={{
                width: 90,
                height: 25,
                fontSize: "14px",
                marginLeft: "10px",
              }}
              onClick={() => setIsModalOpen(true)}
            >
              Proceed
            </Button>
          </Col>
        </Row>

        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          className="medicine-detail-table"
          bordered
          size="small"
        />

        <Row justify="end" gutter={[16, 8]} style={{ marginTop: 10 }}>
          <Col xs={24} sm="auto">
            <span>
              Item Count: <strong>{itemCount}</strong>
            </span>
          </Col>

          <Col xs={24} sm="auto">
            <span>
              Total Amount: <strong>{totalAmount}</strong>
            </span>
          </Col>
        </Row>

        {/* <Divider /> */}

        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: 4,
            width: "80%",
            marginTop: "2px",
            marginLeft: "auto", // 🔹 Pushes div to the right
            marginRight: 0,
          }}
        >
          <h4
            style={{
              background: "#4E8DBD",
              color: "#fff",
              padding: "6px 12px",
              margin: 0,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              fontSize: 14,
            }}
          >
            Current Transaction Detail
          </h4>

          <div style={{ padding: 12 }}>
            {/* Row 1 */}
            <Row gutter={16} align="middle" style={{ marginBottom: 12 }}>
              <Col>
                <Checkbox>Cash</Checkbox>
              </Col>
              <Col>
                <Checkbox>Credit Card</Checkbox>
              </Col>

              {/* Add some spacing before inputs */}
              <Col flex="auto" />

              <Col>
                <Form.Item label="Discount Amount" style={{ marginBottom: 0 }}>
                  <Input style={{ width: 150 }} />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item label="Payment" style={{ marginBottom: 0 }}>
                  <Input style={{ width: 150 }} />
                </Form.Item>
              </Col>
            </Row>

            {/* Row 2 */}
            <Row gutter={16} align="middle">
              <Col>
                <Checkbox>No Cash</Checkbox>
              </Col>

              <Col>
                <Input size="small" style={{ width: 80 }} />{" "}
                <Input size="small" style={{ width: 200 }} />
              </Col>

              {/* Add space before last two */}
              <Col flex="auto" />

              <Col>
                <Form.Item label="Charge to Panel" style={{ marginBottom: 0 }}>
                  <Input style={{ width: 150 }} />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item label="To Return" style={{ marginBottom: 0 }}>
                  <Input style={{ width: 150 }} />
                </Form.Item>
              </Col>
            </Row>
          </div>
        </div>

        <Row justify="end" style={{ marginTop: 20 }}>
          <Space>
            <Button type="primary" style={{ background: "green" }}>
              Save
            </Button>
            <Button type="primary">Print</Button>
          </Space>
        </Row>
      </div>

      <PrescriptionModal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      />
    </>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("prescription");

  const renderComponent = () => {
    switch (value) {
      case "walking":
        return <WalkingComponent />;
      case "prescription":
        return <PrescriptionComponent />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: 210, padding: "8px", fontSize: "14px" }}>
        {/* Dispensing Type */}
        <Row
          align="middle"
          gutter={16}
          style={{ marginBottom: 0, marginLeft: -30, marginTop: "-4px" }}
        >
          <Col>
            <strong>Dispensing Type</strong>
          </Col>
          <Col>
            <Radio.Group
              defaultValue="prescription"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              style={{ fontSize: 12 }}
            >
              <Radio value="prescription" style={{ fontSize: 13 }}>
                Prescription
              </Radio>
              <Radio value="walking" style={{ fontSize: 13 }}>
                Walk-In
              </Radio>
            </Radio.Group>
          </Col>
        </Row>

        {/* Tabs */}
        <Tabs
          defaultActiveKey="1"
          style={{ marginTop: "-4px", marginLeft: -20 }}
          renderTabBar={(props, DefaultTabBar) => (
            <div
              style={{
                display: "flex",
                alignItems: "center", // ✅ vertical alignment
                gap: "50px", // space between tabs and radios
              }}
            >
              <DefaultTabBar {...props} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 15,
                  marginRight: 20,
                }}
              >
                <span style={{ fontWeight: 600, marginRight: 18 }}>
                  Sale Type
                </span>
                <Radio.Group defaultValue="cash">
                  <Radio value="cash">Cash</Radio>
                  <Radio value="panel">Panel</Radio>
                </Radio.Group>
              </div>
            </div>
          )}
        >
          {/* General Sale Tab */}
          <TabPane tab="General Sale" key="1">
            {/* <Row gutter={10} align="middle" style={{ marginBottom: "12px" }}>
              <Col>
                <strong>Sale Type</strong>
              </Col>
              <Col>
                <Radio.Group defaultValue="cash">
                  <Radio value="cash">Cash</Radio>
                  <Radio value="panel">Panel</Radio>
                </Radio.Group>
              </Col>
            </Row> */}

            {/* Form Inputs in One Row */}
            <Row
              gutter={[16, 16]}
              align="middle"
              style={{ marginBottom: 0, marginTop: "-12px" }}
            >
              <Col xs={24} sm={12} md={3}>
                <Checkbox style={{ fontSize: 14, lineHeight: 1.5 }}>
                  Scan Prescription
                </Checkbox>
              </Col>

              <Col xs={24} sm={12} md={3} style={{ marginRight: 14 }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{ marginRight: 6, fontSize: 14, lineHeight: 1.5 }}
                  >
                    MR #
                  </span>
                  <Input style={{ flex: 1, fontSize: 12, lineHeight: 1.5 }} />
                </div>
              </Col>

              <Col xs={24} sm={12} md={6} style={{ marginRight: 10 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: 14,
                  }}
                >
                  <span
                    style={{ marginRight: 6, fontSize: 14, lineHeight: 1.5 }}
                  >
                    Specialty
                  </span>
                  <Select
                    defaultValue="Cardiac Electrophysiologist"
                    style={{ flex: 1, fontSize: 12, lineHeight: 1.5 }}
                  >
                    <Option
                      value="Cardiac Electrophysiologist"
                      style={{ fontSize: 12 }}
                    >
                      Cardiac Electrophysiologist
                    </Option>
                    <Option value="Cardiologist" style={{ fontSize: 12 }}>
                      Cardiologist
                    </Option>
                    <Option value="Neurologist" style={{ fontSize: 12 }}>
                      Neurologist
                    </Option>
                  </Select>
                </div>
              </Col>

              <Col xs={24} sm={12} md={7} style={{ marginRight: 10 }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{ marginRight: 6, fontSize: 14, lineHeight: 1.5 }}
                  >
                    Prescribing - Consultant
                  </span>
                  <Input
                    defaultValue="Dr Asad Ullah"
                    style={{ flex: 1, fontSize: 12, lineHeight: 1.5 }}
                  />
                </div>
              </Col>

              <Col xs={24} sm={12} md={4}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{ marginRight: 6, fontSize: 14, lineHeight: 1.5 }}
                  >
                    Visit Date
                  </span>
                  <DatePicker
                    format="DD/MM/YYYY"
                    style={{ flex: 1, fontSize: 12, lineHeight: 1.5 }}
                  />
                </div>
              </Col>
            </Row>
          </TabPane>

          {/* Extempore Sale Tab */}
          <TabPane tab="Extempore Sale" key="2">
            Extempore Sale Content
          </TabPane>

          {/* Oncology Sale Tab */}
          <TabPane tab="Oncology Sale" key="3">
            Oncology Sale Content
          </TabPane>
        </Tabs>

        {/* Patient Info Panel BELOW with Tabs */}
        {renderComponent()}
      </div>
      <PrescriptionModal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default App;
