//togle icon 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 550;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate');
        } 
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icn
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

//Email Settings

const form = document.querySelector("form");
const fullName= document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}
    <br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        SecureToken: "c63f35e8-b886-4a3c-9c62-27e0a38b1b5f",
        To : 'karakusataberkay@gmail.com',
        From : "karakusataberkay@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if(message == "OK"){
                Swal.fire({
                    title: "Mailiniz Başarıyla Yollandı!",
                    text: "En kısa zamanda dönüş yapacağım!",
                    icon: "success"
                  });
            }
        }
    );
};

form.addEventListener("submit",(e) => {
    e.preventDefault();

    sendEmail();
});


document.getElementById('downloadCv').addEventListener('click', function(event) {
    event.preventDefault(); 
    if (confirm('Do you wish to review my Resume')) {
        window.location.href = 'stanley_resume.pdf'; 
    }
});

document.getElementById('downloadCv2').addEventListener('click', function(event) {
    event.preventDefault(); 
    if (confirm('Do you wish to review my Resume')) {
        window.location.href = 'stanley_resume.pdf'; 
    }
});

// Get all portfolio elements
const portfolioBoxes = document.querySelectorAll('.portfolio-box');
const portfolioImages = document.querySelectorAll('.portfolio-box img');
const viewImageBtns = document.querySelectorAll('.view-image-btn');
const body = document.querySelector('body');

// Create modal elements
function createModal() {
    // Create the modal container
    const modal = document.createElement('div');
    modal.className = 'portfolio-modal';
    
    // Create the modal content container
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    // Create close button
    const closeButton = document.createElement('span');
    closeButton.className = 'close-modal';
    closeButton.innerHTML = '&times;';
    
    // Create image element
    const modalImage = document.createElement('img');
    modalImage.className = 'modal-image';
    
    // Create title element
    const modalTitle = document.createElement('h3');
    modalTitle.className = 'modal-title';
    
    // Create description element
    const modalDescription = document.createElement('p');
    modalDescription.className = 'modal-description';
    
    // Append elements to modal
    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalImage);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalDescription);
    modal.appendChild(modalContent);
    
    // Append modal to body
    body.appendChild(modal);
    
    return {
        modal,
        modalImage,
        modalTitle,
        modalDescription,
        closeButton
    };
}

// Initialize modal elements
const modalElements = createModal();

// Function to open the modal with image data
function openImageModal(portfolioBox) {
    const image = portfolioBox.querySelector('img');
    const layer = portfolioBox.querySelector('.portfolio-layer');
    const title = layer.querySelector('h4').textContent;
    const description = layer.querySelector('p').textContent;
    
    // Update modal content
    modalElements.modalImage.src = image.src;
    modalElements.modalTitle.textContent = title;
    modalElements.modalDescription.textContent = description;
    
    // Show modal
    modalElements.modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Add click event listeners to all clickable elements
portfolioImages.forEach(image => {
    image.addEventListener('click', function() {
        const portfolioBox = this.closest('.portfolio-box');
        openImageModal(portfolioBox);
    });
});

viewImageBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const portfolioBox = this.closest('.portfolio-box');
        openImageModal(portfolioBox);
    });
});

// Close modal when clicking the close button
modalElements.closeButton.addEventListener('click', function() {
    modalElements.modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside of the modal content
modalElements.modal.addEventListener('click', function(event) {
    if (event.target === modalElements.modal) {
        modalElements.modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modalElements.modal.style.display === 'flex') {
        modalElements.modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
});

