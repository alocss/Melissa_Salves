"use client";
import { useEffect } from "react";
export function SiteExperience() {
  useEffect(() => {
    const items = document.querySelectorAll("main section:not(.hero)");
    const header = document.querySelector(".site-header");
    const updateHeader = () =>
      header?.classList.toggle("is-scrolled", window.scrollY > 24);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);
  return (
    <a className="skip-link" href="#inicio">
      Pular para o conteúdo
    </a>
  );
}
