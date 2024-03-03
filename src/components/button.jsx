import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ children, className, px, white, href }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1
        ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}
    `;
  const renderButton = () => (
    <button className={classes}>
      <span className="relative z-10">{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className="relative z-10">{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;