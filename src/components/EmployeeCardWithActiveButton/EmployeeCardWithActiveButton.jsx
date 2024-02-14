import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../ui/Button";

const EmployeeCardWithActiveButton = () => {
    return (
        <div style={{ boxShadow: "5px 5px 18px 0px rgba(0, 0, 0, 0.05)" }} className="p-4 rounded w-[275px] bg-white">
            <div className="flex items-center justify-between">
                <p className="text-[#222] font-Poppins text-sm font-semibold leading-normal">Mezbaul Hauqe</p>{" "}
                <div className="flex items-center gap-2">
                    <ToggleButton />{" "}
                    <button>
                        <RiDeleteBin6Line size={20} className="text-[#EA5A47]" />
                    </button>
                </div>
            </div>
            <p className="text-[#3E3E3E] font-Poppins text-xs font-normal leading-normal mb-2">mejba084</p>

            <table className="mb-[18px]" style={{ borderSpacing: "0px" }}>
                <tr className="">
                    <td className="text-[#222] font-Poppins text-xs font-medium leading-normal">Department</td>
                    <td className="text-[#222] px-2">:</td>
                    <td className="text-[#222] font-Poppins text-xs font-normal leading-normal">Marketing</td>
                </tr>
                <tr>
                    <td className="text-[#222] font-Poppins text-xs font-medium leading-normal">Designation</td>
                    <td className="text-[#222] px-2">:</td>
                    <td className="text-[#222] font-Poppins text-xs font-normal leading-normal">Jr. Officer</td>
                </tr>
                <tr>
                    <td className="text-[#222] font-Poppins text-xs font-medium leading-normal">Phone No</td>
                    <td className="text-[#222] px-2">:</td>
                    <td className="text-[#222] font-Poppins text-xs font-normal leading-normal">01798498748</td>
                </tr>
            </table>
            <div className="flex items-center justify-between">
                <Button >View Profile</Button>
                <Button variant="bordered" className="px-8 border-[#818181]">Edit</Button>
            </div>
        </div>
    );
};

export default EmployeeCardWithActiveButton;
