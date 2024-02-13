import React from "react";
import { Outlet } from "react-router-dom";
import Checkbox from "../components/Checkbox/Checkbox";
import MainTable from "../components/MainTable/MainTable";

const MainLayout = () => {
    const headerColumn = ["Name", "Age", "Country",  "new"];
    const bodyData = [
        ["Row 1 Cell 1", "Row 1 Cell 2", "Row 1 Cell 3", "new"],
        ["Row 2 Cell 1", "Row 2 Cell 2", "Row 2 Cell 3"],
        // Add more rows as needed
      ];
    return (
        <>
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
            <MainTable headerColumn={headerColumn} bodyData={bodyData} />
        </>
    );
};

export default MainLayout;
