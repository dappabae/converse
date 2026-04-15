interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  className,
}) => {
  const baseStyle =
    "px-10 py-3 rounded font-medium transition-all duration-200";
  const variantStyle =
    variant === "primary"
      ? "bg-black text-white hover:bg-black"
      : "border border-black text-black hover:bg-gray-400";
  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`}>
      {label}
    </button>
  );
};

export default Button;