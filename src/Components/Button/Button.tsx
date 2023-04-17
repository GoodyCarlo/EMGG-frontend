import React, { FC } from "react";
import "./Button.css"
import userEditIcon from "../../Assets/Icons/user-edit.svg"
import userDeleteIcon from "../../Assets/Icons/user-delete.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps{
  handleClick: () => void;
  className?: string,
  type: string,
  children?: React.ReactNode,
  text?: string,
}

const Button: React.FC<ButtonProps> = ({
  className,
  handleClick,
  type,
  children,
  text,
  }) =>{

    if (type === "add-user"){
      return(
        <button 
          className="btn-user light"
          onClick = {handleClick}
        >
          <FontAwesomeIcon icon={["fas","user-plus"]} className="user-icon"/>
          ADD USER
        </button>
      )
    }

    if (type === "sign-in"){
      return(
        <button 
          className="btn-sign-in"
          onClick = {handleClick}
        >
          <b>SIGN IN</b>
        </button>
      )
    }

    if (type === "submit"){
        return(
        <button
          className="btn-submit"
          onClick = {handleClick}
        >
          <b> SUBMIT </b>
        </button>
        )
      }

    if (type === "user-edit"){
      return(
        <button 
          className="btn-user dark"
          onClick = {handleClick}
        >
          <FontAwesomeIcon icon={["fas","user-pen"]} className="user-icon"/>
          Edit
        </button>
      )
    }

    if (type === "user-delete"){
      return(
        <button 
          className="btn-user light"
          onClick = {handleClick}
        >
          <FontAwesomeIcon icon={["fas","user-xmark"]} className="user-icon"/>
          <text>Delete</text>
        </button>
      )
    }


    return (
      <button 
        onClick = {handleClick}
        className = {className}
        // type={type}
      >
      {children}
      </button>
    );
};

export default Button;
