import React from "react";
import { useContext } from "react";
import { deleteContact } from "../service";
import { Context } from "../store/appContext";

const Modal=({getContactList})=>{
    
    const {store,actions} = useContext(Context);
       
    const deletePeople=async()=>{
        await deleteContact(store.contact.id);
        getContactList();        
    }

    return(
        <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel"><strong>Are you sure?</strong></h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>If you delete this thing the entire universe will go down!</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh No!</button>
                    <button onClick={deletePeople} type="button" className="btn btn-primary" data-bs-dismiss="modal">Yes Baby!</button>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Modal;