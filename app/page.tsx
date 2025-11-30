"use client";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import { useState } from "react";
// Step Components
import LoginView from "./components/steps/LoginView";
import IntroductionStep from "./components/steps/IntroductionStep";

export default function Home() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [activeStep, setActiveStep] = useState(0);
	const [hasStarted, setHasStarted] = useState(false);

	if (!isAuthenticated) {
		return <LoginView onSuccess={() => setIsAuthenticated(true)} />;
	}

	if (!hasStarted) {
		return <IntroductionStep onStart={() => setHasStarted(true)} />;
	}

	const steps = [
		{ label: "1", component: <IntroductionStep /> },
		{ label: "2", component: <IntroductionStep /> },
		{ label: "3", component: <IntroductionStep /> },
		{ label: "4", component: <IntroductionStep /> },
	];

	return (
		<Box>
			<Box>{steps[activeStep].component}</Box>
			<Stepper activeStep={activeStep}>
				{steps.map((step) => (
					<Step key={step.label}>
						<StepLabel>{step.label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</Box>
	);
}
