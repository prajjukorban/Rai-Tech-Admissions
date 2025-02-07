// Mobile Navigation
function showMenu() {
    document.getElementById("navLinks").style.right = "0";
}

function hideMenu() {
    document.getElementById("navLinks").style.right = "-200px";
}

// Program Tabs
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(button.dataset.tab).classList.add('active');
        });
    });

    // Form Submission
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your application! We will contact you soon.');
            admissionForm.reset();
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                hideMenu();
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Dynamic Copyright Year
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('.footer-bottom');
    if (yearSpan) {
        yearSpan.innerHTML = `<p>&copy; ${new Date().getFullYear()} Rai Technology University. All rights reserved.</p>`;
    }
});

function openPopup(item) {
    let popup = document.createElement("div");
    popup.id = "popup";
    popup.className = "popup";

    popup.innerHTML = `
        <button id="close" onclick="closePopup()">X</button>
        <div class="contact-form">
            <form id="admissionForm">
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <input type="tel" placeholder="Phone Number" required>
                <select required>
                    <option value="" selected>${item}</option>
                    <option value="btech-cs">B. Tech(Advance) in collaboration with IBM – Computer Science & Engineering</option>
                    <option value="btech-it">B. Tech(Advance) in collaboration with IBM – Information Technology</option>
                    <option value="bpharm">B.Pharm. – Bachelor of Pharmacy</option>
                    <option value="biotech">B.Sc.(Hons.) – Biotechnology</option>
                    <option value="microbio">B.Sc (Hons.) – Microbiology</option>
                    <option value="bba">BBA (Hons.) – Digital Marketing / Applied HR / Finance / Marketing</option>
                    <option value="it">B.Sc. (Hons.) – Information Technology</option>
                    <option value="bca">BCA (Hons.) – Web Design & Multimedia</option>
                    <option value="cse">B.Tech.- Computer Science Engineering</option>
                    <option value="mba-ibm">MBA (Advance) in collaboration with IBM</option>
                    <option value="mba">MBA – HR / Finance / Marketing / Rural Management / Business Analyst</option>
                    <option value="mca">MCA- Master in Computer Application</option>
                    <option value="msc-bio">M.Sc – Biotechnology</option>
                    <option value="msc-micro">M.Sc – Microbiology</option>
                </select>
                <button class="btn primary">Submit Application</button>
            </form>
        </div>`;

    document.body.appendChild(popup); // Append popup to the body
    popup.classList.add("active");
}

function closePopup() {
    let popup = document.getElementById("popup");
    if (popup) {
        popup.remove(); // Remove the popup from the DOM
    }
}
