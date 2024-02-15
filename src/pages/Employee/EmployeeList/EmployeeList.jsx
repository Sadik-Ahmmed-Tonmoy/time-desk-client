import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import DropDownWithTitle from "../../../components/DropDownWithTitle/DropDownWithTitle";
import InputWithTitle from "../../../components/InputWithTitle/InputWithTitle";
import Button from "../../../components/ui/Button";
import { MdSearch } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import MainTable from "../../../components/MainTable/MainTable";
import EmployeeCardWithActiveButton from "../../../components/EmployeeCardWithActiveButton/EmployeeCardWithActiveButton";
import gridOpen from '../../../assets/Images/EmployeeList/gridOpen.svg'
import gridClose from '../../../assets/Images/EmployeeList/gridClose.svg'

const EmployeeList = () => {
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
        <div>
            <div style={{ boxShadow: "4px 4px 22px 0px rgba(0, 0, 0, 0.05)" }} className="rounded px-[14px] py-[6px] mb-4 bg-white w-min">
                <Breadcrumbs first={"Employee"} second={"Pending Employee"} />
            </div>
            <div
                style={{ boxShadow: "4px 4px 22px 0px rgba(0, 0, 0, 0.05)" }}
                className="rounded p-4 bg-white flex mb-4 items-end gap-4 justify-between w-full"
            >
                <DropDownWithTitle title={"Department"} dropHeight="" placeholder="Select Department Name..." />
                <DropDownWithTitle title={"Designation"} dropHeight="" placeholder="Select Department Name..." />
                <InputWithTitle title={"Designation"} placeholder={"Search Employee Name..."} />
                <InputWithTitle title={"Employee ID"} placeholder={"Search Employee ID..."} />
                <Button className="">
                    <MdSearch className="-ms-2" size={22} />
                </Button>
            </div>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                    <Button>
                        <div className="flex items-center gap-3">
                            <FiPlusCircle size={20} /> <p>Invite Employee</p>
                        </div>
                    </Button>
                </div>
                <div className="flex items-center gap-6 ">
                <DropDownWithTitle dropHeight={"h-10"} className={"w-[250px]"} placeholder="All" />
                    <Button variant="ghost" className="text-primary-color">
                      <img src={gridOpen} alt="" />
                    </Button>
                    <Button variant="ghost" className="text-primary-color">
                      <img src={gridClose} alt="" />
                    </Button>
                </div>

            </div>
            <MainTable headerColumn={headerColumn} bodyData={bodyData} isActive={true} isDelete={true} isEdit={true} isEye={true} />
            <div>
                <EmployeeCardWithActiveButton />
            </div>
        </div>
    );
};

export default EmployeeList;
