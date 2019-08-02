import React from 'react';
import '../App.css';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                {children}
                <CancelRoundedIcon tooltip="Close" className="modal-close" onClick={handleClose} />
            </div>
        </div>
    );
};

export default Modal;