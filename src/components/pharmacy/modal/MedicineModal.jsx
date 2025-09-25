import React, { useState } from "react";
import { Modal, Input, Row, Col, Table, Button, Select, Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import SkipReasonPopup from "./SkipModal";
import "../index.css";

const PrescriptionModal = ({ open, onCancel }) => {
  const [skipOpen, setSkipOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
  const allergyColumns = [
    {
      title: (
        <span style={{ fontSize: 11, fontWeight: "600", color: "#fff" }}>
          Allergy Type
        </span>
      ),
      dataIndex: "type",
      key: "type",
      width: 90, // Reduced width here
      render: (text) => <span style={{ fontSize: 11 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
      // width: '30%',
    },
    {
      title: (
        <span style={{ fontSize: 11, fontWeight: "600", color: "#fff" }}>
          Allergy Description
        </span>
      ),
      dataIndex: "description",
      key: "description",
      width: 200,
      render: (text) => <span style={{ fontSize: 11 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
      width: "60%",
      height: "30%",
    },
    {
      title: (
        <span style={{ fontSize: 11, fontWeight: "600", color: "#fff" }}>
          Severity Level
        </span>
      ),
      dataIndex: "severity",
      key: "severity",
      width: 100,
      render: (text) => <span style={{ fontSize: 11 }}>{text}</span>,
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
    },
    {
      key: "2",
      type: "SUB CLASS",
      description: "ANTIBIOTICS, AMINOGLYCOSIDES",
      severity: "Moderate",
    },
    {
      key: "3",
      type: "GENERIC",
      description: "ALTEPLASE/TISSUE-PLASMINOGEN-ACTIVATOR",
      severity: "Mild",
    },
    {
      key: "1",
      type: "GENERIC",
      description: "FOOD-SUPPLEMENT",
      severity: "Moderate",
    },
    {
      key: "2",
      type: "SUB CLASS",
      description: "ANTIBIOTICS, AMINOGLYCOSIDES",
      severity: "Moderate",
    },
    {
      key: "3",
      type: "GENERIC",
      description: "ALTEPLASE/TISSUE-PLASMINOGEN-ACTIVATOR",
      severity: "Mild",
    },
    {
      key: "1",
      type: "GENERIC",
      description: "FOOD-SUPPLEMENT",
      severity: "Moderate",
    },
    {
      key: "2",
      type: "SUB CLASS",
      description: "ANTIBIOTICS, AMINOGLYCOSIDES",
      severity: "Moderate",
    },
    {
      key: "3",
      type: "GENERIC",
      description: "ALTEPLASE/TISSUE-PLASMINOGEN-ACTIVATOR",
      severity: "Mild",
    },
  ];

  const labColumns = [
    // { title: "Date", dataIndex: "date", key: "date" },
    // { title: "Test Name", dataIndex: "testName", key: "testName" },
    // { title: "Result", dataIndex: "result", key: "result" },
    // { title: "Ref - Range", dataIndex: "range", key: "range" },
    {
      title: (
        <span style={{ fontSize: 11, fontWeight: "600", color: "#fff" }}>
          Date
        </span>
      ),
      dataIndex: "date",
      key: "date",
      width: 70, // Reduced width here
      render: (text) => <span style={{ fontSize: 11 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
      // width: '30%',
    },
    {
      title: (
        <span style={{ fontSize: 11, fontWeight: "600", color: "#fff" }}>
          Test Name
        </span>
      ),
      dataIndex: "testName",
      key: "testName",
      width: 150,
      render: (text) => <span style={{ fontSize: 11 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
    {
      title: (
        <span style={{ fontSize: 11, fontWeight: "600", color: "#fff" }}>
          Result
        </span>
      ),
      dataIndex: "result",
      key: "result",
      width: 70,
      render: (text) => <span style={{ fontSize: 11 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
    {
      title: (
        <span style={{ fontSize: 11, fontWeight: "600", color: "#fff" }}>
          Ref - Range
        </span>
      ),
      dataIndex: "range",
      key: "range",
      width: 70,
      render: (text) => <span style={{ fontSize: 11 }}>{text}</span>,
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#2971A8",
        },
      }),
    },
  ];

  const labData = [
    {
      key: "1",
      date: "11/04/2024",
      testName: "PARACETAMOL+TRAMADOL",
      result: "55.8",
      range: "45.0 - 68.0",
    },
    {
      key: "2",
      date: "11/04/2024",
      testName: "PANADOL-CF",
      result: "66.2",
      range: "66.0 - 100.0",
    },
    {
      key: "3",
      date: "11/04/2024",
      testName: "BECLOMETHASONE+SALBUTAMOL",
      result: "77.9",
      range: "22.6 - 101.5",
    },
    {
      key: "1",
      date: "11/04/2024",
      testName: "PARACETAMOL+TRAMADOL",
      result: "55.8",
      range: "45.0 - 68.0",
    },
    {
      key: "2",
      date: "11/04/2024",
      testName: "PANADOL-CF",
      result: "66.2",
      range: "66.0 - 100.0",
    },
    {
      key: "3",
      date: "11/04/2024",
      testName: "BECLOMETHASONE+SALBUTAMOL",
      result: "77.9",
      range: "22.6 - 101.5",
    },
    {
      key: "1",
      date: "11/04/2024",
      testName: "PARACETAMOL+TRAMADOL",
      result: "55.8",
      range: "45.0 - 68.0",
    },
    {
      key: "2",
      date: "11/04/2024",
      testName: "PANADOL-CF",
      result: "66.2",
      range: "66.0 - 100.0",
    },
  ];

  const medicines = [
    "FLU-Z (FLUCONAZOLE) 50 MG/SML",
    "FLU-Z (FLUCONAZOLE) 50 MG/SML",
    "FLU-Z (FLUCONAZOLE) 50 MG/SML",
    "FLU-Z (FLUCONAZOLE) 50 MG/SML",
    "FLU-Z (FLUCONAZOLE) 50 MG/SML",
    "FLU-Z (FLUCONAZOLE) 50 MG/SML",
    "FLU-Z (FLUCONAZOLE) 50 MG/SML",
    "FLU-Z (FLUCONAZOLE) 50 MG/SML",
    "FLU-Z (FLUCONAZOLE) 50 MG/SML",
    "FLU-Z (FLUCONAZOLE) 50 MG/SML",
    "FLU-Z (FLUCONAZOLE) 50 MG/SML",
    "FLU-Z (FLUCONAZOLE) 50 MG/SML",
    "FLU-Z (FLUCONAZOLE) 50 MG/SML",
    "FLU-Z (FLUCONAZOLE) 50 MG/SML",

    // dynamic empty inputs
  ];

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      width="1280px"
      // height="100%"
      footer={null}
      centered
      title="Muhammad Hammad Arif (001231255)"
      rootClassName="custom-administer"
      // style={{ backgroundColor: "#F1F7FF" }}
    >
      <Row gutter={4} style={{ padding: "4px 2px", marginTop: -10 }}>
        {/* Left side (Medication List) */}
        <Col
          span={5}
          style={{
            // borderRight: "1px solid #ddd",
            // paddingRight: 0,
            backgroundColor: "#F1F7FF",
            // width:"336px",
            // height:"634px"
          }}
        >
          {/* Header with count */}
          <div style={{ fontWeight: "bold", marginBottom: 5, marginTop: 2 }}>
            Medication Name{" "}
            <span style={{ color: "#020202ff", marginLeft: 220 }}>
              0/{medicines.length}
            </span>
          </div>

          {/* Render all medicine inputs */}
          {medicines.map((med, i) => (
            <Input
              key={i}
              value={med}
              readOnly={!!med}
              style={{
                marginBottom: 4,
                backgroundColor: "#F1F7FF",
                border: "1px solid #7D7C7C",
                borderRadius: 4,
                // width: 300,
                fontSize: 13,
              }}
            />
          ))}
        </Col>

        {/* Middle Section */}
        <Col span={19} style={{ padding: "0px" }}>
          <div
            style={{
              backgroundColor: "#F1F7FF",
              height: 180,
              padding: "4px",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 1, fontSize: 16 }}>
              Prescription Detail
            </div>
            <Row gutter={2} style={{ marginBottom: 6 }}>
              <Col span={12}>
                <div style={{ marginBottom: 4 }}>
                  <div
                    style={{ fontSize: 12, fontWeight: 500, marginBottom: 0 }}
                  >
                    Medicine Name
                  </div>
                  <Input
                    placeholder="Medicine Name"
                    value=""
                    disabled
                    style={{
                      background: "#F8F8F8",
                      fontSize: 12,
                      lineHeight: 1.5,
                    }}
                  />
                </div>
              </Col>

              <Col span={6}>
                <div style={{ marginBottom: 4 }}>
                  <div
                    style={{ fontSize: 12, fontWeight: 500, marginBottom: 0 }}
                  >
                    Form
                  </div>
                  <Input
                    placeholder="Form"
                    value=""
                    disabled
                    style={{
                      background: "#F8F8F8",
                      fontSize: 12,
                      lineHeight: 1.5,
                    }}
                  />
                </div>
              </Col>

              <Col span={6}>
                <div style={{ marginBottom: 4 }}>
                  <div
                    style={{
                      fontSize: 12,
                      lineHeight: 1.5,
                      fontWeight: 500,
                      // marginBottom: 0,
                    }}
                  >
                    Strength/Unit
                  </div>
                  <Input
                    placeholder="Strength/Unit"
                    addonAfter={
                      <div style={{ lineHeight: 1.5, fontSize: 12 }}>Unit</div>
                    }
                    style={{
                      width: 240,
                      background: "white",
                      fontSize: 12,
                      lineHeight: 1.5,
                    }}
                    disabled
                  />
                </div>
              </Col>
            </Row>

            <Row gutter={2} style={{ marginBottom: 6 }}>
              <Col span={6}>
                <div style={{ marginBottom: 4 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      marginBottom: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    Dose
                  </div>
                  <Input
                    placeholder="Dose"
                    addonAfter={
                      <div style={{ lineHeight: 1.5, fontSize: 12 }}>Tab/s</div>
                    }
                    value=""
                    disabled
                    style={{
                      background: "white",
                      fontSize: 12,
                      lineHeight: 1.5,
                      // width: 230
                    }}
                  />
                </div>
              </Col>

              <Col span={5}>
                <div style={{ marginBottom: 4 }}>
                  <div
                    style={{ fontSize: 12, fontWeight: 500, marginBottom: 0 }}
                  >
                    Frequency
                  </div>
                  <Input
                    placeholder="Frequency"
                    value=""
                    disabled
                    style={{
                      background: "#F8F8F8",
                      fontSize: 12,

                      lineHeight: 1.5,
                    }}
                  />
                </div>
              </Col>

              <Col span={5}>
                <div style={{ marginBottom: 4 }}>
                  <div
                    style={{ fontSize: 12, fontWeight: 500, marginBottom: 0 }}
                  >
                    Route
                  </div>
                  <Input
                    placeholder="Route"
                    disabled
                    style={{
                      background: "#F8F8F8",
                      fontSize: 12,
                      lineHeight: 1.5,
                    }}
                  />
                </div>
              </Col>

              <Col span={4}>
                <div style={{ marginBottom: 4 }}>
                  <div
                    style={{ fontSize: 12, fontWeight: 500, marginBottom: 0 }}
                  >
                    Order for Days
                  </div>
                  <Input
                    placeholder="Order for Days"
                    value=""
                    disabled
                    style={{
                      background: "#F8F8F8",
                      fontSize: 12,
                      lineHeight: 1.5,
                    }}
                  />
                </div>
              </Col>

              <Col span={4}>
                <div style={{ marginBottom: 4 }}>
                  <div
                    style={{ fontSize: 12, fontWeight: 500, marginBottom: 0 }}
                  >
                    Order QTY
                  </div>
                  <Input
                    placeholder="Order QTY"
                    value=""
                    disabled
                    style={{
                      background: "#F8F8F8",
                      width: 155,
                      fontSize: 12,
                      lineHeight: 1.5,
                    }}
                  />
                </div>
              </Col>
            </Row>

            <Row gutter={2} style={{ marginBottom: 6 }}>
              <Col span={24}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 4,
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      marginRight: 8,
                      whiteSpace: "nowrap",
                      minWidth: 70, // keeps label aligned neatly
                    }}
                  >
                    Instructions
                  </div>
                  <Input
                    placeholder="Instructions"
                    disabled
                    style={{
                      background: "#F8F8F8",
                      width: 915,
                      fontSize: 12,
                      lineHeight: 1.5,
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div style={{ fontWeight: "bold", padding: "4px" }}>
            Dispensing Detail
          </div>
          <Row gutter={8} style={{ marginBottom: 6, padding: "4px" }}>
            <Col span={12}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 0, // reduced gap between label & input
                  }}
                >
                  Medicine Name
                </div>
                <Input
                  placeholder="Medicine Name"
                  style={{ fontSize: 12, lineHeight: 1.5 }}
                />
              </div>
            </Col>

            <Col span={6}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 0,
                  }}
                >
                  Form
                </div>
                <Input
                  placeholder="Form"
                  style={{ fontSize: 12, lineHeight: 1.5 }}
                />
              </div>
            </Col>

            <Col span={6}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 0,
                  }}
                >
                  Pack Size
                </div>
                <Input
                  placeholder="Pack Size"
                  style={{ fontSize: 12, lineHeight: 1.5, width: 233 }}
                />
              </div>
            </Col>
          </Row>

          <Row gutter={5} style={{ marginBottom: 6, padding: "4px" }}>
            <Col span={5}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 0,
                  }}
                >
                  Dose
                </div>
                <Input
                  placeholder="Dose"
                  style={{ fontSize: 12, lineHeight: 1.5 }}
                />
              </div>
            </Col>
            <Col span={3}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 0,
                  }}
                >
                  Unit
                </div>
                <Select
                  placeholder="Select Unit"
                  style={{ width: "100%", fontSize: 12, lineHeight: 1.5 }}
                >
                  <Select.Option
                    value="mg"
                    style={{ width: "100%", fontSize: 12, lineHeight: 1.5 }}
                  >
                    mg
                  </Select.Option>
                  <Select.Option value="ml">ml</Select.Option>
                  <Select.Option value="g">g</Select.Option>
                  <Select.Option value="tablet">Tablet</Select.Option>
                  <Select.Option value="capsule">Capsule</Select.Option>
                </Select>
              </div>
            </Col>
            <Col span={4}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 1,
                  }}
                >
                  Batch
                </div>
                <Input
                  placeholder="Batch"
                  style={{ fontSize: 12, lineHeight: 1.5 }}
                />
              </div>
            </Col>

            <Col span={4}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 1,
                  }}
                >
                  Expire Date
                </div>
                <Input
                  placeholder="Expire Date"
                  style={{ fontSize: 12, lineHeight: 1.5 }}
                />
              </div>
            </Col>

            <Col span={4}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 1,
                    lineHeight: 1.5,
                  }}
                >
                  QOH
                </div>
                <Input
                  placeholder="QOH"
                  disabled
                  style={{ background: "#F8F8F8", lineHeight: 1.5 }}
                />
              </div>
            </Col>

            <Col span={4}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 1,
                    lineHeight: 1.5,
                  }}
                >
                  Dispensing Day
                </div>
                <Input
                  placeholder="Dispensing Day"
                  style={{ lineHeight: 1.5, width: 150 }}
                />
              </div>
            </Col>
          </Row>

          <Row gutter={8} style={{ marginBottom: 6, padding: "4px" }}>
            <Col span={4}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    // marginBottom: 1, // reduced gap
                    lineHeight: 1.5,
                  }}
                >
                  Sugg. Qty
                </div>
                <Input
                  placeholder="Sugg. Qty"
                  disabled
                  style={{ background: "#F8F8F8", lineHeight: 1.5 }}
                />
              </div>
            </Col>

            <Col span={4}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    // marginBottom: 1, // reduced gap
                    lineHeight: 1.5,
                  }}
                >
                  Issued Qty
                </div>
                <Input
                  placeholder="Issued Qty"
                  disabled
                  style={{ background: "#F8F8F8", lineHeight: 1.5 }}
                />
              </div>
            </Col>
            <Col span={16}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    // marginBottom: 1, // tighter gap
                    lineHeight: 1.5,
                  }}
                >
                  Remarks
                </div>
                <Input
                  placeholder="Remarks"
                  style={{ lineHeight: 1.5, width: 655 }}
                />
              </div>
            </Col>
          </Row>

          <Row gutter={8} style={{ marginBottom: 6, padding: "4px" }}>
            {/* Discount % */}
            <Col span={4}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 1, // reduced gap
                  }}
                >
                  Discount %
                </div>
                <Input
                  placeholder="Discount %"
                  style={{ background: "#F8F8F8", lineHeight: 1.5 }}
                />
              </div>
            </Col>

            {/* Dis. Amt */}
            <Col span={4}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 1, // reduced gap
                    lineHeight: 1.5,
                  }}
                >
                  Dis. Amt
                </div>
                <Input placeholder="Dis. Amt" style={{ lineHeight: 1.5 }} />
              </div>
            </Col>

            {/* Wrapper for 4 columns with background */}
            <Col span={16}>
              <div
                style={{
                  backgroundColor: "#F3F3F3",
                  padding: "8px",
                  borderRadius: 4,
                  display: "flex",
                  gap: "4px", // reduced gap
                }}
              >
                {/* Avg Cost */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      marginBottom: 1,
                      lineHeight: 1.5,
                    }}
                  >
                    Avg Cost
                  </div>
                  <Input placeholder="Avg Cost" style={{ lineHeight: 1.5 }} />
                </div>

                {/* Total Cost */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      marginBottom: 1,
                      lineHeight: 1.5,
                    }}
                  >
                    Total Cost
                  </div>
                  <Input placeholder="Total Cost" style={{ lineHeight: 1.5 }} />
                </div>

                {/* Current Price */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      marginBottom: 1,
                      lineHeight: 1.5,
                    }}
                  >
                    Current Price
                  </div>
                  <Input
                    placeholder="Current Price"
                    style={{ lineHeight: 1.5 }}
                  />
                </div>

                {/* Total Price */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      marginBottom: 1,
                      lineHeight: 1.5,
                    }}
                  >
                    Total Price
                  </div>
                  <Input
                    placeholder="Total Price"
                    style={{ lineHeight: 1.5 }}
                  />
                </div>
              </div>
            </Col>
          </Row>

          <div
            style={{
              fontWeight: "bold",
              margin: "10px 0 5px",
              padding: "4px",
              color: "red",
            }}
          >
            Only for Narcotics
          </div>

          <Row
            justify="space-between"
            align="middle"
            style={{ marginTop: 10, padding: "4px" }}
          >
            {/* Left side inputs */}
            <Col>
              <Row gutter={12}>
                {/* Prescribed Quantity */}
                <Col>
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        marginBottom: 4,
                        lineHeight: 1.5,
                      }}
                    >
                      Prescribed Quantity
                    </div>
                    <Input
                      placeholder="Prescribed Quantity"
                      style={{ width: 180, lineHeight: 1.5 }}
                    />
                  </div>
                </Col>

                {/* Per Day Dose */}
                <Col>
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        marginBottom: 4,
                        lineHeight: 1.5,
                      }}
                    >
                      Per Day Dose
                    </div>
                    <Input
                      placeholder="Per Day Dose"
                      style={{ width: 180, lineHeight: 1.5 }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>

            {/* Right side buttons */}
            <Col>
              <div style={{ textAlign: "right", marginTop: 20 }}>
                <Button
                  type="primary"
                  style={{ marginRight: 8, backgroundColor: "#008E57" }}
                >
                  Add
                </Button>
                <Button onClick={() => setSkipOpen(true)}>Skip</Button>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Right Section */}
        {/* <Col span={7} style={{ marginTop: 10 }}> */}
        {/* <Table
            columns={allergyColumns}
            dataSource={allergyData}
            size="small"
            pagination={false}
          /> */}
        {/* 
          <div style={{ fontWeight: "bold", margin: "20px 0 5px 0" }}>
            Lab Result
          </div> */}
        {/* <Table
            columns={labColumns}
            dataSource={labData}
            size="small"
            pagination={false}
            style={{ marginTop: 0 }}
            bordered
          /> */}
        {/* </Col> */}
        <div
          onClick={toggleDrawer}
          style={{
            position: "absolute",
            top: "40%",
            right: 0,
            width: "18px",
            height: "72px",
            background: "#2971A8",
            color: "#fff",
            fontSize: 12,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderRadius: "6px 0 0 6px",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            zIndex: 1051, // above modal content
          }}
        >
          {drawerOpen ? "<" : ">"}
        </div>

        {/* Drawer (overlapping, not consuming cols) */}
        <Drawer
          placement="right"
          closable={false} // disable default close
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          getContainer={false}
          width={500}
          style={{ position: "absolute" }}
          title={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* <span>Patient Data</span> */}
              <CloseOutlined
                onClick={() => setDrawerOpen(false)}
                style={{
                  cursor: "pointer",
                  fontSize: 18,
                  marginLeft: "auto", // ✅ pushes it to the right
                }}
              />
            </div>
          }
        >
          <div style={{ fontWeight: "bold", marginBottom: 0, marginTop: -18 }}>
            Allergies
          </div>
          <Table
            columns={allergyColumns}
            dataSource={allergyData}
            size="small"
            pagination={false}
            bordered
          />

          <div style={{ fontWeight: "bold", margin: "6px 0 2px" }}>
            Lab Results
          </div>
          <Table
            columns={labColumns}
            dataSource={labData}
            size="small"
            pagination={false}
            bordered
          />
        </Drawer>
      </Row>
      <SkipReasonPopup open={skipOpen} onClose={() => setSkipOpen(false)} />
    </Modal>
  );
};

export default PrescriptionModal;
