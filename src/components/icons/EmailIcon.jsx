import React, { useState } from "react";

function EmailIcon({ emailGradientId }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="h-full w-full transition-all duration-300"
    >
      <defs>
        <linearGradient id={emailGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <path
        d="M29,4H3A3,3,0,0,0,0,7V25a3,3,0,0,0,3,3H29a3,3,0,0,0,3-3V7A3,3,0,0,0,29,4Zm-.72,2L16,14.77,3.72,6ZM30,25a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V7.23l13.42,9.58a1,1,0,0,0,1.16,0L30,7.23Z"
        fill={hovered ? `url(#${emailGradientId})` : "white"}
        className="transition-all duration-300"
      />
    </svg>
  );
}

export default EmailIcon;
