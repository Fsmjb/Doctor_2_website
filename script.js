document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        // Toggle mobile menu visibility
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        // Close menu when clicking any nav link on mobile
        document.querySelectorAll(".nav-list a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });

        // Close menu when clicking outside of the menu and toggle button
        document.addEventListener("click", (event) => {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove("active");
            }
        });
    }
});

// FAQ Accordion Toggle
document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
        const currentItem = question.parentElement;
        
        // Optional: Close other open FAQ items
        document.querySelectorAll(".faq-item").forEach(item => {
            if (item !== currentItem) {
                item.classList.remove("active");
            }
        });

        // Toggle current item
        currentItem.classList.toggle("active");
    });
});