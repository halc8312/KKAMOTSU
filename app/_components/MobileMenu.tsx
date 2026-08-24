"use client";

import { useEffect, useRef } from "react";

import { navItems } from "../_data/recruitment";
import { MenuIcon } from "./Icons";

const desktopMediaQuery = "(min-width: 901px)";

export function MobileMenu() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  };

  useEffect(() => {
    const menu = menuRef.current;
    const summary = summaryRef.current;
    const desktopMedia = window.matchMedia(desktopMediaQuery);

    if (!menu) return;

    const handleOutsidePointer = (event: PointerEvent) => {
      if (menu.open && event.target instanceof Node && !menu.contains(event.target)) {
        menu.open = false;
      }
    };

    const handleOutsideFocus = (event: FocusEvent) => {
      if (menu.open && event.target instanceof Node && !menu.contains(event.target)) {
        menu.open = false;
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !menu.open) return;

      event.preventDefault();
      menu.open = false;
      summary?.focus();
    };

    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        menu.open = false;
      }
    };

    document.addEventListener("pointerdown", handleOutsidePointer);
    document.addEventListener("focusin", handleOutsideFocus);
    document.addEventListener("keydown", handleEscape);
    desktopMedia.addEventListener("change", handleDesktopChange);

    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointer);
      document.removeEventListener("focusin", handleOutsideFocus);
      document.removeEventListener("keydown", handleEscape);
      desktopMedia.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  return (
    <details className="rs-mobile-menu" ref={menuRef}>
      <summary ref={summaryRef}>
        <MenuIcon />
        <span>メニュー</span>
      </summary>
      <nav aria-label="モバイルナビゲーション">
        {navItems.map(([href, label]) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a className="rs-menu-entry" href="#entry" onClick={closeMenu}>応募・相談</a>
      </nav>
    </details>
  );
}
