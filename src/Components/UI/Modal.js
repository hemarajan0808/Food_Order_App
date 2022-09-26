import react,{Fragment} from "react";

import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
    
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}
    const Modal =(props)=>{
    return <Fragment>
        <BackDrop onClose={props.onClose}/>
        <ModalOverLay> {props.children}</ModalOverLay>
    </Fragment>
    }

export default Modal;
