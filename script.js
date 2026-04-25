document.addEventListener("DOMContentLoaded", function () {

  // ===============================
  // Sidebar Menu
  // ===============================
  const openMenu = document.querySelector(".open-menu");
  const closeMenu = document.querySelector(".close-menu");
  const sidebar = document.querySelector(".side-bar");
  const sidebarLinks = document.querySelectorAll(".side-bar a");

  if (openMenu) {
    openMenu.addEventListener("click", function (e) {
      e.preventDefault();
      sidebar.style.display = "flex";
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", function (e) {
      e.preventDefault();
      sidebar.style.display = "none";
    });
  }

  // Close sidebar on link click
  sidebarLinks.forEach(link => {
    link.addEventListener("click", function () {
      sidebar.style.display = "none";
    });
  });

  // Close sidebar when click outside
  document.addEventListener("click", function (e) {
    if (
      sidebar.style.display === "flex" &&
      !sidebar.contains(e.target) &&
      !openMenu.contains(e.target)
    ) {
      sidebar.style.display = "none";
    }
  });

  // ===============================
  // Resume Download
  // ===============================
  const resumeBtn = document.querySelector(".resume-btn");

  if (resumeBtn) {
    resumeBtn.addEventListener("click", function () {
      const fileUrl = "ravi-dhanval-webdev.pdf";
      const fileName = "ravi-dhanval-webdev.pdf";

      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // ===============================
  // Navbar Shadow on Scroll
  // ===============================
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 30) {
      nav.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
    } else {
      nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
    }
  });

});
