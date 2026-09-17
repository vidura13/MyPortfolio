import { useEffect, useRef, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Arrow, Close } from "./Icons";
const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Blogs", "medium"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const header = useRef(null);
  const menuButton = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const onPointer = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <div className="container nav-inner">
        <a
          className="brand"
          href="#home"
          aria-label="Vidura Abeysinghe, home"
          onClick={() => setOpen(false)}
        >
          va<span>.</span>
          <span className="brand-caption">LEARN. CODE. BUILD.</span>
        </a>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
        >
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="mobile-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <Arrow diagonal />
          </a>
        </nav>
        <div className="nav-actions">
          <DarkModeToggle />
          <a className="nav-contact" href="#contact">
            Let’s talk <Arrow diagonal />
          </a>
          <button
            type="button"
            ref={menuButton}
            className="icon-button menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <Close />
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
