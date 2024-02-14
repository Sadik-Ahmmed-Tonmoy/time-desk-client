import { Select } from "antd";
import React from "react";

const DropDownWithTitle = ({ title }) => {
    return (
        <div>
            {title && <p className="text-[#474848] font-Poppins text-sm font-medium leading-normal mb-2">{title}</p>}
            <Select
                placeholder="Select Department Name..."
                className="w-[250px]"
                options={[
                    {
                        value: "jack",
                        label: "Jack",
                    },
                    {
                        value: "lucy",
                        label: "Lucy",
                    },
                    {
                        value: "Yiminghe",
                        label: "yiminghe",
                    },
                ]}
            />
        </div>
    );
};

export default DropDownWithTitle;
