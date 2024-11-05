import React from 'react';

export default function Alert(props) {
    const handleClose = () => {
        props.setAlert(null); // Clear the alert when the close button is clicked
    };

    return (
        props.alert && (
            <div
                className={`alert alert-${props.alert.type} d-flex justify-content-between align-items-center ${props.mode === 'dark' ? 'text-dark' : ''}`}
                role="alert"
            >
                <span>{props.alert.msg}</span>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
            </div>
        )
    );
}
