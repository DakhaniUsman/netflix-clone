const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        // Toggle the active class for the clicked FAQ
        faq.classList.toggle("active");

        // Close other FAQs except the clicked one
        faqs.forEach((otherfaq) => {
            if (otherfaq !== faq) {
                otherfaq.classList.remove("active");
            }
        });
    });
});
