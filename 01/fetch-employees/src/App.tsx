import React, { useState } from "react";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";

const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};

function App() {
	const [employee, setEmployee] = useState(sampleEmployee);

	const getEmployee = () => {
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setEmployee(data.results[0]);
			})
			.catch((error) => {
				console.error("Error fetching employee:", error);
			});
	};

	return (
		<div className="App">
			<EmployeeCard employee={employee} />

			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</div>
	);
}

export default App;
