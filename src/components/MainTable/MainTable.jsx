import React from "react";

const MainTable = ({ headerColumn, bodyData }) => {
    return (
        <div>
            <table className="table w-full border border-collapse border-gray-800">
                <thead>
                    <tr>
                        {headerColumn &&
                            headerColumn?.map((header, index) => (
                                <th key={index} className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                    {header}
                                </th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {/* {props.isLoading ? <TableProgress /> : <></>} */}
                    {bodyData &&
                        bodyData?.map((rowData, rowIndex) => (
                            <tr key={rowIndex}>
                                {rowData?.map((data, cellIndex) => (
                                    <td
                                        key={cellIndex}
                                        className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border"
                                    >
                                        {data}
                                    </td>
                                ))}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default MainTable;
