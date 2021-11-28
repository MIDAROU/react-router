import Button from "react-bootstrap/Button";
import React from "react";
import { withRouter } from "react-router";
function Movie({ Movies, match, history }) {
	return (
		<>
			{Movies.filter((el) => {
				// eslint-disable-next-line eqeqeq
				if (el.id == match.params.id) {
					return true;
				}
				return false;
			}).map((movie) => (
				<div className="main">
					<Button className="btn" variant="primary" onClick={history.goBack}>
						BACK
					</Button>
					<hr />
					<h1>{movie.title}</h1>
					<iframe
						width="1000px"
						height="800px"
						src={movie.trailer}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="Embedded youtube"
					/>
					<div>
						<h2>DESCRIPTION :</h2>
						<p>{movie.description}</p>
					</div>
				</div>
			))}
		</>
	);
}

export default withRouter(Movie);
