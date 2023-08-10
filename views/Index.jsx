import React from "react";

function Index({ pokemon }) {
	return (
		<div>
			<h1>See all the pokemon!</h1>
			<ul>
				{pokemon.map((item, i) => {
					return (
						<li key={i}>
							<a href={`/pokemon/${i}`}>{item.name[0].toUpperCase() + item.name.slice(1)}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Index;
