import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchShipments, editName} from "../../actions/shipments.actions";
import "./DetailPage.scss";
import ShipmentDetail from "../../Components/ShipmentDetail";

class DetailPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shipmentID: "",
            shipmentName: ""
        }
    }

    componentDidMount() {
        const {pathname} = this.props.location;
        const id = pathname.split("/")[2];
        this.setState({shipmentID: id}, () => {
            this.fetchDetail();
        })
    }

    fetchDetail = async () => {
        const {shipmentID} = this.state;
        const params = "?id=" + shipmentID;
        await this.props.fetchShipments(params);
        const {shipmentsData} = this.props;
        this.setState({shipmentName: shipmentsData[0].name});
    };

    handleOnChange = e => {
        this.setState({[e.target.id]: e.target.value})
    };

    handleEdit = (e, data) => {
        e.preventDefault();
        const {shipmentID, shipmentName} = this.state;
        const {editName} = this.props;
        data.name = shipmentName
        editName(shipmentID, data);

    };

    render() {
        const {shipmentsData} = this.props;
        const {shipmentName} = this.state;
        const data = shipmentsData && shipmentsData.length && shipmentsData[0];
        return (
            <div>
                <h2>Shipment Details</h2>
                <ShipmentDetail data={data}
                                handleOnChange={this.handleOnChange}
                                editName={this.handleEdit}
                                shipmentName={shipmentName}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        shipmentsData: state.shipmentsReducer.shipments,
        editNameSuccess: state.shipmentsReducer.editNameSuccess
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchShipments,
            editName
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);