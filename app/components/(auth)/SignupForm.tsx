"use client";
import { useState, useMemo } from "react";
import { useFormValidation } from "@/app/lib/hooks/useFormValidation";
import { validateEmail, validatePassword } from "@/app/lib/validation";
import { Box, Typography, Button, TextField, Link } from "@mui/material";

type SignupFormProps = {
	onSuccess: () => void;
	onToggle: () => void;
};

export default function SignupForm({ onSuccess, onToggle }: SignupFormProps) {
	const [loading, setLoading] = useState(false);
	const [submitError, setSubmitError] = useState("");

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
		{ email: "", password: "", confirmPassword: "" },
		validationRules
	);

	// Custom validation for confirmPassword (can't be in validationRules since it needs formData)
	const getConfirmPasswordError = () => {
		if (touched.confirmPassword && formData.confirmPassword) {
			if (formData.confirmPassword !== formData.password) {
				return "Passwords must match";
			}
		}
		return "";
	};

	const confirmPasswordError = getConfirmPasswordError();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		markAllTouched();

		if (hasErrors() || confirmPasswordError) {
			setSubmitError("Please fix the errors above");
			return;
		}

		setLoading(true);
		setSubmitError("");

		// Stub for now
		setTimeout(() => {
			onSuccess();
		}, 500);
	};

	return (
		<Box component='form' onSubmit={handleSubmit}>
			<Typography variant='h4' mb={3}>
				Skapa konto
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

			<TextField
				fullWidth
				label='Bekräfta lösenord'
				type='password'
				value={formData.confirmPassword}
				onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
				onBlur={() => handleBlur("confirmPassword")}
				error={touched.confirmPassword && !!confirmPasswordError}
				helperText={touched.confirmPassword && confirmPasswordError}
				sx={{ mb: 2 }}
			/>

			{submitError && (
				<Typography color='error' sx={{ mb: 2 }}>
					{submitError}
				</Typography>
			)}

			<Button fullWidth variant='contained' type='submit' disabled={loading} sx={{ mb: 2 }}>
				{loading ? "Skapar konto..." : "Registrera"}
			</Button>

			<Typography variant='body2' textAlign='center'>
				Har redan konto?{" "}
				<Link component='button' type='button' onClick={onToggle} sx={{ cursor: "pointer" }}>
					Logga in
				</Link>
			</Typography>
		</Box>
	);
}
