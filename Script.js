document.getElementById('learnMoreBtn').addEventListener('click', function() {
    alert('Thank you for your interest! We are excited to have you with us. Please explore more about our teams and events!');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation can be added here

    document.getElementById('formResponse').textContent = `Thank you, ${name}! Your message has been sent.`;
    // Clear the form
    this.reset();
});


document.querySelectorAll('.rsvpBtn').forEach(button => {
    button.addEventListener('click', function() {
        alert('Thank you for your RSVP! We look forward to seeing you at the event!');
    });
});

function openMenu(e) {
    var menuList = document.querySelector(".nav .list");
    if (e.innerHTML == "Menu") {
        e.innerHTML = "Close" ;
        menuList.style.display = "block";
    } else  {
        e.innerHTML = "Menu";
        menuList.style.display = "none";
    }
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
        alert("All fields are required!");
        return false;
    }

    // Optionally: further validation can be added here
    alert("Thank you for your message!");
    return true;
}
