import { Fragment, useEffect, useState } from "react";
import { displayData } from "../Utils/Utils";

const Table = ({ tableCols = ['Class 1', 'Class 2', 'Class 3'], tableRows = ['Mean', 'Median', 'Mode'], calCulatedBy = "", isGamma = false }) => {

    const [data, setData] = useState({});

    useEffect(() => {
        setData(displayData(isGamma));
    }, [isGamma]);

    const label = Object?.keys(data);

    return (
        <table>
            <thead>
                <tr>
                    <th>Measure</th>
                    {(tableCols?.length) ? tableCols?.map((col) => {
                        return (
                            <Fragment key={calCulatedBy + col}>
                                <th>{col}</th>
                            </Fragment>
                        )
                    }) : null}
                </tr>
            </thead>
            <tbody>
                {(tableRows?.length) ? tableRows?.map(row => (
                    <tr key={row}>
                        <td>{calCulatedBy + " " + row}</td>
                        {(label?.length) ? label.map(index => (
                            <td key={index}>{data[index][row?.toLowerCase()]}</td>
                        )) : null}
                    </tr>
                )) : null}
            </tbody>
        </table>
    );

}
export default Table;