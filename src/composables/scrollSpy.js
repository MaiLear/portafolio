export const scrollSpy = (classActive) => {
  const $sections = document.querySelectorAll("section[data-scroll-spy]");
  const callback = (entries) => {
    entries.forEach((entry) => {

      const id = entry.target.getAttribute("id");
      const $aLink = document.querySelector(
        `a[data-scroll-spy][href="#${id}"]`
      );

      if (entry.isIntersecting) {
        $aLink.parentElement.classList.add(classActive);
      } else {
        $aLink.parentElement.classList.remove(classActive);
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    rootMargin: '-250px',
    trheshold: "1.0",
  });

  $sections.forEach((element) => observer.observe(element));
};
