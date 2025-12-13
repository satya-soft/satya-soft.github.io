document.addEventListener("DOMContentLoaded", function () {
    // Contact Form Submission
    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
            alert("Form submitted! (This is a placeholder action)");
            // Add actual form submission logic here
        });
    }

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mainNavigation = document.getElementById("main-navigation");
    const serviceMenuItem = document.querySelector("#main-navigation .group"); // The LI element for Services
    const serviceMegaMenu = document.getElementById("services-mega-menu"); // The mega menu content (now targeted by ID)

    if (mobileMenuButton && mainNavigation) {
        mobileMenuButton.addEventListener("click", function () {
            mainNavigation.classList.toggle("hidden"); // Toggle visibility of the main navigation
        });
    }

    // Services Mega Menu Toggle for Mobile
    if (serviceMenuItem && serviceMegaMenu) {
        const isMobile = window.matchMedia("(max-width: 767px)");

        const toggleMegaMenu = function (event) {
            if (isMobile.matches) {
                event.preventDefault(); // Prevent navigation if on mobile
                serviceMegaMenu.classList.toggle("hidden"); // Toggle 'hidden' class for mobile
            }
        };

        // Add event listener to the 'Services' link
        serviceMenuItem
            .querySelector("a")
            .addEventListener("click", toggleMegaMenu);

        // Close menu when a navigation link is clicked (only on mobile)
        const navLinks = mainNavigation.querySelectorAll("a");
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                if (isMobile.matches) {
                    mainNavigation.classList.add("hidden");
                    // Also close the services mega menu if it's open and not already hidden
                    if (!serviceMegaMenu.classList.contains("hidden")) {
                        serviceMegaMenu.classList.add("hidden");
                    }
                }
            });
        });
    }
});
