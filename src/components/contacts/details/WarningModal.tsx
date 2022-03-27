import React from "react";
import Button from "../../../framework/button/Button";
import Modal from "../../../framework/modal/Modal";
import classes from "./WarningModal.module.css";

const WarningModal: React.FC<{
  onClose: () => void;
  onOk: () => void;
  message: string;
  title: string;
}> = (props) => {
  return (
    <Modal title={props.title} onClose={props.onClose}>
      <div className={classes.warning}>
        <div className={classes.message}>{props.message}</div>
        <Button onClick={props.onOk}>Ok</Button>
      </div>
    </Modal>
  );
};

export default WarningModal;
