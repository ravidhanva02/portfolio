const socialLinks = {
  github: "https://github.com/ravidhanva02",
  linkedin: "https://www.linkedin.com/in/ravi-dhanval-9a1b97213/",
  email: "mailto:dhanvalrj@gmail.com",
  whatsapp: "https://api.whatsapp.com/send/?phone=7566258902",
  resume: "ravi-dhanval-webdev.pdf"
};

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuClose = document.querySelector(".menu-close");
  const navPanel = document.querySelector(".nav-panel");
  const navLinks = document.querySelectorAll(".nav-link");
  const backToTop = document.querySelector(".back-to-top");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const contactForm = document.querySelector("#contact-form");
  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const closeMenu = () => {
    if (!navPanel || !menuToggle) return;
    navPanel.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  if (menuToggle && navPanel) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navPanel.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });
  }

  if (menuClose) {
    menuClose.addEventListener("click", closeMenu);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!navPanel || !menuToggle || !navPanel.classList.contains("open")) return;
    if (!navPanel.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });

  const updateHeader = () => {
    if (!header || !backToTop) return;
    const scrolled = window.scrollY > 18;
    header.classList.toggle("scrolled", scrolled);
    backToTop.classList.toggle("visible", window.scrollY > 520);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      projectCards.forEach((card) => {
        const categories = card.dataset.category || "";
        card.classList.toggle("hidden", filter !== "all" && !categories.includes(filter));
      });
    });
  });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const sections = Array.from(document.querySelectorAll("main section[id], header[id]"));
  if ("IntersectionObserver" in window) {
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => activeObserver.observe(section));
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const projectType = formData.get("project-type");
      const message = formData.get("message");
      const subject = encodeURIComponent(`Portfolio inquiry: ${projectType}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}`
      );

      window.location.href = `mailto:dhanvalrj@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
