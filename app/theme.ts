import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "light",
		background: {
			default: "#F1F5F9", // Slightly more saturated slate-tinted background
			paper: "#FFFFFF",
		},
		primary: {
			main: "#64748B", // Slate gray - neutral and modern
			light: "#94A3B8",
			dark: "#475569",
			contrastText: "#FFFFFF",
		},
		secondary: {
			main: "#475569", // Darker slate for secondary actions
			light: "#64748B",
			dark: "#334155",
			contrastText: "#FFFFFF",
		},
		text: {
			primary: "#1E293B", // Deep slate for primary text
			secondary: "#64748B", // Medium slate for secondary text
		},
		divider: "#E2E8F0", // Very subtle dividers
	},
	typography: {
		fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
		fontSize: 16,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 600,
		h1: {
			fontSize: "3rem",
			fontWeight: 600,
			lineHeight: 1.2,
			letterSpacing: "-0.02em",
		},
		h2: {
			fontSize: "2.25rem",
			fontWeight: 600,
			lineHeight: 1.3,
			letterSpacing: "-0.01em",
		},
		h3: {
			fontSize: "1.875rem",
			fontWeight: 600,
			lineHeight: 1.3,
		},
		h4: {
			fontSize: "1.5rem",
			fontWeight: 600,
			lineHeight: 1.4,
		},
		h5: {
			fontSize: "1.25rem",
			fontWeight: 600,
			lineHeight: 1.4,
		},
		h6: {
			fontSize: "1.125rem",
			fontWeight: 600,
			lineHeight: 1.4,
		},
		body1: {
			fontSize: "1rem",
			lineHeight: 1.6,
		},
		body2: {
			fontSize: "0.875rem",
			lineHeight: 1.6,
		},
		button: {
			textTransform: "none",
			fontWeight: 500,
			letterSpacing: "0.01em",
		},
	},
	shape: {
		borderRadius: 12, // Soft, modern rounded corners
	},
	spacing: 8,
	shadows: [
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
	],
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: "#F1F5F9",
					margin: 0,
					padding: 0,
				},
				"*": {
					boxSizing: "border-box",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 12,
					padding: "10px 24px",
					fontSize: "1rem",
					fontWeight: 500,
					boxShadow: "none",
					"&:hover": {
						boxShadow: "none",
					},
				},
				contained: {
					"&:hover": {
						boxShadow: "none",
					},
				},
				outlined: {
					borderWidth: "2px",
					"&:hover": {
						borderWidth: "2px",
					},
				},
			},
			defaultProps: {
				disableElevation: true,
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					boxShadow: "none",
					border: "none",
				},
			},
			defaultProps: {
				elevation: 0,
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: "none",
					border: "none",
					borderRadius: 16,
					backgroundColor: "#FFFFFF",
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					"& .MuiOutlinedInput-root": {
						borderRadius: 12,
						"& fieldset": {
							borderWidth: "2px",
							borderColor: "#E2E8F0",
						},
						"&:hover fieldset": {
							borderColor: "#CBD5E1",
						},
						"&.Mui-focused fieldset": {
							borderWidth: "2px",
							borderColor: "#64748B",
						},
					},
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					fontSize: "1rem",
				},
				input: {
					padding: "12px 16px",
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					fontWeight: 500,
				},
			},
		},
		MuiStepper: {
			styleOverrides: {
				root: {
					padding: "24px 0",
				},
			},
		},
		MuiStepLabel: {
			styleOverrides: {
				label: {
					fontSize: "0.875rem",
					fontWeight: 500,
				},
			},
		},
		MuiStepIcon: {
			styleOverrides: {
				root: {
					color: "#E2E8F0",
					"&.Mui-active": {
						color: "#64748B",
					},
					"&.Mui-completed": {
						color: "#64748B",
					},
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: "none",
					borderBottom: "none",
				},
			},
			defaultProps: {
				elevation: 0,
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: "#E2E8F0",
				},
			},
		},
	},
});

export default theme;
