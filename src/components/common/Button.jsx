import { Link } from "react-router";

import { cn } from "../../utils/cn";
import { UI } from "../../config/ui.config";

const Button = ({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  iconLeft: IconLeft,
  iconRight: IconRight,
  className = "",
  ...props
}) => {
  const classes = cn(
    UI.button.base,
    UI.button.variants[variant],
    UI.button.sizes[size],
    className
  );

  const content = (
    <>
      {IconLeft && <IconLeft size={13} />}

      <span>{children}</span>

      {IconRight && <IconRight size={12} />}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        {...props}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;