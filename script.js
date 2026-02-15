// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    }),
  )
}

// Contact Form Handling
const contactForm = document.getElementById("contactForm")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Simple validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.")
      return
    }

    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]')
    const originalText = submitButton.innerHTML

    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
    submitButton.disabled = true

    // Simulate API call
    setTimeout(() => {
      alert("Thank you for your message! I will get back to you soon.")
      contactForm.reset()
      submitButton.innerHTML = originalText
      submitButton.disabled = false
    }, 2000)
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(15, 23, 42, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(14, 165, 233, 0.2)"
  } else {
    navbar.style.background = "rgba(15, 23, 42, 0.95)"
    navbar.style.boxShadow = "0 2px 10px rgba(14, 165, 233, 0.15)"
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".education-card, .skill-category, .certificate-card, .project-card, .experience-item",
  )

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    observer.observe(el)
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1"
})

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.3s ease-in"

  // Fade in page
  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})
