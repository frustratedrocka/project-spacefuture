lightbox.njk:

Replace addEventListener function with:

document.addEventListener("click", function (e) {
  if (overlay.classList.contains("is-open")) {
    closeLightbox();
    return;
  }

  // Skip lightbox for notes explicitly opting out
  if (document.querySelector("main.content.no-image-lightbox")) return;

  var target = e.target.closest(".content img, .content svg");
  if (!target || e.target.closest("a, button")) return;
  // Small UI glyphs (collapse chevrons, callout icons) are not content
  if (target.matches("svg") && (target.classList.contains("svg-icon") || target.closest(".callout-title"))) return;



lightbox.scss: Replace first 4 lines with:

.content:not(.no-image-lightbox) img,
.content:not(.no-image-lightbox) svg:not(.svg-icon) {
  cursor: zoom-in;
}