import React, { Fragment } from "react";
import Table from "./Table";

const WineMeasure = () => {

    return (
        <Fragment>
            <Table calCulatedBy={"Flavanoids"} />
            <Table calCulatedBy={"Gamma"} isGamma={true} />
        </Fragment>
    )
}
export default WineMeasure;
