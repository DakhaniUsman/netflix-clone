const faq = document.querySelectorAll(".faq");
console.log(faq);

faq.forEach((faq)=> {
    faq.addEventListener('click', () => {
        if(faq.classList.contains("active")){
            faq.classList.remove("active")
        }
        else{
            faq.classList.add("active");
        }
    })

})
