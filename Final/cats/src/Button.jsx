function Button({
    children,
    onClick,
    type,
    visual,
    className,
}) {
    let buttonClass = "button";
    if (visual === "link") {
        buttonClass = "button-link";
    }
    return (
        <button
            className={`${buttonClass} ${className}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;