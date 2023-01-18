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
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
            <div id="modal-pic"> <img src="https://i.guim.co.uk/img/media/8aac28c34fdce2b8c020d0d960e90158d4df1153/0_113_2674_1604/master/2674.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6d7d5a31ce4da443f7cb030dbc5f5750" alt="bild på christer" id="chris"/> </div> 
            <div className="modal-text">
            <div className="modal-div">{events[0].artist}</div> 
               <div className="modal-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio eos quaerat quibusdam, odio beatae commodi nemo sapiente at provident ipsa, debitis minus inventore deserunt suscipit! Nihil illum, quam quod ex nemo beatae repudiandae ducimus, molestias et enim neque. Amet tempora, atque eligendi aspernatur eveniet rem eos dolore assumenda quisquam nesciunt.</div>
               </div>
                <div 
                className="close-modal"
                onClick={toggleModal}
                >Close</div>
            </div>
        </div>}
        
        
        

        </>
    )}