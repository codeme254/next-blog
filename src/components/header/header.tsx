"use client";
import { useRef } from "react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import "./header.css";

export default function Header() {
  const navRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  function toggleNav(e: React.MouseEvent) {
    e.preventDefault();
    if (navRef.current) {
      navRef.current.classList.toggle("nav-hidden");
    }
  }

  function toggleSearchForm(e: React.MouseEvent) {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.classList.toggle("search-form-hidden");
    }
  }
  return (
    <header className="header">
      <h1 className="logo">NextBlog</h1>
      <button
        className="search-toggle-btn"
        onClick={toggleSearchForm}
        aria-label="search"
        type="button"
      >
        <FaSearch />
      </button>
      <form className="search-form search-form-hidden" ref={formRef}>
        <input type="text" placeholder="search..." className="search-input" />
        <button className="search-btn" type="submit">
          search
        </button>
      </form>
      <nav className="header-nav nav-hidden" ref={navRef}>
        <Link href="/">Home</Link>
        <Link href="/">about</Link>
        <Link href="/">projects</Link>
      </nav>
      <div className="header-controls">
        <img
          src="/dummy-avatar.jpg"
          alt="user avatar"
          className="user-avatar"
        />
        <button
          onClick={toggleNav}
          className="toggle-nav-menu-btn"
          type="button"
          aria-label="toggle menu"
        >
          <IoMdMenu />
        </button>
      </div>
    </header>
  );
}
