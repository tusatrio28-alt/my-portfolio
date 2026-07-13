import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const menus = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Hobbies",
    href: "#hobbies",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`main-header ${
        scroll ? "scrolled" : ""
      }`}
    >
      <div className="header-container">
        {menuOpen && (
        <div className="mobile-menu">
          {menus.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
        {/* Logo */}

        <a
          href="#home"
          className="header-logo"
        >
          S<span>.</span>
        </a>

        {/* Desktop */}

        <nav className="header-nav">
          {menus.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="header-link"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Hire */}

        <a
          href="#contact"
          className="header-button"
        >
          Hire Me
        </a>

        {/* Mobile */}

        <button
          className="mobile-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>
    </header>
  );
}