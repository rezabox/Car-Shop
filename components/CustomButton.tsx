import { CustomButtonProps } from "@/Types";
import Image from "next/image";
import React from "react";


const CustomButton = ({ title,containerStyles,handleClick ,btnType}:CustomButtonProps) => {
  return(
    <button 
    disabled={false}
    type={"button"|| btnType}
    className={`custom-btn ${containerStyles}`}
    onClick={()=> {}}
    >
    <span className={`flex-1`}>{title}</span>
    </button>
   ) 
};

export default CustomButton;
