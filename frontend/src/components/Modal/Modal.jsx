import React, { useState } from "react";
import "./Modal.css";
import { events } from "../event-info";

export default function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    };

    if(modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }

    return (
        <>

    {!modal ? <div 
        onClick={toggleModal} 
        className="div-modal">
            {events[0].artist}
        </div> : <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <h2>{events[0].artist}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis atque aspernatur odio reprehenderit eius, est accusamus ipsam impedit deleniti aliquam eos voluptas repellat ad similique, quaerat eligendi quos, accusantium reiciendis pariatur porro dolorum doloribus neque. Necessitatibus minus nisi eveniet nemo perspiciatis ad. Esse voluptas ut tempora enim, asperiores libero tenetur!</p>
                <button 
                className="close-modal"
                onClick={toggleModal}
                >Close</button>
            </div>
        </div>}
        

        

        </>
    )}