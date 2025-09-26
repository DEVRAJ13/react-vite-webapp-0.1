export const validationRules = {
  fullName: {
    required: "Full Name is required",
    validate: (value) =>
      value !== null && value !== undefined && value.toString().trim() !== "" || "Full Name cannot be empty",
  },
  lastName: {
    required: "Last Name is required",
    validate: (value) =>
      value !== null && value !== undefined && value.toString().trim() !== "" || "Last Name cannot be empty",
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Enter a valid email address",
    },
  },
  phone: {
    required: "Phone is required",
    pattern: {
      value: /^[0-9]{10}$/,
      message: "Enter a valid 10-digit phone number",
    },
  },
  role: {
    required: "Please select a role",
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters",
    },
  },
  notEmptyField: {
    validate: (value) =>
      value !== null && value !== undefined && value.toString().trim() !== "" || "This field cannot be empty",
  },
};
