import React from "react";

// Define the Props interface, extending the standard button attributes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  label?: string;                   // Optional label if not passing children
  style?: React.CSSProperties;      // Custom button styles
  disabled?: boolean;               // If true, disables the button
  type?: 'button' | 'submit' | 'reset';  // Button type attribute
  onClick: () => void;              // Click handler
  className?: string;

}

// Create the Button component
const Button: React.FC<ButtonProps> = ({
  label,

  children,                  // Allow both label and children
  type = 'button',            // Default type is 'button'
  onClick,
  disabled = false,           // Default to enabled button
  className = ''
  

}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}

      className={`px-4 py-2 bg-blue-0 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`} // Merge custom className with default Tailwind classes
    >  
  
      {label || children}  {/* If label exists, use it, otherwise render children */}

    </button>
  );
};

export default Button;
