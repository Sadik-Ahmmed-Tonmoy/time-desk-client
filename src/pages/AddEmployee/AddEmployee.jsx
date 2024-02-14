import React from "react";
import Button from "../../components/ui/Button";
import InputWithTitle from "../../components/InputWithTitle/InputWithTitle";
import DropDownWithTitle from "../../components/DropDownWithTitle/DropDownWithTitle";

const AddEmployee = () => {
    return (
        <div style={{ boxShadow: "4px 4px 22px 0px rgba(0, 0, 0, 0.05)" }} className="bg-[#F8F9FF]">
            <h5 className="text-[#474848] font-Poppins text-base font-semibold leading-normal text-center py-6">Add Employee</h5>
            <div className="pb-6 flex items-center gap-4">
                <Button variant="secondary" className="rounded-2xl p-[10px]">
                    General Info.
                </Button>
                <Button variant="secondary" className="rounded-2xl p-[10px]">
                    General Info.
                </Button>
                <Button variant="secondary" className="rounded-2xl p-[10px]">
                    General Info.
                </Button>
            </div>
            <div>
                <h5 className="text-[#474848] font-Poppins text-base font-medium leading-normal pb-4 border-bottom-secondary-color mb-6">
                    General Information
                </h5>
                <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                    <InputWithTitle title={"First Name"} placeholder={"Type Name..."} inputHeight={"h-10"} />
                    <InputWithTitle title={"Last Name"} placeholder={"Type Name..."} inputHeight={"h-10"} />
                    <InputWithTitle title={"Email Address"} placeholder={"Type Email..."} inputHeight={"h-10"} />
                    <InputWithTitle title={"Phone Number"} placeholder={"Type Phone Number..."} inputHeight={"h-10"} />
                    <DropDownWithTitle title={"Select Gender"} dropHeight={"h-10"} placeholder="Select Gender" />
                    <InputWithTitle title={"Date Of birth"} placeholder={"DD/MM/YY"} inputHeight={"h-10"}  type="date"/>
                    

                    <InputWithTitle title={"NID Number"} placeholder={"Type NID Number..."} inputHeight={"h-10"} />
                    <InputWithTitle title={"Employee ID"} placeholder={"Type Or Auto Generate..."} inputHeight={"h-10"} />
                    <InputWithTitle title={"Joining Date"} placeholder={"DD/MM/YY"} inputHeight={"h-10"} type="date"/>


                    <DropDownWithTitle title={"Employment Type"} dropHeight={"h-10"} placeholder="Select Department Name..." />
                    <DropDownWithTitle title={"Department"} dropHeight={"h-10"} placeholder="Select Department" />
                    <DropDownWithTitle title={"Designation"} dropHeight={"h-10"} placeholder="Select Designation" />
                    <DropDownWithTitle title={"Branch Name"} dropHeight={"h-10"} placeholder="Select Branch" />
                    <DropDownWithTitle title={"Salary Grade"} dropHeight={"h-10"} placeholder="Select Salary Grade" />
                    <InputWithTitle title={"Salary Amount"} placeholder={"Type Salary..."} inputHeight={"h-10"} />
                    <DropDownWithTitle title={"Office Shift"} dropHeight={"h-10"} placeholder="Select Shift" />
                    <DropDownWithTitle title={"Leave Category"} dropHeight={"h-10"} placeholder="Select Leave Category" />
                </div>
            </div>
        </div>
    );
};

export default AddEmployee;
