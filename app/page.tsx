"use client";
import { Container, Box, Stepper, Step, StepLabel } from "@mui/material";
import { useState } from "react";

export default function Home() {
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	const [activeStep, setActiveStep] = useState(0);

	if (!isAuthenticated) {
		return <div>Not logged in</div>;
	}

	const stepLabels = ["step1", "step2", "step3"];

	return (
		<Container maxWidth='lg' component={"main"}>
			<Box>
				<Box>{steps[activeStep]}</Box>
				<Stepper activeStep={activeStep}>
					{stepLabels.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
			</Box>
		</Container>
	);
}
