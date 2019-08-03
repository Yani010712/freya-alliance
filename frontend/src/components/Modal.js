import React from 'react';

import { Container } from '@material-ui/core';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <Container maxWidth="md">
                    {children}
                </Container>
                <CancelRoundedIcon tooltip="Close" className="modal-close" onClick={handleClose} />
            </div>
        </div>
    );
};

export default Modal;