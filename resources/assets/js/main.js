(function () {
  "use strict";
  if (localStorage.getItem("foxyuxdarktheme")) {
    document.querySelector("html").setAttribute("data-theme-mode", "dark");
    document.querySelector("html").setAttribute("data-menu-styles", "transparent");
    document.querySelector("html").setAttribute("data-header-styles", "transparent");
  }
  if (localStorage.foxyuxrtl) {
    let html = document.querySelector("html");
    html.setAttribute("dir", "rtl");
    document
      .querySelector("#style")
      ?.setAttribute(
        "href",
        "build/assets/libs/bootstrap/css/bootstrap.rtl.min.css"
      );
  }
  if (localStorage.foxyuxlayout) {
    let html = document.querySelector("html");
    html.setAttribute("data-nav-layout", "horizontal");
    document.querySelector("html").setAttribute("data-menu-styles", "transparent");
     html.setAttribute("data-vertical-style", "");
  }
  if (localStorage.getItem("foxyuxlayout") == "horizontal") {
    document
      .querySelector("html")
      .setAttribute("data-nav-layout", "horizontal");
  }
  if (localStorage.loaderEnable == "true") {
    document.querySelector("html").setAttribute("loader", "enable");
  } else {
    if (!document.querySelector("html").getAttribute("loader")) {
      document.querySelector("html").setAttribute("loader", "disable");
    }
  }

  function localStorageBackup() {
    // if there is a value stored, update color picker and background color
    // Used to retrive the data from local storage
    if (localStorage.primaryRGB) {
      if (document.querySelector(".theme-container-primary")) {
        document.querySelector(".theme-container-primary").value =
          localStorage.primaryRGB;
      }
      document
        .querySelector("html")
        .style.setProperty("--primary-rgb", localStorage.primaryRGB);
    }
    if (localStorage.bodyBgRGB && localStorage.bodylightRGB) {
      if (document.querySelector(".theme-container-background")) {
        document.querySelector(".theme-container-background").value = localStorage.bodyBgRGB;
      }
      document.querySelector("html").style.setProperty("--body-bg-rgb", localStorage.bodyBgRGB);
      document.querySelector("html").style.setProperty("--body-bg-rgb2", localStorage.bodylightRGB);
      document.querySelector("html").style.setProperty("--light-rgb", localStorage.bodylightRGB);
      document.querySelector("html").style.setProperty("--form-control-bg",`rgb(${localStorage.bodylightRGB})`);
      document.querySelector("html").style.setProperty("--gray-3", `rgb(${localStorage.bodylightRGB})`);
      document.querySelector("html").style.setProperty("--input-border", "rgba(255,255,255,0.1)");
      let html = document.querySelector("html");
      html.setAttribute("data-theme-mode", "dark");
      html.setAttribute("data-menu-styles", "dark");
      html.setAttribute("data-header-styles", "dark");
    }
    if (localStorage.foxyuxdarktheme) {
      let html = document.querySelector("html");
      html.setAttribute("data-theme-mode", "dark");
    }
    if (localStorage.foxyuxlayout) {
      let html = document.querySelector("html");
      let layoutValue = localStorage.getItem("foxyuxlayout");
      html.setAttribute("data-nav-layout", "horizontal");
      html.setAttribute("data-nav-style", "menu-click");
    }
    if (localStorage.foxyuxverticalstyles) {
      let html = document.querySelector("html");
      let verticalStyles = localStorage.getItem("foxyuxverticalstyles");

      if (verticalStyles == "default") {
        html.setAttribute("data-vertical-style", "default");
        localStorage.removeItem("foxyuxnavstyles");
      }
      if (verticalStyles == "closed") {
        html.setAttribute("data-vertical-style", "closed");
        localStorage.removeItem("foxyuxnavstyles");
      }
      if (verticalStyles == "icontext") {
        html.setAttribute("data-vertical-style", "icontext");
        localStorage.removeItem("foxyuxnavstyles");
      }
      if (verticalStyles == "overlay") {
        html.setAttribute("data-vertical-style", "overlay");
        localStorage.removeItem("foxyuxnavstyles");
      }
      if (verticalStyles == "detached") {
        html.setAttribute("data-vertical-style", "detached");
        localStorage.removeItem("foxyuxnavstyles");
      }
      if (verticalStyles == "doublemenu") {
        html.setAttribute("data-vertical-style", "doublemenu");
        localStorage.removeItem("foxyuxnavstyles");
        setTimeout(() => {
          const menuSlideItem = document.querySelectorAll(
            ".main-menu > li > .side-menu__item"
          );

          // Create the tooltip element
          const tooltip = document.createElement("div");
          tooltip.className = "custome-tooltip";
          // Set the CSS properties of the tooltip element
          tooltip.style.setProperty("position", "fixed");
          tooltip.style.setProperty("display", "none"); 
          tooltip.style.setProperty("padding", "0.5rem"); 
          tooltip.style.setProperty("font-weight", "500");
          tooltip.style.setProperty("font-size", "0.75rem");
          tooltip.style.setProperty("background-color", "rgb(15, 23 ,42)");
          tooltip.style.setProperty("color", "rgb(255, 255 ,255)");
          tooltip.style.setProperty("margin-inline-start", "48px");
          tooltip.style.setProperty("border-radius", "0.25rem");
          tooltip.style.setProperty("z-index", "99");

          menuSlideItem.forEach((e) => {
            // Add an event listener to the menu slide item to show the tooltip
            e.addEventListener("mouseenter", () => {
              if (localStorage.foxyuxverticalstyles == "doublemenu") {
                tooltip.style.setProperty("display", "block");
                tooltip.textContent =
                  e.querySelector(".side-menu__label").textContent;
                if (
                  document
                    .querySelector("html")
                    .getAttribute("data-vertical-style") == "doublemenu"
                ) {
                  e.appendChild(tooltip);
                }
              }
            });

            // Add an event listener to hide the tooltip
            e.addEventListener("mouseleave", () => {
              tooltip.style.setProperty("display", "none");
              tooltip.textContent =
                e.querySelector(".side-menu__label").textContent;
            });
          });
        }, 1000);
      }
    }
    if (localStorage.foxyuxnavstyles) {
      let html = document.querySelector("html");
      let navStyles = localStorage.getItem("foxyuxnavstyles");
      if (navStyles == "menu-click") {
        html.setAttribute("data-nav-style", "menu-click");
        localStorage.removeItem("foxyuxverticalstyles");
        html.removeAttribute("data-vertical-style");
      }
      if (navStyles == "menu-hover") {
        html.setAttribute("data-nav-style", "menu-hover");
        localStorage.removeItem("foxyuxverticalstyles");
        html.removeAttribute("data-vertical-style");
      }
      if (navStyles == "icon-click") {
        html.setAttribute("data-nav-style", "icon-click");
        localStorage.removeItem("foxyuxverticalstyles");
        html.removeAttribute("data-vertical-style");
      }
      if (navStyles == "icon-hover") {
        html.setAttribute("data-nav-style", "icon-hover");
        localStorage.removeItem("foxyuxverticalstyles");
        html.removeAttribute("data-vertical-style");
      }
    }
    if (localStorage.foxyuxregular) {
      let html = document.querySelector("html");
      html.setAttribute("data-page-style", "regular");
      let containerDiv = document.querySelector('.page-container');
      if (containerDiv) {
          containerDiv.classList.remove('main-body-container');
      }
    }
    if (localStorage.foxyuxclassic) {
      let html = document.querySelector("html");
      html.setAttribute("data-page-style", "classic");
      let containerDiv = document.querySelector('.page-container');
      if (containerDiv) {
          containerDiv.classList.remove('main-body-container');
      }
    }
    if (localStorage.foxyuxmodern) {
      let html = document.querySelector("html");
      html.setAttribute("data-page-style", "modern");
      let containerDiv = document.querySelector('.page-container');
      if (containerDiv) {
          containerDiv.classList.remove('main-body-container');
      }
    }
    if (localStorage.foxyuxflat) {
      let html = document.querySelector("html");
      html.setAttribute("data-page-style", "flat");
      let containerDiv = document.querySelector('.page-container');
      if (containerDiv) {
          containerDiv.classList.add('main-body-container');
      }
    }
    if (localStorage.foxyuxdefaultwidth) {
      let html = document.querySelector("html");
      html.setAttribute("data-width", "default");
    }
    if (localStorage.foxyuxboxed) {
      let html = document.querySelector("html");
      html.setAttribute("data-width", "boxed");
    }
    if (localStorage.foxyuxfullwidth) {
      let html = document.querySelector("html");
      html.setAttribute("data-width", "fullwidth");
    }
    if (localStorage.foxyuxheaderfixed) {
      let html = document.querySelector("html");
      html.setAttribute("data-header-position", "fixed");
    }
    if (localStorage.foxyuxheaderscrollable) {
      let html = document.querySelector("html");
      html.setAttribute("data-header-position", "scrollable");
    }
    if (localStorage.foxyuxmenufixed) {
      let html = document.querySelector("html");
      html.setAttribute("data-menu-position", "fixed");
    }
    if (localStorage.foxyuxmenuscrollable) {
      let html = document.querySelector("html");
      html.setAttribute("data-menu-position", "scrollable");
    }
    if (localStorage.foxyuxMenu) {
      let html = document.querySelector("html");
      let menuValue = localStorage.getItem("foxyuxMenu");
      switch (menuValue) {
        case "light":
          html.setAttribute("data-menu-styles", "light");
          break;
        case "dark":
          html.setAttribute("data-menu-styles", "dark");
          break;
        case "color":
          html.setAttribute("data-menu-styles", "color");
          break;
        case "gradient":
          html.setAttribute("data-menu-styles", "gradient");
          break;
        case "transparent":
          html.setAttribute("data-menu-styles", "transparent");
          break;
        default:
          break;
      }
    }
    if (localStorage.foxyuxHeader) {
      let html = document.querySelector("html");
      let headerValue = localStorage.getItem("foxyuxHeader");
      html.setAttribute("data-header-styles", headerValue);
    }
    if (localStorage.bgimg) {
      let html = document.querySelector("html");
      let value = localStorage.getItem("bgimg");
      html.setAttribute("data-bg-img", value);
    }
  }
  localStorageBackup();
})();
