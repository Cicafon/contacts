import React from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const Backdrop: React.FC<{ onClose: () => void }> = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverLay: React.FC<{ title: string }> = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>{props.children}</div>
            </div>
        </div>
    );
};

const Modal: React.FC<{ onClose: () => void; title: string }> = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(
                <Backdrop onClose={props.onClose} />,
                document.getElementById('backdrop-root')!
            )}
            {ReactDom.createPortal(
                <ModalOverLay
                    title={props.title}
                    //   onClose={props.onClose}
                >
                    {props.children}
                </ModalOverLay>,
                document.getElementById('overlay-root')!
            )}
        </React.Fragment>
    );
};

export default Modal;
