import React, { useState } from "react";
import { Modal, Checkbox, Row, Col, Button } from "antd";

const SkipReasonPopup = ({ open, onClose }) => {
  const [checkedValues, setCheckedValues] = useState([]);

  const options = [
    { label: "Not Available", value: "not_available" },
    { label: "Not Needed", value: "not_needed" },
    { label: "Not allowed (Panel)", value: "not_allowed" },
    { label: "Non Formulary", value: "non_formulary" },
    { label: "Alternate Dispensing", value: "alternate_dispensing" },
    { label: "Alternate Offered pt. Refused", value: "alternate_refused" },
  ];

  const handleSave = () => {
    console.log("Selected reasons:", checkedValues);
    onClose(); // close after save
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={500}
      title="Add Not Dispensing Reason"
      rootClassName="custom-administer"
    >
      {/* Checkboxes */}
      <Checkbox.Group
        style={{ width: "100%", padding: "4px 10px" }}
        value={checkedValues}
        onChange={(vals) => setCheckedValues(vals)}
      >
        <Row gutter={[16, 8]}>
          {options.map((opt) => (
            <Col span={12} key={opt.value}>
              <Checkbox value={opt.value}>{opt.label}</Checkbox>
            </Col>
          ))}
        </Row>
      </Checkbox.Group>

      {/* Footer */}
      {/* Footer */}
      <div
        style={{
          marginTop: 12,
          padding: "10px 0", // proper vertical padding
          textAlign: "center",
          backgroundColor: "#F1F7FF", // footer background
          borderTop: "1px solid #ddd", // subtle top border
          position: "relative",
          left: 0,
          right: 0,
        }}
      >
        <Button
          style={{
            marginRight: 12,
            backgroundColor: "#008E57",
            color: "white",
            border: "none",
            width: 60,
            height: 28,
            borderRadius: 2,
          }}
          onClick={handleSave}
        >
          Save
        </Button>
        <Button
          style={{
            backgroundColor: "#E2E2E2",
            color: "#000",
            border: "none",
            width: 60,
            height: 28,
            borderRadius: 2,
          }}
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default SkipReasonPopup;
