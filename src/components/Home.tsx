import { TextField, Button, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const [noOfSpaces, setNoOfSpaces] = useState("");
	const handleChange = (e: any) => {
		setNoOfSpaces(e.target.value);
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		navigate(`/parkingSpaces${noOfSpaces}`);
	};

	return (
		<Paper
			style={{ width: 400, padding: "30px 20px", margin: "30px auto" }}
		>
			<form onSubmit={handleSubmit}>
				<TextField
					type="number"
					label="Enter the number of spaces"
					value={noOfSpaces}
					onChange={handleChange}
					variant="standard"
					data-testid="parking-create-text-input"
					style={{width: 300, paddingRight:"5px"}}
				/>
				<Button
					variant="contained"
					type="submit"
					data-testid="parking-create-submit-button"
					style={{marginTop:"10px"}}
				>
					submit
				</Button>
			</form>
		</Paper>
	);
};

export default Home;
