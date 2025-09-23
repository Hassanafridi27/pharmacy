import React, { useState } from "react";
import { Modal, Input, Row, Col, Table, Button, Select } from "antd";
import SkipReasonPopup from "./skipPopup";
import '../App.css';

const PrescriptionModal = ({ open, onCancel }) => {
   const [skipOpen, setSkipOpen] = useState(false);
const allergyColumns = [
  {
    title: <span style={{ fontSize: 11, fontWeight: '600', color: '#fff' }}>Allergy Type</span>,
    dataIndex: 'type',
    key: 'type',
    width: 90,  // Reduced width here
    render: (text) => <span style={{ fontSize: 11 }}>{text}</span>,
    onHeaderCell: () => ({
      style: {
        backgroundColor: '#2971A8',
      },
    }),
        // width: '30%',
  },
  {
    title: <span style={{ fontSize: 11, fontWeight: '600', color: '#fff' }}>Allergy Description</span>,
    dataIndex: 'description',
    key: 'description',
    width: 200,
    render: (text) => <span style={{ fontSize: 11}}>{text}</span>,
    onHeaderCell: () => ({
      style: {
        backgroundColor: '#2971A8',
      },
    }),
    width: '60%',
    height: '30%'
  },
  {
    title: <span style={{ fontSize: 11, fontWeight: '600', color: '#fff' }}>Severity Level</span>,
    dataIndex: 'severity',
    key: 'severity',
    width: 100,
    render: (text) => <span style={{ fontSize: 11 }}>{text}</span>,
    onHeaderCell: () => ({
      style: {
        backgroundColor: '#2971A8',
      },
    }),
  },
];

  const allergyData = [
    { key: "1", type: "GENERIC", description: "FOOD-SUPPLEMENT", severity: "Moderate" },
    { key: "2", type: "SUB CLASS", description: "ANTIBIOTICS, AMINOGLYCOSIDES", severity: "Moderate" },
    { key: "3", type: "GENERIC", description: "ALTEPLASE/TISSUE-PLASMINOGEN-ACTIVATOR", severity: "Mild" },
        { key: "1", type: "GENERIC", description: "FOOD-SUPPLEMENT", severity: "Moderate" },
    { key: "2", type: "SUB CLASS", description: "ANTIBIOTICS, AMINOGLYCOSIDES", severity: "Moderate" },
    { key: "3", type: "GENERIC", description: "ALTEPLASE/TISSUE-PLASMINOGEN-ACTIVATOR", severity: "Mild" },
        { key: "1", type: "GENERIC", description: "FOOD-SUPPLEMENT", severity: "Moderate" },
    { key: "2", type: "SUB CLASS", description: "ANTIBIOTICS, AMINOGLYCOSIDES", severity: "Moderate" },
    { key: "3", type: "GENERIC", description: "ALTEPLASE/TISSUE-PLASMINOGEN-ACTIVATOR", severity: "Mild" },
  ];

  const labColumns = [
    // { title: "Date", dataIndex: "date", key: "date" },
    // { title: "Test Name", dataIndex: "testName", key: "testName" },
    // { title: "Result", dataIndex: "result", key: "result" },
    // { title: "Ref - Range", dataIndex: "range", key: "range" },
      {
    title: <span style={{ fontSize: 11, fontWeight: '600', color: '#fff' }}>Date</span>,
    dataIndex: 'date',
    key: 'date',
    width: 70,  // Reduced width here
    render: (text) => <span style={{ fontSize: 11 }}>{text}</span>,
    onHeaderCell: () => ({
      style: {
        backgroundColor: '#2971A8',
      },
    }),
        // width: '30%',
  },
  {
    title: <span style={{ fontSize: 11, fontWeight: '600', color: '#fff' }}>Test Name</span>,
    dataIndex: 'testName',
    key: 'testName',
    width: 150,
    render: (text) => <span style={{ fontSize: 11 }}>{text}</span>,
    onHeaderCell: () => ({
      style: {
        backgroundColor: '#2971A8',
      },
    }),
  },
  {
    title: <span style={{ fontSize: 11, fontWeight: '600', color: '#fff' }}>Result</span>,
    dataIndex: 'result',
    key: 'result',
    width: 70,
    render: (text) => <span style={{ fontSize: 11 }}>{text}</span>,
    onHeaderCell: () => ({
      style: {
        backgroundColor: '#2971A8',
      },
    }),
  },
    {
    title: <span style={{ fontSize: 11, fontWeight: '600', color: '#fff' }}>Ref - Range</span>,
    dataIndex: 'range',
    key: 'range',
    width: 70,
    render: (text) => <span style={{ fontSize: 11 }}>{text}</span>,
    onHeaderCell: () => ({
      style: {
        backgroundColor: '#2971A8',
      },
    }),
  },
  ];

  const labData = [
    { key: "1", date: "11/04/2024", testName: "PARACETAMOL+TRAMADOL", result: "55.8", range: "45.0 - 68.0" },
    { key: "2", date: "11/04/2024", testName: "PANADOL-CF", result: "66.2", range: "66.0 - 100.0" },
    { key: "3", date: "11/04/2024", testName: "BECLOMETHASONE+SALBUTAMOL", result: "77.9", range: "22.6 - 101.5" },
        { key: "1", date: "11/04/2024", testName: "PARACETAMOL+TRAMADOL", result: "55.8", range: "45.0 - 68.0" },
    { key: "2", date: "11/04/2024", testName: "PANADOL-CF", result: "66.2", range: "66.0 - 100.0" },
    { key: "3", date: "11/04/2024", testName: "BECLOMETHASONE+SALBUTAMOL", result: "77.9", range: "22.6 - 101.5" },
        { key: "1", date: "11/04/2024", testName: "PARACETAMOL+TRAMADOL", result: "55.8", range: "45.0 - 68.0" },
    { key: "2", date: "11/04/2024", testName: "PANADOL-CF", result: "66.2", range: "66.0 - 100.0" },
    { key: "3", date: "11/04/2024", testName: "BECLOMETHASONE+SALBUTAMOL", result: "77.9", range: "22.6 - 101.5" },
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
      width="1580px"
      footer={null}
      centered
      title="Muhammad Hammad Arif (001231255)"
      rootClassName="custom-administer"
    >
      <Row gutter={4} style={{ padding: "4px 10px", marginTop: -10 }}>
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
            <span style={{ color: "#020202ff", marginLeft: 150 }}>
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
        <Col span={12}>
          <div style={{ backgroundColor: "#F1F7FF", height: 200 }}>
            <div style={{ fontWeight: 700, marginBottom: 5, fontSize: 16 }}>
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
                      marginBottom: 0,
                    }}
                  >
                    Strength/Unit
                  </div>
                  <Input
                    placeholder="Strength/Unit"
                    // addonAfter={<div style={{}}>Unit</div>}
                    style={{
                      width: 180,
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
                    style={{ fontSize: 12, fontWeight: 500, marginBottom: 0 }}
                  >
                    Dose
                  </div>
                  <Input
                    placeholder="Dose"
                    // addonAfter={<div>Tab/s</div>}
                    value=""
                    disabled
                    style={{
                      background: "white",
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
                      fontSize: 12,
                      lineHeight: 1.5,
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div style={{ fontWeight: "bold", margin: "10px 0 5px" }}>
            Dispensing Detail
          </div>
          <Row gutter={8} style={{ marginBottom: 6 }}>
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
                  style={{ fontSize: 12, lineHeight: 1.5 }}
                />
              </div>
            </Col>
          </Row>

          <Row gutter={5} style={{ marginBottom: 6 }}>
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
                  <Select.Option value="mg">mg</Select.Option>
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
                  }}
                >
                  QOH
                </div>
                <Input
                  placeholder="QOH"
                  disabled
                  style={{ background: "#F8F8F8" }}
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
                  Dispensing Day
                </div>
                <Input placeholder="Dispensing Day" />
              </div>
            </Col>
          </Row>

          <Row gutter={8} style={{ marginBottom: 6 }}>
            <Col span={4}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 1, // reduced gap
                  }}
                >
                  Sugg. Qty
                </div>
                <Input
                  placeholder="Sugg. Qty"
                  disabled
                  style={{ background: "#F8F8F8" }}
                />
              </div>
            </Col>

            <Col span={4}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 1, // reduced gap
                  }}
                >
                  Issued Qty
                </div>
                <Input
                  placeholder="Issued Qty"
                  disabled
                  style={{ background: "#F8F8F8" }}
                />
              </div>
            </Col>
            <Col span={16}>
              <div style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 1, // tighter gap
                  }}
                >
                  Remarks
                </div>
                <Input placeholder="Remarks" />
              </div>
            </Col>
          </Row>

          <Row gutter={8} style={{ marginBottom: 6 }}>
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
                <Input placeholder="Discount %" />
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
                  }}
                >
                  Dis. Amt
                </div>
                <Input placeholder="Dis. Amt" />
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
                    }}
                  >
                    Avg Cost
                  </div>
                  <Input placeholder="Avg Cost" />
                </div>

                {/* Total Cost */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      marginBottom: 1,
                    }}
                  >
                    Total Cost
                  </div>
                  <Input placeholder="Total Cost" />
                </div>

                {/* Current Price */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      marginBottom: 1,
                    }}
                  >
                    Current Price
                  </div>
                  <Input placeholder="Current Price" />
                </div>

                {/* Total Price */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      marginBottom: 1,
                    }}
                  >
                    Total Price
                  </div>
                  <Input placeholder="Total Price" />
                </div>
              </div>
            </Col>
          </Row>

          <div style={{ fontWeight: "bold", margin: "10px 0 5px", color:'red' }}>
            Only for Narcotics
          </div>

          <Row justify="space-between" align="middle" style={{ marginTop: 12 }}>
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
                      }}
                    >
                      Prescribed Quantity
                    </div>
                    <Input
                      placeholder="Prescribed Quantity"
                      style={{ width: 180 }}
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
                      }}
                    >
                      Per Day Dose
                    </div>
                    <Input placeholder="Per Day Dose" style={{ width: 180 }} />
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
        <Col span={7} style={{ marginTop: 10 }}>
          <Table
            columns={allergyColumns}
            dataSource={allergyData}
            size="small"
            pagination={false}
            bordered
            // className="custom-administer"
          />

          <div style={{ fontWeight: "bold", margin: "20px 0 5px 0" }}>
            Lab Result
          </div>
          <Table
            columns={labColumns}
            dataSource={labData}
            size="small"
            pagination={false}
            style={{ marginTop: 0 }}
            bordered
          />
        </Col>
      </Row>
      <SkipReasonPopup open={skipOpen} onClose={() => setSkipOpen(false)} />
    </Modal>
  );
};

export default PrescriptionModal;
