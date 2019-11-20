import React from "react";

// importing style-sheet from css module
import classes from "./Modal.module.css";

interface ModalProps {
  content?: JSX.Element;
  children?: JSX.Element;
}

const modal: React.FC<ModalProps> = props => {
  return (
    <div className={classes.style}>
      <div style={{ alignContent: "center" }}>
        {props.content}
        {props.children}
      </div>
    </div>
  );
};

export default modal;
