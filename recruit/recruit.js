const stickyBar = document.querySelector(".jobs-sticky");

// Without measurement support, keep the contact links in the document flow.
if (stickyBar && "ResizeObserver" in window) {
  const root = document.documentElement;
  const reserveSpace = () => {
    root.style.setProperty("--jobs-sticky-height", `${stickyBar.getBoundingClientRect().height}px`);
  };

  const observer = new ResizeObserver(reserveSpace);
  root.classList.add("has-jobs-sticky");
  observer.observe(stickyBar, { box: "border-box" });
  reserveSpace();
}
