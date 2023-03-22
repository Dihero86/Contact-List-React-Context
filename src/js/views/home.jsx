import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import { getAgenda } from "../service/index.js";
import Modal from "../component/modal.jsx";

const Home = () => {

	const { store, actions } = useContext(Context);
	const [state, setState] = useState(false);

	const getContactList = async () => {
		setState(false);
		const data = await getAgenda();
		actions.loadSomeData(data);
		setState(true);
	}

	useEffect(() => {
		getContactList()
	}, [])

	return (
		<div className="container-fluid mt-2">
			<div className="d-flex justify-content-end">
				<Link to='/form/Create' state={{ metodo: "POST" }}>
					<button type="button" className="btn btn-primary">Add New Contact</button>
				</Link>
			</div>
			<div className="d-flex justify-content-center flex-wrap mx-auto mt-4">
				{state ? store.people.map((contact, index) => <Card key={index} contact={contact} />) :
					<div className="d-flex justify-content-center">
						<div className="spinner-border" style={{ width: '10rem', height: '10rem' }} role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				}
				<Modal getContactList={getContactList} />
			</div>
		</div>
	)
}

export default Home;
