import React from "react";
import { Outlet } from "react-router-dom";
import Checkbox from "../components/Checkbox/Checkbox";
import MainTable from "../components/MainTable/MainTable";
import ToggleButton from "../components/ToggleButton/ToggleButton";
import EmployeeCardWithActiveButton from "../components/EmployeeCardWithActiveButton/EmployeeCardWithActiveButton";
import EmployeeCardWithImage from "../components/EmployeeCardWithImage/EmployeeCardWithImage";
import { FiPlusCircle } from "react-icons/fi";
import Button from "../components/ui/Button";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { Select } from "antd";
import DropDownWithTitle from "../components/DropDownWithTitle/DropDownWithTitle";
import InputWithTitle from "../components/InputWithTitle/InputWithTitle";
import { MdSearch } from "react-icons/md";

const MainLayout = () => {
    const headerColumn = ["Employee Name", "Employee ID", "Department", "Designation", "Phone No"];
    const bodyData = [
        [
            { text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" },
            { text: "HRM084" },
            { text: "Marketing" },
            { text: "Marketing Officer" },
            { text: "018**********" },
        ],
        [
            { text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" },
            { text: "HRM084" },
            { text: "Marketing" },
            { text: "Marketing Officer" },
            { text: "018**********" },
        ],
        [
            { text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" },
            { text: "HRM084" },
            { text: "Marketing" },
            { text: "Marketing Officer" },
            { text: "018**********" },
        ],
        [
            { text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" },
            { text: "HRM084" },
            { text: "Marketing" },
            { text: "Marketing Officer" },
            { text: "018**********" },
        ],
        [
            { text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" },
            { text: "HRM084" },
            { text: "Marketing" },
            { text: "Marketing Officer" },
            { text: "018**********" },
        ],
        [
            { text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" },
            { text: "HRM084" },
            { text: "Marketing" },
            { text: "Marketing Officer" },
            { text: "018**********" },
        ],
        [
            { text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" },
            { text: "HRM084" },
            { text: "Marketing" },
            { text: "Marketing Officer" },
            { text: "018**********" },
        ],
        [
            { text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" },
            { text: "HRM084" },
            { text: "Marketing" },
            { text: "Marketing Officer" },
            { text: "018**********" },
        ],
        [
            { text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" },
            { text: "HRM084" },
            { text: "Marketing" },
            { text: "Marketing Officer" },
            { text: "018**********" },
        ],
        [
            { text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" },
            { text: "HRM084" },
            { text: "Marketing" },
            { text: "Marketing Officer" },
            { text: "018**********" },
        ],
    ];

    return (
        <div className="bg-[#EFF2F9]">
            <div className="flex">
                Navbar
                {/* Text Input */}
                <input type="text" className="w-full " />
                {/* Radio Button */}
                <label>
                    <input type="radio" name="gender" value="male" />
                    Male
                </label>
                {/* Checkbox Button */}
                <Checkbox title={"SSSsasdasd"} />
                {/* Outlet for nested routes */}
                <Outlet />
            </div>
            <MainTable headerColumn={headerColumn} bodyData={bodyData} isActive={true} isDelete={true} isEdit={true} isEye={true} />
            <Button variant="bordered" className="text-primary-color">
                <div className="flex items-center gap-3">
                    <FiPlusCircle size={20} /> <p>Invite Employee</p>
                </div>
            </Button>
            <Button>
                <div className="flex items-center gap-3">
                    <FiPlusCircle size={20} /> <p>Invite Employee</p>
                </div>
            </Button>
            <div style={{ boxShadow: "4px 4px 22px 0px rgba(0, 0, 0, 0.05)" }} className="rounded px-[14px] py-[6px] bg-white w-min">
                <Breadcrumbs first={"Employee"} second={"Pending Employee"} />
            </div>
            <div style={{ boxShadow: "4px 4px 22px 0px rgba(0, 0, 0, 0.05)" }} className="rounded p-4 bg-white flex items-end justify-between w-9/12">
                <DropDownWithTitle title={"Department"} />
                <DropDownWithTitle title={"Designation"} />
                <InputWithTitle title={"Designation"} placeholder={"Search Employee Name..."} className={"w-[250px]"} />
                <InputWithTitle title={"Employee ID"} placeholder={"Search Employee ID..."} className={"w-[250px]"} />
                <Button className="">
                    <MdSearch size={22} />
                </Button>
            </div>
            <ToggleButton />
            <EmployeeCardWithActiveButton />
            <EmployeeCardWithImage />
        </div>
    );
};

export default MainLayout;
