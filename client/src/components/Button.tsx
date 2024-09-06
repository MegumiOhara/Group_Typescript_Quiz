import React from 'react';

// Define the Props interface, extending the standard button attributes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;                   // Optional label if not passing children
  style?: React.CSSProperties;      // Custom button styles
  disabled?: boolean;               // If true, disables the button
  type?: 'button' | 'submit' | 'reset';  // Button type attribute
  onClick: () => void;              // Click handler
}

// Create the Button component
const Button: React.FC<ButtonProps> = ({
  label,
  children,                  // Allow both label and children
  type = 'button',            // Default type is 'button'
  onClick,
  disabled = false,           // Default to enabled button
  style,
  ...props                    // Spread any other button props (e.g., className)
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: disabled ? '#ccc' : '#007bff',
        color: disabled ? '#666' : '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style  // Merge any custom styles passed via props
      }}
      {...props}  // Spread any additional props like className
    >
      {label || children}  {/* If label exists, use it, otherwise render children */}
    </button>
  );
}

export default Button;
