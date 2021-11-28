import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactStars from "react-rating-stars-component";

function AddMovie({ Movies, setMovies }) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const ratingChanged = (newRating) => {
		setRating(newRating);
	};

	const [title, setTitle] = useState("");
	const [description, setDes] = useState("");
	const [posterURL, setUrl] = useState("");
	const [rating, setRating] = useState(0);
	const [trailer, setTrailer] = useState("");

	const addMovie = (e) =>
		setMovies([
			...Movies,
			{ id: Movies.length + 1, title, description, posterURL, rating, trailer },
		]) &
		handleClose() &
		alert(`Movie ${title} Added!`);

	return (
		<>
			<Button className="mb-5" variant="primary" onClick={handleShow}>
				Add A Movie
			</Button>

			<Modal
				className="Modal"
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Add Movie</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form className="form">
						<label htmlFor="title">Movie Title : </label>
						<input
							type="text"
							onChange={(e) => setTitle(e.target.value)}
							value={title}
						/>
						<label htmlFor="Description">Movie Description : </label>
						<textarea
							onChange={(e) => setDes(e.target.value)}
							value={description}
							type="text"
							rows="4"
							cols="25"
						/>
						<label htmlFor="Trailer">Movie Trailer Link : </label>
						<input
							onChange={(e) => setTrailer(e.target.value)}
							value={trailer}
							type="text"
						/>
						<iframe
							width="50%"
							height="40%"
							src={trailer}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="Embedded youtube"
						/>
						<label htmlFor="ImageSrc">Movie Poster Link : </label>
						<input
							onChange={(e) => setUrl(e.target.value)}
							value={posterURL}
							type="text"
						/>
						<img
							src={posterURL}
							alt=""
							style={{
								width: "50%",
							}}
						/>
						<label htmlFor="Rating">Rating : </label>
						<ReactStars
							count={5}
							onChange={ratingChanged}
							size={35}
							value={rating}
							activeColor="#ffd700"
						/>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="Dark" onClick={handleClose}>
						Close
					</Button>
					<Button variant="Success" onClick={addMovie}>
						Add
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AddMovie;
