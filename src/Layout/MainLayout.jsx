import React from "react";
import { Outlet } from "react-router-dom";
import Checkbox from "../components/Checkbox/Checkbox";
import MainTable from "../components/MainTable/MainTable";
import ToggleButton from "../components/ToggleButton/ToggleButton";
import EmployeeCardWithActiveButton from "../components/EmployeeCardWithActiveButton/EmployeeCardWithActiveButton";
import EmployeeCardWithImage from "../components/EmployeeCardWithImage/EmployeeCardWithImage";

const MainLayout = () => {
    const headerColumn = ["Employee Name", "Employee ID", "Department",  "Designation", "Phone No"];
    const bodyData = [
        [{ text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" }, { text: "HRM084" }, { text: "Marketing" }, { text: "Marketing Officer" }, { text: "018**********" }],
        [{ text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" }, { text: "HRM084" }, { text: "Marketing" }, { text: "Marketing Officer" }, { text: "018**********" }],
        [{ text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" }, { text: "HRM084" }, { text: "Marketing" }, { text: "Marketing Officer" }, { text: "018**********" }],
        [{ text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" }, { text: "HRM084" }, { text: "Marketing" }, { text: "Marketing Officer" }, { text: "018**********" }],
        [{ text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" }, { text: "HRM084" }, { text: "Marketing" }, { text: "Marketing Officer" }, { text: "018**********" }],
        [{ text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" }, { text: "HRM084" }, { text: "Marketing" }, { text: "Marketing Officer" }, { text: "018**********" }],
        [{ text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" }, { text: "HRM084" }, { text: "Marketing" }, { text: "Marketing Officer" }, { text: "018**********" }],
        [{ text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" }, { text: "HRM084" }, { text: "Marketing" }, { text: "Marketing Officer" }, { text: "018**********" }],
        [{ text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" }, { text: "HRM084" }, { text: "Marketing" }, { text: "Marketing Officer" }, { text: "018**********" }],
        [{ text: "Employee Name", image: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg" }, { text: "HRM084" }, { text: "Marketing" }, { text: "Marketing Officer" }, { text: "018**********" }],
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
            <MainTable headerColumn={headerColumn} bodyData={bodyData} isActive={true} isDelete={true} isEdit={true} isEye={true}/>
            <ToggleButton/>
            <EmployeeCardWithActiveButton/>
            <EmployeeCardWithImage/>
        </div>
    );
};

export default MainLayout;
