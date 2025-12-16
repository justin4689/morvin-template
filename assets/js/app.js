!(function (n) {
  "use strict";
  function s() {
    for (
      var e = document
          .getElementById("topnav-menu-content")
          .getElementsByTagName("a"),
        t = 0,
        n = e.length;
      t < n;
      t++
    )
      "nav-item dropdown active" === e[t].parentElement.getAttribute("class") &&
        (e[t].parentElement.classList.remove("active"),
        e[t].nextElementSibling.classList.remove("show"));
  }
  // function t(e) {
  //   1 == n("#light-mode-switch").prop("checked") && "light-mode-switch" === e
  //     ? (n("html").removeAttr("dir"),
  //       n("#dark-mode-switch").prop("checked", !1),
  //       n("#rtl-mode-switch").prop("checked", !1),
  //       n("#bootstrap-style").attr("href", "assets/css/bootstrap.min.css"),
  //       n("#app-style").attr("href", "assets/css/app.min.css"),
  //       sessionStorage.setItem("is_visited", "light-mode-switch"))
  //     : 1 == n("#dark-mode-switch").prop("checked") && "dark-mode-switch" === e
  //     ? (n("html").removeAttr("dir"),
  //       n("#light-mode-switch").prop("checked", !1),
  //       n("#rtl-mode-switch").prop("checked", !1),
  //       n("#bootstrap-style").attr("href", "assets/css/bootstrap-dark.min.css"),
  //       n("#app-style").attr("href", "assets/css/app-dark.min.css"),
  //       sessionStorage.setItem("is_visited", "dark-mode-switch"))
  //     : 1 == n("#rtl-mode-switch").prop("checked") &&
  //       "rtl-mode-switch" === e &&
  //       (n("#light-mode-switch").prop("checked", !1),
  //       n("#dark-mode-switch").prop("checked", !1),
  //       n("#bootstrap-style").attr("href", "assets/css/bootstrap-rtl.min.css"),
  //       n("#app-style").attr("href", "assets/css/app-rtl.min.css"),
  //       n("html").attr("dir", "rtl"),
  //       sessionStorage.setItem("is_visited", "rtl-mode-switch"));
  // }
  function t(e) {
    var $light = n("#light-mode-switch"),
      $dark = n("#dark-mode-switch"),
      $rtl = n("#rtl-mode-switch"),
      $target = n("#" + e);

    if ("light-mode-switch" === e && $light.prop("checked")) {
      n("html").removeAttr("dir"),
        $dark.prop("checked", !1),
        $rtl.prop("checked", !1);
    } else if ("dark-mode-switch" === e && $dark.prop("checked")) {
      n("html").removeAttr("dir"),
        $light.prop("checked", !1),
        $rtl.prop("checked", !1);
    } else if ("rtl-mode-switch" === e && $rtl.prop("checked")) {
      $light.prop("checked", !1),
        $dark.prop("checked", !1),
        n("html").attr("dir", "rtl");
    }

    if ($target.length && $target.prop("checked")) {
      var bsStyle = $target.data("bsstyle"),
        appStyle = $target.data("appstyle");

      bsStyle && n("#bootstrap-style").attr("href", bsStyle),
        appStyle && n("#app-style").attr("href", appStyle),
        window.sessionStorage && sessionStorage.setItem("is_visited", e);
    }
  }
  function e() {
    document.webkitIsFullScreen ||
      document.mozFullScreen ||
      document.msFullscreenElement ||
      (console.log("pressed"), n("body").removeClass("fullscreen-enable"));
  }
  var a;
  n("#side-menu").metisMenu(),
    n("#vertical-menu-btn").on("click", function (e) {
      e.preventDefault(),
        n("body").toggleClass("sidebar-enable"),
        992 <= n(window).width()
          ? n("body").toggleClass("vertical-collpsed")
          : n("body").removeClass("vertical-collpsed");
    }),
    n("body,html").click(function (e) {
      var t = n("#vertical-menu-btn");
      t.is(e.target) ||
        0 !== t.has(e.target).length ||
        e.target.closest("div.vertical-menu") ||
        n("body").removeClass("sidebar-enable");
    }),
    n("#sidebar-menu a").each(function () {
      var e = window.location.href.split(/[?#]/)[0];
      this.href == e &&
        (n(this).addClass("active"),
        n(this).parent().addClass("mm-active"),
        n(this).parent().parent().addClass("mm-show"),
        n(this).parent().parent().prev().addClass("mm-active"),
        n(this).parent().parent().parent().addClass("mm-active"),
        n(this).parent().parent().parent().parent().addClass("mm-show"),
        n(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("mm-active"));
    }),
    n(".navbar-nav a").each(function () {
      var e = window.location.href.split(/[?#]/)[0];
      this.href == e &&
        (n(this).addClass("active"),
        n(this).parent().addClass("active"),
        n(this).parent().parent().addClass("active"),
        n(this).parent().parent().parent().addClass("active"),
        n(this).parent().parent().parent().parent().addClass("active"),
        n(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("active"));
    }),
    n(document).ready(function () {
      var e;
      0 < n("#sidebar-menu").length &&
        0 < n("#sidebar-menu .mm-active .active").length &&
        300 < (e = n("#sidebar-menu .mm-active .active").offset().top) &&
        ((e -= 300),
        n(".vertical-menu .simplebar-content-wrapper").animate(
          { scrollTop: e },
          "slow"
        ));
    }),
    n('[data-toggle="fullscreen"]').on("click", function (e) {
      e.preventDefault(),
        n("body").toggleClass("fullscreen-enable"),
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement
          ? document.cancelFullScreen
            ? document.cancelFullScreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitCancelFullScreen &&
              document.webkitCancelFullScreen()
          : document.documentElement.requestFullscreen
          ? document.documentElement.requestFullscreen()
          : document.documentElement.mozRequestFullScreen
          ? document.documentElement.mozRequestFullScreen()
          : document.documentElement.webkitRequestFullscreen &&
            document.documentElement.webkitRequestFullscreen(
              Element.ALLOW_KEYBOARD_INPUT
            );
    }),
    document.addEventListener("fullscreenchange", e),
    document.addEventListener("webkitfullscreenchange", e),
    document.addEventListener("mozfullscreenchange", e),
    n(".right-bar-toggle").on("click", function (e) {
      n("body").toggleClass("right-bar-enabled");
    }),
    n(document).on("click", "body", function (e) {
      0 < n(e.target).closest(".right-bar-toggle, .right-bar").length ||
        n("body").removeClass("right-bar-enabled");
    }),
    (function () {
      if (document.getElementById("topnav-menu-content")) {
        for (
          var e = document
              .getElementById("topnav-menu-content")
              .getElementsByTagName("a"),
            t = 0,
            n = e.length;
          t < n;
          t++
        )
          e[t].onclick = function (e) {
            "#" === e.target.getAttribute("href") &&
              (e.target.parentElement.classList.toggle("active"),
              e.target.nextElementSibling.classList.toggle("show"));
          };
        window.addEventListener("resize", s);
      }
    })(),
    [].slice
      .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      .map(function (e) {
        return new bootstrap.Tooltip(e);
      }),
    [].slice
      .call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      .map(function (e) {
        return new bootstrap.Popover(e);
      }),
    n(".toggle-search").on("click", function () {
      var e = n(this).data("target");
      e && n(e).toggleClass("open");
    }),
    n(window).on("load", function () {
      n("#status").fadeOut(), n("#preloader").delay(350).fadeOut("slow");
    }),
    window.sessionStorage &&
      ((a = sessionStorage.getItem("is_visited"))
        ? ("dark-mode-switch" === a
            ? (n("#bootstrap-style").attr(
                "href",
                "assets/css/bootstrap-dark.min.css"
              ),
              n("#app-style").attr("href", "assets/css/app-dark.min.css"))
            : "rtl-mode-switch" === a
            ? (n("#bootstrap-style").attr(
                "href",
                "assets/css/bootstrap-rtl.min.css"
              ),
              n("#app-style").attr("href", "assets/css/app-rtl.min.css"),
              n("html").attr("dir", "rtl"))
            : (n("#bootstrap-style").attr(
                "href",
                "assets/css/bootstrap.min.css"
              ),
              n("#app-style").attr("href", "assets/css/app.min.css")),
          n(".right-bar input:checkbox").prop("checked", !1),
          n("#" + a).prop("checked", !0),
          t(a))
        : sessionStorage.setItem("is_visited", "light-mode-switch")),
    n("#light-mode-switch, #dark-mode-switch, #rtl-mode-switch").on(
      "change",
      function (e) {
        t(e.target.id);
      }
    ),
    // Toggle dark/light mode depuis l’icône du topbar (indépendant des checkboxes)
    n("#page-header-dark-mode-switch").on("click", function (e) {
      e.preventDefault();
      var $bs = n("#bootstrap-style"),
        $app = n("#app-style"),
        hrefBs = $bs.attr("href") || "",
        isDark = hrefBs.indexOf("bootstrap-dark") !== -1,
        $icon = n(this).find("i.mdi");

      if (isDark) {
        // Dark → Light
        $bs.attr("href", "assets/css/bootstrap.min.css");
        $app.attr("href", "assets/css/app.min.css");
        window.sessionStorage &&
          sessionStorage.setItem("is_visited", "light-mode-switch");
        // synchroniser les éventuelles cases à cocher
        n("#light-mode-switch").prop("checked", !0);
        n("#dark-mode-switch").prop("checked", !1);
        // Icône : repasser en soleil pour le mode clair
        $icon
          .removeClass("mdi-weather-night")
          .addClass("mdi-white-balance-sunny");
      } else {
        // Light → Dark
        $bs.attr("href", "assets/css/bootstrap-dark.min.css");
        $app.attr("href", "assets/css/app-dark.min.css");
        window.sessionStorage &&
          sessionStorage.setItem("is_visited", "dark-mode-switch");
        // synchroniser les éventuelles cases à cocher
        n("#light-mode-switch").prop("checked", !1);
        n("#dark-mode-switch").prop("checked", !0);
        // Icône : passer en lune pour le mode sombre
        $icon
          .removeClass("mdi-white-balance-sunny")
          .addClass("mdi-weather-night");
      }
    }),
    Waves.init();
})(jQuery);
