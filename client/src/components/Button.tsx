import React from "react";

// Define the Props interface for the Button component
interface ButtonProps {
  label: string; // Text to be displayed on the button
  onClick: () => void; // Function to call when button is clicked
  type?: "button" | "submit" | "reset"; // Button type attribute
  disabled?: boolean; // If true, disables the button
  style?: React.CSSProperties; // Custom buttom styles
}

// Create the Button component
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button", // Default to 'button' type
  disabled = false, // Default to enabled button
  style,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: disabled ? "#ccc" : "#007bff",
        color: disabled ? "#666" : "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style, // Apply any additional custom styles passed via props
      }}
    >
      {label}
    </button>
  );
};

export default Button;
