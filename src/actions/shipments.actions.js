import {SHIPMENT_ACTIONS} from "../constants";
import {getShipmentsUrl, editNameUrl} from "../ApiEndpoints";
import {GET, PUT} from "../webApiService";

export const fetchShipments = (data = null) => {
    return function (dispatch) {
        dispatch({
            type: SHIPMENT_ACTIONS.FETCH_SHIPMENTS_START
        });

        return GET(getShipmentsUrl(data))
            .then(misResponse => {
                const payload = misResponse.data;
                dispatch({
                    type: SHIPMENT_ACTIONS.FETCH_SHIPMENTS_SUCCESS,
                    payload
                });
            })
            .catch(() => {
                dispatch({
                    type: SHIPMENT_ACTIONS.FETCH_SHIPMENTS_FAILURE
                });
            });
    };
};

export const editName = (id, data = null) => {
    return function (dispatch) {
        dispatch({
            type: SHIPMENT_ACTIONS.EDIT_NAME_START
        });

        return PUT(editNameUrl(id), data)
            .then(misResponse => {
                const payload = misResponse.data;
                dispatch({
                    type: SHIPMENT_ACTIONS.EDIT_NAME_SUCCESS,
                    payload
                });
            })
            .catch(() => {
                dispatch({
                    type: SHIPMENT_ACTIONS.EDIT_NAME_FAILURE
                });
            });
    };
};