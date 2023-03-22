import React, { useState, useEffect, useContext } from "react";
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FiMapPin } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({ contact }) => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const edit = () => {
        actions.editData(contact);
        navigate('/form/Edit')
    }

    const deleteContact = () => {
        actions.editData(contact);
    }

    return (
        <div className="card mb-3" style={{ height: '200px', width: '60%' }}>
            <div className="row g-0">
                <div className="col-md-3">
                    <img src="https://images.unsplash.com/photo-1592841075161-b3a24a250248?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNnx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className="object-fit-contain border rounded" height='200px' />
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <h4 className="card-title"><strong>{contact.full_name}</strong></h4>
                        <p className="card-text"><FiMapPin />{contact.address}</p>
                        <p className="card-text"><HiOutlinePhone /> {contact.phone}</p>
                        <p className="card-text"><HiOutlineMail />{contact.email}</p>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center mt-5">
                    <a type="button"><h3 onClick={edit}><BsPencil /></h3></a>
                    <a onClick={deleteContact} type="button" style={{ marginLeft: '4px' }} data-bs-toggle="modal" data-bs-target="#exampleModal" >
                        <h3><BsFillTrashFill /></h3>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;