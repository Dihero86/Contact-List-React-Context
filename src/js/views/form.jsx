import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addContact, editContact } from "../service/index.js";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

const initialState = {
	full_name: "",
	email: "",
	phone: "",
	address: "",
	agenda_slug: "Diego123"
}

const Form = () => {

	const { store, actions } = useContext(Context);
	const [user, setUser] = useState(initialState);
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (params.type === 'Edit') {
			setUser({ ...store.contact })
		}
	}, [])

	const handleChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		setUser({ ...user, [name]: value });
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		params.type === 'Edit' ? await editContact(user, store.contact.id) : await addContact(user);
		navigate('/');
	}

	return (
		<div className="container">
			<div className="d-flex justify-content-center">
				<h1>{params.type} Contact</h1>
			</div>
			<form onSubmit={handleSubmit} onChange={handleChange}>
				<div className="mb-3">
					<label className="form-label">Full Name</label>
					<input type="text" className="form-control" name="full_name" defaultValue={user.full_name} />
				</div>
				<div className="mb-3">
					<label className="form-label">email</label>
					<input type="text" className="form-control" name="email" defaultValue={user.email} />
				</div>
				<div className="mb-3">
					<label className="form-label">Phone</label>
					<input type="Phone" className="form-control" name="phone" defaultValue={user.phone} />
				</div>
				<div className="mb-3">
					<label className="form-label">Address</label>
					<input type="text" className="form-control" name="address" defaultValue={user.address} />
				</div>
				<div className="row">
					<button type="submit" className="btn btn-primary mt-2 " value="submit">Save</button>
				</div>
			</form>
			<Link to='/'>
				<p>or get back to contacts</p>
			</Link>
		</div>
	);
};

export default Form;