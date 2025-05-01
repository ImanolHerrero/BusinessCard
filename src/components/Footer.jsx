import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

function Footer() {
  return (
    <div className="absolute bottom-0 w-full p-2 bg-zinc-950">
      <div className="flex items-center justify-center gap-6">
        <a
          href="https://x.com/fr0gger_/status/1916743281339498760"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inspiration from X
        </a>
        <a
          href="https://github.com/ImanolHerrero/BusinessCard"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
        >
          <GitHubLogoIcon />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/imanol-herrero-932956247/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
        >
          <LinkedInLogoIcon />
          Contact me!
        </a>
      </div>
    </div>
  );
}

export default Footer;
