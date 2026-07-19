"use client";

import React from "react";

export default function ScrollLink({
  href,
  children,
  className,
  style,
}: React.PropsWithChildren<{ href: string; className?: string; style?: React.CSSProperties }>) {
  function handleClick(e: React.MouseEvent) {
    // if it's an anchor to an id on the same page, smooth scroll
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // update hash without jumping
        history.replaceState(null, "", `#${id}`);
      }
    }
    // otherwise let the browser handle it (external links will navigate)
  }

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
