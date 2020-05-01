import React from "react";
import classes from "./Modal.module.css";

import shaJs from "sha.js";

interface ModalProps {
  content: string;
  children?: JSX.Element;
}

const modal: React.FC<ModalProps> = props => {
  console.log(shaJs("something"));
  return (
    <div className={classes.style}>
      {props.content}
      {props.children}
    </div>
  );
};

export default modal;
