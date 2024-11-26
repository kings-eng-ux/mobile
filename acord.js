const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        
        if (content.style.display === 'block') {
            content.style.display = 'none'; 
        } else {
            content.style.display = 'block';
        }

        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== this) {
                const otherContent = otherHeader.nextElementSibling;
                otherContent.style.display = 'none'; 
            }
        });

        this.classList.toggle('active');
    });
});

const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (username.length < 5 || username.length >12) {
        alert("usernsame must be greater than 5 and les than 12 characters ");
        e.preventDefault();
    }
})


const navItem = document.getElementById("navItem");
Menu.addEventListener("click",()=>{
    navItem.classList.toggle("hidden");
});