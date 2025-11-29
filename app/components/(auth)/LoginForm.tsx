"use client";
import { useFormValidation } from "@/app/lib/hooks/useFormValidation";
import { validateEmail, validatePassword } from "@/app/lib/validation";
import { Box, Typography, Button, IconButton, TextField, Link } from "@mui/material";
import { useState, useMemo } from "react";

type LoginFormProps = {
	onSuccess: () => void;
	onToggle: () => void;
};

export default function LoginForm({ onSuccess, onToggle }: LoginFormProps) {
	const validationRules = useMemo(
		() => ({
			email: {
				validate: validateEmail,
				errorMessage: "Please enter a valid email address",
			},
			password: {
				validate: validatePassword,
				errorMessage: "Must be 5+ characters with uppercase, lowercase, and number",
			},
		}),
		[]
	);

	const { formData, errors, touched, handleInputChange, handleBlur, hasErrors, markAllTouched } = useFormValidation(
		{ email: "", password: "" },
		validationRules
	);

	const [loading, setLoading] = useState(false);
	const [submitError, setSubmitError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		markAllTouched();

		if (hasErrors()) {
			setSubmitError("Please fix the errors above");
			return;
		}

		// Stub for now
		onSuccess();
	};

	return (
		<Box component='form' onSubmit={handleSubmit}>
			<Typography variant='h4' mb={3}>
				Logga in
			</Typography>

			<TextField
				fullWidth
				label='Email'
				value={formData.email}
				onChange={(e) => handleInputChange("email", e.target.value)}
				onBlur={() => handleBlur("email")}
				error={touched.email && !!errors.email}
				helperText={touched.email && errors.email}
				sx={{ mb: 2 }}
			/>

			<TextField
				fullWidth
				label='Lösenord'
				type='password'
				value={formData.password}
				onChange={(e) => handleInputChange("password", e.target.value)}
				onBlur={() => handleBlur("password")}
				error={touched.password && !!errors.password}
				helperText={touched.password && errors.password}
				sx={{ mb: 2 }}
			/>

			{submitError && (
				<Typography color='error' sx={{ mb: 2 }}>
					{submitError}
				</Typography>
			)}

			<Button fullWidth variant='contained' type='submit' disabled={loading} sx={{ mb: 2 }}>
				{loading ? "Loggar in..." : "Logga in"}
			</Button>

			<Typography variant='body2' textAlign='center'>
				Inget konto?{" "}
				<Link component='button' type='button' onClick={onToggle}>
					Skapa konto
				</Link>
			</Typography>
		</Box>
	);
}
