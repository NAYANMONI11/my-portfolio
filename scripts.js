document.addEventListener("DOMContentLoaded", () => {
    // Get modal elements
    const aboutModal = document.getElementById("about-modal");
    const portfolioModal = document.getElementById("portfolio-modal");

    // Get buttons that open the modals
    const aboutButton = document.querySelector(".navbar a[href='#about']");
    const portfolioButton = document.querySelector(".navbar a[href='#portfolio']");

    // Get the <span> elements that close the modals
    const closeAboutModal = document.querySelector("#about-modal .close");
    const closePortfolioModal = document.querySelector("#portfolio-modal .close");

    // Open About Modal
    aboutButton.addEventListener("click", (event) => {
        event.preventDefault();
        aboutModal.style.display = "flex";
    });

    // Open Portfolio Modal
    portfolioButton.addEventListener("click", (event) => {
        event.preventDefault();
        portfolioModal.style.display = "flex";
    });

    // Close About Modal
    closeAboutModal.addEventListener("click", () => {
        aboutModal.style.display = "none";
    });

    // Close Portfolio Modal
    closePortfolioModal.addEventListener("click", () => {
        portfolioModal.style.display = "none";
    });

    // Close Modals by clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === aboutModal) {
            aboutModal.style.display = "none";
        } else if (event.target === portfolioModal) {
            portfolioModal.style.display = "none";
        }
    });

    // Scroll to contact form when button clicked
    const scrollToContact = () => {
        document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    };

    // Handle form submission
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Compose the mailto link
        <a href="mailto:monin2771@gmail.com">Send Email</a>

        window.location.href = mailtoLink;
    });
    
});
