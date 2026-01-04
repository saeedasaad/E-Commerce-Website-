// scoll button
const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Show / hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.remove("opacity-0", "invisible");
      scrollTopBtn.classList.add("opacity-100", "visible");
    } else {
      scrollTopBtn.classList.add("opacity-0", "invisible");
      scrollTopBtn.classList.remove("opacity-100", "visible");
    }
  });

  // Scroll smoothly to top
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

// menu Btn
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = mobileMenu.querySelectorAll("a");

  // Toggle menu on button click
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close menu when clicking any mobile link
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });