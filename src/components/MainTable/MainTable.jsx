/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { Switch } from "antd";
import ToggleButton from "../ToggleButton/ToggleButton";
import cn from "../../utils/cn";

const MainTable = ({ className, headerColumn, bodyData, isActive, isEdit, isEye, isDelete }) => {
    const [isChecked, setIsChecked] = useState(false);
    console.log(`${isChecked}`);
    const onChange = (checked) => {
        setIsChecked(checked);
    };
    return (
        <table className={cn("table w-full border border-collapse border-gray-800 bg-white", className)}>
            <thead className="bg-[#0F8DBA]">
                <tr>
                    {headerColumn &&
                        headerColumn?.map((header, index) => (
                            <th
                                key={index}
                                className="py-[10px] text-center text-white font-Poppins text-sm font-medium leading-normal tracking-wider border"
                            >
                                {header}
                            </th>
                        ))}

                    {isActive || isEdit || isEye || isDelete ? (
                        <th className="py-[10px] text-center text-white font-Poppins text-sm font-medium leading-normal tracking-wider border">
                            Active
                        </th>
                    ) : null}
                </tr>
            </thead>
            <tbody>
                {bodyData &&
                    bodyData?.map((rowData, rowIndex) => (
                        <tr key={rowIndex}>
                            {rowData?.map((cellData, cellIndex) => (
                                <td key={cellIndex} className="text-center text-[#474848] font-Poppins text-xs font-normal leading-normal border">
                                    <div className="flex items-center gap-3 w-min mx-auto">
                                        {cellData.image && <img className="-ms-10 my-[2px] h-8 rounded-full" src={cellData.image} />}
                                        {cellData.text && <p className="text-nowrap">{cellData.text}</p>}
                                    </div>
                                </td>
                            ))}
                            {isActive || isEdit || isEye || isDelete ? (
                                <td className="text-center border w-52">
                                    <div className=" text-[#474848] flex items-center justify-center gap-3 w-min mx-auto">
                                        {isActive && (
                                            <button>
                                                <ToggleButton />
                                            </button>
                                        )}
                                        {isEdit && (
                                            <button>
                                                <TbEdit size={20} />
                                            </button>
                                        )}
                                        {isEye && (
                                            <button>
                                                <IoEyeOutline size={20} />
                                            </button>
                                        )}
                                        {isDelete && (
                                            <button>
                                                <RiDeleteBin6Line size={20} className="text-[#EA5A47]" />
                                            </button>
                                        )}
                                    </div>
                                </td>
                            ) : null}
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default MainTable;
