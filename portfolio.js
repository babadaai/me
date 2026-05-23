      function enterSite() {
        var o = document.getElementById("greeting-overlay");
        o.classList.add("fade-out");
        setTimeout(function () {
          o.style.display = "none";
        }, 1200);
        createPetals();
      }
      setTimeout(function () {
        var o = document.getElementById("greeting-overlay");
        if (o && !o.classList.contains("fade-out")) enterSite();
      }, 7000);

      function createPetals() {
        var c = document.getElementById("petals");
        var colors = ["#E07B2A", "#C9922B", "#B22222", "#8B1A1A", "#E8C068"];
        for (var i = 0; i < 18; i++) {
          var p = document.createElement("div");
          p.className = "petal";
          p.style.left = Math.random() * 100 + "vw";
          p.style.animationDuration = 8 + Math.random() * 10 + "s";
          p.style.animationDelay = Math.random() * 15 + "s";
          p.style.background =
            colors[Math.floor(Math.random() * colors.length)];
          p.style.transform = "rotate(" + Math.random() * 360 + "deg)";
          p.style.width = 8 + Math.random() * 8 + "px";
          p.style.height = 12 + Math.random() * 10 + "px";
          c.appendChild(p);
        }
      }

      // Hamburger
      document
        .getElementById("hamburger")
        .addEventListener("click", function () {
          this.classList.toggle("open");
          document.getElementById("mobile-menu").classList.toggle("open");
        });
      function closeMobile() {
        document.getElementById("hamburger").classList.remove("open");
        document.getElementById("mobile-menu").classList.remove("open");
      }

      // Navbar scroll
      window.addEventListener("scroll", function () {
        var nav = document.getElementById("navbar");
        if (window.scrollY > 80) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
      });

      // Reveal on scroll
      var ro = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              var bar = e.target.querySelector(".skill-bar-fill");
              if (bar) {
                var pct = bar.dataset.pct;
                setTimeout(function () {
                  bar.style.width = pct + "%";
                }, 100);
              }
            }
          });
        },
        { threshold: 0.15 },
      );
      document
        .querySelectorAll(".reveal,.reveal-left,.reveal-right")
        .forEach(function (el) {
          ro.observe(el);
        });

      // Parallax mountains
      window.addEventListener("scroll", function () {
        var s = window.scrollY;
        if (s < window.innerHeight) {
          var mb = document.querySelector(".mountains-back");
          var mf = document.querySelector(".mountains-front");
          if (mb) mb.style.transform = "translateY(" + s * 0.15 + "px)";
          if (mf) mf.style.transform = "translateY(" + s * 0.25 + "px)";
        }
      });

      // Smooth nav
      document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener("click", function (e) {
          var t = document.querySelector(a.getAttribute("href"));
          if (t) {
            e.preventDefault();
            t.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    
