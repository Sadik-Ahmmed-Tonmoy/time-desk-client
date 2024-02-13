/* eslint-disable react/prop-types */
import React from "react";
import cn from "../../utils/cn";

const Checkbox = ({ title, className }) => {
    return (
        <label className={cn("flex items-center gap-2 hover:cursor-pointer", className)}>
            <input type="checkbox" name="subscribe" />
            <span className="">{title}</span>
        </label>
    );
};

export default Checkbox;
