import { Select } from "antd";
import React from "react";
import cn from "../../utils/cn";

const InputWithTitle = ({ title, placeholder, className, inputHeight, type="text" }) => {
    return (
        <div className={cn("w-full", className)}>
            {title && <p className="text-[#474848] font-Poppins text-sm font-medium leading-normal mb-2">{title}</p>}
            <input type={type} className={cn("w-full h-8 rounded-md placeholder:opacity-45 text-[#474848] font-Poppins text-sm font-normal leading-normal", inputHeight)} placeholder={placeholder}/>
        </div>
    );
};

export default InputWithTitle;
