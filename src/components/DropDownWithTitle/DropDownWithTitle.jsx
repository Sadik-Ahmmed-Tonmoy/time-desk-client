import { Select } from "antd";
import React from "react";
import cn from "../../utils/cn";

const DropDownWithTitle = ({ title, className, dropHeight, placeholder }) => {
    return (
        <div className={cn("w-full", className)}>
            {title && <p className="text-[#474848] font-Poppins text-sm font-medium leading-normal mb-2">{title}</p>}
            <Select
                placeholder={placeholder}
                className={cn("w-full", dropHeight)}
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
