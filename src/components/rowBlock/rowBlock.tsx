import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Col, Row } from "react-bootstrap";

const RowBlock = ({ left, right }: { left: any; right: any }) => {
  return (
    <Row>
      <Col md="6">{left}</Col>
      <Col md="6">{right}</Col>
    </Row>
  );
};

export default RowBlock;
