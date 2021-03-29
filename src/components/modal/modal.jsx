import React, { useContext } from "react";
import UserDataContext from "../../context/UserDataContext";
import './modal.scss';

const Modal = ({buttonText, clickHandler, children, title}) => {

    const { dispatch } = useContext(UserDataContext);

    const handleClose = () => {
        dispatch({ type: "SET_MODAL", payload: "" })
      };

    return (
        <div className="modal">
            <button
                onClick={handleClose}
                className="close"
            >
                &times;
            </button>
            <h2>{title}</h2>
            <div className="form">
                {children}
            </div>
            {
            buttonText ? 
                <button onClick={clickHandler} className="modal-button">
                    {buttonText} <i className="fa fa-arrow-circle-right" />
                </button>
                : null
            }
        </div>
    )
}

export default Modal

