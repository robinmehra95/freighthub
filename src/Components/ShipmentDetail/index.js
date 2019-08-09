import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import "./ShipmentDetail.scss";

export default class ShipmentDetail extends React.Component{
    render() {
        const {data, editName, handleOnChange, shipmentName} = this.props;
        return (
            <div className="shipment-detail-wrapper">
                <Row>
                    <Col xs={4}>
                        ID
                    </Col>
                    <Col>
                        {data && data.id}
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        Name
                    </Col>
                    <Col>
                        <Form onSubmit={(e) => editName(e, data)}>
                            <Form.Group controlId="shipmentName">
                                <Form.Control onChange={handleOnChange} value={shipmentName}
                                              type="text" placeholder="Enter ID"
                                />
                                <Form.Text className="text-muted">
                                    Hit Enter to Edit
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        Origin
                    </Col>
                    <Col>
                        {data && data.origin}
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        Destination
                    </Col>
                    <Col>
                        {data && data.destination}
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        Mode
                    </Col>
                    <Col>
                        {data && data.mode}
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        Destination
                    </Col>
                    <Col>
                        {data && data.destination}
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        Cargo
                    </Col>
                    <Col>
                        {data && data.cargo && data.cargo.length && data.cargo.map((item, key) => {
                            return <div key={key}><span>Type: {item.type}</span> <span>Description: {item.description}</span> <span>Volume: {item.volume}</span></div>
                        })}
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        Status
                    </Col>
                    <Col>
                        {data && data.status}
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        Services
                    </Col>
                    <Col>
                        {data && data.services && data.services.length && data.services.map((service, key) => {
                            return <div key={key}><span>Type: {service.type}</span>
                                <span>  Value: {(service.value ? service.value : "NA")}</span></div>
                        })}
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        Total
                    </Col>
                    <Col>
                        {data && data.total}
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        Type
                    </Col>
                    <Col>
                        {data && data.type}
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        User ID
                    </Col>
                    <Col>
                        {data && data.userId}
                    </Col>
                </Row>
            </div>
        )
    }
}