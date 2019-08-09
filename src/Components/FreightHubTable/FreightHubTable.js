import React from "react";
import ReactTable from 'react-table'
import 'react-table/react-table.css';
import "./table.scss";

class FreightHubTable extends React.Component {
    render () {
        const {data, columns, handleClick} = this.props;

        return (
            <React.Fragment>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={20}
                    className="-striped -highlight freight-hub-table"
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                if (handleOriginal) {
                                    handleClick(rowInfo.original)
                                }
                            }
                        }
                    }}
                />
            </React.Fragment>
        )
    }
}

export default FreightHubTable;