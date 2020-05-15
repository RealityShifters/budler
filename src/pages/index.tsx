import { Col, Input, Row } from "antd"
import React from "react"
import Layout from "../components/layout"

const { TextArea } = Input

const IndexPage = () => (
  <Layout>
    <Row>
      <Col span={12}>
        <TextArea rows={5} />
      </Col>
      <Col span={12}></Col>
    </Row>
  </Layout>
)

export default IndexPage
