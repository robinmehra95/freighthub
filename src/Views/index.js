import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {Form} from "react-bootstrap";
import {fetchShipments} from "../actions/shipments.actions";
import FreightHubTable from "../Components/FreightHubTable/FreightHubTable";
import {shipmentConfig} from "../Models/FreightHubTable.model";
import "./Home.scss";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchID: "",
        }
    }

    componentDidMount() {
        this.fetchShipmentsData();
    }

    fetchShipmentsData = data => {
        this.props.fetchShipments(data);
    };

    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
    };

    handleClick = (rowInfo) => {
        this.props.history.push(`/detail/${rowInfo.id}`);

    };

    handleSearch = e => {
        e.preventDefault();
        const {searchID} = this.state;
        const params = "?id=" + searchID;
        this.fetchShipmentsData(params);
    };

    render() {
        const {shipmentsData} = this.props;
        const {searchID} =this.state;

        return (
            <div className="main-page-container">
                <Form onSubmit={this.handleSearch}>
                    <Form.Group controlId="searchID">
                        <Form.Control onChange={this.handleChange} value={searchID}
                                      type="text" placeholder="Enter ID"
                        />
                        <Form.Text className="text-muted">
                            Hit Enter to Search ID
                        </Form.Text>
                    </Form.Group>
                </Form>
                <FreightHubTable data={shipmentsData ? shipmentsData : []}
                                 columns={shipmentConfig}
                                 handleClick={this.handleClick}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        shipmentsData: state.shipmentsReducer.shipments
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchShipments
        },
        dispatch
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));