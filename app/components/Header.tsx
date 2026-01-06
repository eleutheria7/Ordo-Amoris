"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAlignJustify } from "react-icons/fa";

interface ScrollLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  onClick?: () => void;
}

const ScrollLink = ({
  href,
  onClick,
  children,
  className,
  ...props
}: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // altura do header
      const top =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }

    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`cursor-pointer ${className ?? ""}`}
      {...props}
    >
      {children}
    </a>
  );
};

const menuItems = [
  { label: "Sobre", id: "sobre" },
  { label: "Recomendações", id: "recomendacoes" },
  { label: "Local", id: "local" },
  { label: "Contato", id: "contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Fecha o menu ao redimensionar a tela
  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed w-full top-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <Image
            src="/assets/img/logo.png"
            alt="Logo Eleutheria"
            width={70}
            height={70}
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex space-x-8 text-2xl items-center">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </ScrollLink>
          ))}

          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-sm font-semibold flex items-center justify-center opacity-50 pointer-events-none cursor-not-allowed"
          >
            INSCRIÇÕES
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-4"
            aria-label="Abrir menu"
          >
            <FaAlignJustify size={26} />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col gap-4 px-6 py-6 text-2xl">
              {menuItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-gray-600 hover:bg-gray-100 rounded px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
