/**
 * ==========================================================
 * Techmate AI - Navigation Controller
 * ==========================================================
 */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    if (!header || !menuToggle || !mobileMenu) return;

    /* ========================================
       Sticky Header
    ======================================== */

    const handleScroll = () => {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    };

    window.addEventListener("scroll", handleScroll);

    /* ========================================
    Hide On Scroll
    ======================================== */

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        const currentScroll = window.scrollY;

        if (currentScroll > 120) {

            if (currentScroll > lastScroll) {

                header.classList.add("hide");

            } else {

                header.classList.remove("hide");

            }

        }

        lastScroll = currentScroll;

    });

    handleScroll();

    /* ========================================
       Toggle Mobile Menu
    ======================================== */

    const toggleMenu = () => {

        const isOpen = mobileMenu.classList.toggle("active");

        menuToggle.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        mobileMenu.setAttribute(
            "aria-hidden",
            !isOpen
        );

        document.body.classList.toggle(
            "overflow-hidden",
            isOpen
        );

    };

    menuToggle.addEventListener("click", toggleMenu);

    /* ========================================
       Close Menu
    ======================================== */

    const closeMenu = () => {

        mobileMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenu.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "overflow-hidden"
        );

    };

    mobileLinks.forEach(link => {

        link.addEventListener("click", closeMenu);

    });

    /* ========================================
       Escape Key
    ======================================== */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            mobileMenu.classList.contains("active")
        ) {

            closeMenu();

            menuToggle.focus();

        }

    });

/* ========================================
   Active Page
======================================== */

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-link").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");

    }

});

});

