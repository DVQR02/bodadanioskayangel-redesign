"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import site from "@/content/site.json";

const links = [
  { href: "/#historia", label: "Nosotros" },
  { href: "/#evento", label: "El Gran Día" },
  { href: "/#viaje", label: "Cómo llegar" },
  { href: "/#cortejo", label: "El Cortejo" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`site-nav no-print fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "is-scrolled bg-crema/85 backdrop-blur-md shadow-soft"
          : "is-hero bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span
            role="img"
            aria-label={`Monograma de ${site.novios.nombres}`}
            className="navbar-monogram w-11 h-10 md:w-12 md:h-11"
          />
          <span className="navbar-date hidden sm:block text-xs uppercase tracking-[0.3em] text-lavanda-700/70">
            {site.fecha.legible_corto}
          </span>
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
          className="md:hidden p-2 text-lavanda-700"
        >
          <span className="navbar-hamburger-line block w-6 h-0.5 bg-lavanda-700 mb-1.5" />
          <span className="navbar-hamburger-line block w-6 h-0.5 bg-lavanda-700 mb-1.5" />
          <span className="navbar-hamburger-line block w-6 h-0.5 bg-lavanda-700" />
        </button>

        <ul className="hidden md:flex items-center gap-5 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="navbar-link text-tinta/80 hover:text-lavanda-700 transition"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.redes.spotifyPlaylistUrl}
              target="_blank"
              rel="noopener"
              title="Abrir la playlist en Spotify"
              className="navbar-spotify px-3 py-2 rounded-full border border-lavanda-300 text-lavanda-900 hover:bg-lavanda-50 transition text-sm"
            >
              🎵 Spotify
            </a>
          </li>
          <li>
            <Link
              href="/#rsvp"
              className="px-4 py-2 rounded-full bg-lavanda-600 text-white text-sm hover:bg-lavanda-700 transition"
            >
              Confirmar asistencia
            </Link>
          </li>
        </ul>
      </div>

      {open && (
        <ul className="md:hidden bg-crema/95 backdrop-blur-md border-t border-lavanda-200 px-4 py-3 flex flex-col gap-3 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-1.5 text-tinta/80 hover:text-lavanda-700"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.redes.spotifyPlaylistUrl}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="navbar-spotify block py-1.5 text-lavanda-900"
            >
              🎵 Abrir en Spotify
            </a>
          </li>
          <li>
            <Link
              href="/#rsvp"
              onClick={() => setOpen(false)}
              className="block py-2 px-4 rounded-full bg-lavanda-600 text-white text-center"
            >
              Confirmar asistencia
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
