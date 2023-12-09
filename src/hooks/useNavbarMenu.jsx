export const UseNavbarMenu = (activeScrollTransperency) => {
  let navbarColor = "" | "navbar-transparent";

  const updateNavbarColor = () => {
    if (
      (document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399) &&
      activeScrollTransperency === true
    ) {
      navbarColor = "";
    } else if (
      (document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400) &&
      activeScrollTransperency === true
    ) {
      navbarColor = "navbar-transparent";
    }
  };

  const updateNavbarColorListener = () => {
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  };

  return { updateNavbarColor, updateNavbarColorListener, navbarColor };
};
