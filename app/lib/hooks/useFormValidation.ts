// hooks/useFormValidation.ts
import { useState, useEffect } from "react";

type ValidationRule = {
	validate: (value: string) => boolean;
	errorMessage: string;
};

type ValidationRules = {
	[key: string]: ValidationRule;
};

export function useFormValidation<T extends Record<string, string>>(initialState: T, validationRules: ValidationRules) {
	const [formData, setFormData] = useState<T>(initialState);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [touched, setTouched] = useState<Record<string, boolean>>({});

	useEffect(() => {
		const newErrors: Record<string, string> = {};

		Object.keys(validationRules).forEach((field) => {
			if (touched[field] && formData[field]) {
				const rule = validationRules[field];
				if (!rule.validate(formData[field])) {
					newErrors[field] = rule.errorMessage;
				}
			}
		});

		setErrors(newErrors);
	}, [formData, touched, validationRules]);

	const handleInputChange = (field: keyof T, value: string) => {
		setFormData({ ...formData, [field]: value });
	};

	const handleBlur = (field: keyof T) => {
		setTouched({ ...touched, [field]: true });
	};

	const resetForm = () => {
		setFormData(initialState);
		setErrors({});
		setTouched({});
	};

	const hasErrors = () => {
		return Object.keys(errors).length > 0;
	};

	const markAllTouched = () => {
		const allTouched = Object.keys(formData).reduce((acc, key) => {
			acc[key] = true;
			return acc;
		}, {} as Record<string, boolean>);
		setTouched(allTouched);
	};

	return {
		formData,
		errors,
		touched,
		handleInputChange,
		handleBlur,
		resetForm,
		hasErrors,
		markAllTouched,
	};
}
