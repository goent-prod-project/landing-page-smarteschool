import React from "react";

const SocmedIcon = ({ className, icon, onClick, isLast = false, ...rest }) => {
  const classes = [
    `socmed-icon text-white p-2 ${isLast ? "ml-2" : "mx-2"}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div onClick={onClick} className={classes} {...rest}>
      {icon}
    </div>
  );
};

export default SocmedIcon;
