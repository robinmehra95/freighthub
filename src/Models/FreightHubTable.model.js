import React from "react";

export const shipmentConfig = [
    {
        Header: 'ID',
        accessor: 'id',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
    }, {
        Header: 'Origin',
        accessor: 'origin' // String-based value accessors!
    }, {
        Header: 'Destination',
        accessor: 'destination' // String-based value accessors!
    }, {
        Header: 'Total',
        accessor: 'total' // String-based value accessors!
    },
];