// ===== HERO SECTION ANIMATIONS (GSAP) =====
gsap.from(".hero-title", {
  opacity: 0,
  y: 100,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".hero-subtitle", {
  opacity: 0,
  y: 60,
  delay: 0.3,
  duration: 1,
  ease: "power4.out"
});

gsap.from(".hero-btn", {
  opacity: 0,
  scale: 0.8,
  delay: 0.6,
  duration: 0.8,
  ease: "back.out(1.7)"
});

// ===== BACKGROUND CURSOR MOVEMENT =====
document.addEventListener("mousemove", (e) => {
  gsap.to("body", {
    backgroundPosition: `${e.pageX / 10}px ${e.pageY / 10}px`,
    duration: 0.5
  });
});

// ===== SCROLLREVEAL ANIMATIONS =====
ScrollReveal().reveal('.scroll-section', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  scale: 0.95,
  easing: 'ease-out',
  interval: 200
});

ScrollReveal().reveal('.hero-title', {
  origin: 'top',
  distance: '40px',
  duration: 1000,
  delay: 300,
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.hero-subtitle', {
  origin: 'bottom',
  distance: '40px',
  duration: 1200,
  delay: 600,
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.feature-box', {
  origin: 'bottom',
  distance: '30px',
  duration: 1000,
  interval: 200,
  easing: 'ease-out'
});

// ===== TESTIMONIAL SLIDER =====
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

// Start slider loop
if (testimonials.length) {
  setInterval(nextTestimonial, 5000);
  showTestimonial(currentIndex);
}

// ===== EMAIL FORM VALIDATION AND EMAILJS SUBMISSION =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.from_name;
  const email = this.from_email;
  const message = this.message;

  // Simple client-side validation
  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert("Please fill in all fields.");
    return;
  }

  if (!validateEmail(email.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Send email via EmailJS
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (err) => {
      alert("Failed to send message. Please try again later.");
      console.error(err);
    });
});

// ===== EMAIL FORMAT VALIDATION =====
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
