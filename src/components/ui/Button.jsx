const CTAButton = ({
  children,
  href,
  type = "button",
  onClick,
  className = "",
  variant = "primary",
}) => {
  const variantStyles = {
    primary: `
      bg-gradient-to-r from-[#0EA5A4] to-[#2563EB]
      text-white font-semibold
      shadow-lg shadow-[#0EA5A4]/30
      hover:shadow-2xl hover:shadow-[#0EA5A4]/50
      hover:backdrop-blur-md
    `,
    cta: `
      bg-gradient-to-r from-[#EF4444] to-[#DC2626]
      text-white font-semibold
      shadow-lg shadow-[#EF4444]/30
      hover:shadow-2xl hover:shadow-[#EF4444]/50
      hover:backdrop-blur-md
    `,
  };

  const baseStyles = `
    inline-flex items-center justify-center
    px-8 py-3.5
    text-base font-semibold tracking-wide
    rounded-xl
    border border-transparent
    transition-all duration-300 ease-out
    
    ${variantStyles[variant]}
    
    hover:scale-105
    hover:bg-opacity-90
    
    active:translate-y-0.5
    active:scale-95
    
    focus:outline-none focus:ring-4 focus:ring-offset-2
    ${variant === "primary" ? "focus:ring-[#0EA5A4]/50" : "focus:ring-[#EF4444]/50"}
    
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    
    cursor-pointer
  `;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`${baseStyles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default CTAButton;
