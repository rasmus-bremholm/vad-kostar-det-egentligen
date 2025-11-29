"use client";
import { Box } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import LoginForm from "../(auth)/LoginForm";
import SignupForm from "../(auth)/SignupForm";

interface LoginViewProps {
	onSuccess: () => void;
}

export default function LoginView({ onSuccess }: LoginViewProps) {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<Box sx={{ height: 700, display: "flex", minWidth: "100%", minHeight: "100%", borderRadius: 2, bgcolor: "background.paper" }}>
			{/* Form */}
			<Box sx={{ flex: 1, display: "flex", flexDirection: "column", p: 4 }}>
				{isLogin ? (
					<LoginForm onSuccess={onSuccess} onToggle={() => setIsLogin(false)} />
				) : (
					<SignupForm onSuccess={onSuccess} onToggle={() => setIsLogin(true)} />
				)}
			</Box>
			{/* Image */}
			<Box sx={{ position: "relative", flex: 1, overflow: "hidden", borderRadius: "0 12px 12px 0" }}>
				<Image src='/lake.jpg' alt='lake' fill style={{ objectFit: "cover", objectPosition: "20% 80%", borderRadius: "0 12px 12px 0" }} />
			</Box>
		</Box>
	);
}
