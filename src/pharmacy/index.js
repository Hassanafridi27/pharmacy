import React from "react";
import { Radio, Tabs, Input, Select, DatePicker, Checkbox, Row, Col } from "antd";

const { TabPane } = Tabs;
const { Option } = Select;

const PharmacyDispensing = () => {
  return (
    <div style={{ padding: "16px", background: "#fafafa", fontSize: "14px" }}>
      {/* Dispensing Type */}
      <Row align="middle" gutter={16}>
        <Col>
          <strong style={{ fontSize: "14px" }}>Dispensing Type</strong>
        </Col>
        <Col>
          <Radio.Group defaultValue="prescription" style={{ fontSize: "14px" }}>
            <Radio value="prescription">Prescription</Radio>
            <Radio value="walking">Walking</Radio>
          </Radio.Group>
        </Col>
      </Row>

      {/* Tabs */}
      <Tabs defaultActiveKey="1" style={{ marginTop: "12px", fontSize: "14px" }}>
        <TabPane tab="General Sale" key="1">
          <Row gutter={16} align="middle" style={{ marginBottom: "12px" }}>
            <Col>
              <strong style={{ fontSize: "14px" }}>Sale Type</strong>
            </Col>
            <Col>
              <Radio.Group defaultValue="cash" style={{ fontSize: "14px" }}>
                <Radio value="cash">Cash</Radio>
                <Radio value="panel">Panel</Radio>
              </Radio.Group>
            </Col>
          </Row>

          {/* All fields in one row */}
          <Row gutter={12} align="middle" wrap={false} style={{ fontSize: "14px" }}>
            <Col>
              <Checkbox style={{ fontSize: "14px" }}>Scan Prescription</Checkbox>
            </Col>

            <Col>
              <span style={{ marginRight: 6, fontSize: "14px" }}>MR #</span>
              <Input style={{ width: 100, fontSize: "14px" }} />
            </Col>

            <Col>
              <span style={{ marginRight: 6, fontSize: "14px" }}>Specialty</span>
              <Select defaultValue="Cardiac Electrophysiologist" style={{ width: 180, fontSize: "14px" }}>
                <Option value="Cardiac Electrophysiologist">Cardiac Electrophysiologist</Option>
                <Option value="Cardiologist">Cardiologist</Option>
                <Option value="Neurologist">Neurologist</Option>
              </Select>
            </Col>

            <Col>
              <span style={{ marginRight: 6, fontSize: "14px" }}>Prescribing - Consultant</span>
              <Input defaultValue="Dr Asad Ullah" style={{ width: 180, fontSize: "14px" }} />
            </Col>

            <Col>
              <span style={{ marginRight: 6, fontSize: "14px" }}>Visit Date</span>
              <DatePicker
                showTime
                format="DD/MM/YYYY; hh:mm a"
                style={{ width: 190, fontSize: "14px" }}
              />
            </Col>
          </Row>
        </TabPane>

        <TabPane tab="Extempore Sale" key="2" style={{ fontSize: "14px" }}>
          Extempore Sale Content
        </TabPane>
        <TabPane tab="Oncology Sale" key="3" style={{ fontSize: "14px" }}>
          Oncology Sale Content
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PharmacyDispensing;
