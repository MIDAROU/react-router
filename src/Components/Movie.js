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
					<button onClick={history.goBack}>BACK</button>
					<h1>{movie.title}</h1>
					<iframe
						width="853"
						height="480"
						src={movie.trailer}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="Embedded youtube"
					/>
					<p>{movie.description}</p>
				</div>
			))}
		</>
	);
}

export default withRouter(Movie);
