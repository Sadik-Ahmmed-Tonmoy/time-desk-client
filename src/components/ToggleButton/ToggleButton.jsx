import React, { useState } from 'react';
import { Switch } from "antd";

const ToggleButton = () => {
    const [isChecked, setIsChecked] = useState(false);
    console.log(`${isChecked}`);
    const onChange = (checked) => {
        setIsChecked(checked);
    };

  return (
    <>
    <Switch onChange={onChange} className='border-2' style={{ backgroundColor: isChecked ? "#BCFFC7" : "#E9E9E9"}} />
    </>
  );
};

export default ToggleButton;
