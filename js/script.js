document.addEventListener("DOMContentLoaded", function () {
  console.log("Joel Mokolo portfolio loaded.");

  /* ── Mobile nav toggle ── */
  window.toggleNav = function () {
    var links = document.querySelector(".nav-links");
    if (links) links.classList.toggle("open");
  };

  /* Close mobile nav when a link is clicked */
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      var links = document.querySelector(".nav-links");
      if (links) links.classList.remove("open");
    });
  });

  /* ── Scroll-reveal: fade cards in as they enter viewport ── */
  var targets = document.querySelectorAll(".card, .skill-card, .cred-item, .timeline-item, .edu-card");

  targets.forEach(function (el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity 0.45s ease, transform 0.45s ease";
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });

  /* ── Active nav link highlight on scroll ── */
  var sections = document.querySelectorAll("section[id], header[id]");
  var navLinks = document.querySelectorAll(".nav-links a");

  var scrollSpy = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.style.color = "";
            link.style.background = "";
          });
          var active = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
          if (active) {
            active.style.color = "var(--nhs)";
            active.style.background = "var(--nhs-light)";
          }
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach(function (s) { scrollSpy.observe(s); });
});
