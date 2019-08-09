import {SHIPMENT_ACTIONS} from "../constants";

const initState = {
    shipments: null,
    loader: false,
    editNameSuccess: false
};

export default function common(state = initState, action) {
    switch (action.type) {
        case SHIPMENT_ACTIONS.FETCH_SHIPMENTS_START:
            return {...state, loader: true};

        case SHIPMENT_ACTIONS.FETCH_SHIPMENTS_SUCCESS: {
            return {
                ...state,
                shipments: action.payload,
                loader: false
            };
        }
        case SHIPMENT_ACTIONS.FETCH_SHIPMENTS_FAILURE:
            return {...state, loader: false};

        case SHIPMENT_ACTIONS.EDIT_NAME_START:
            return {...state, loader: true};

        case SHIPMENT_ACTIONS.EDIT_NAME_SUCCESS: {
            return {
                ...state,
                editNameSuccess: true,
                loader: false
            };
        }
        case SHIPMENT_ACTIONS.EDIT_NAME_FAILURE:
            return {...state, loader: false};

        default:
            return state;
    }
}