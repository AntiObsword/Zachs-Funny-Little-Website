const blob = document.querySelector(".blob");

export const BlobAnimations = Object.freeze({
  test: "testanim",
});

export function animateBlob(animation, duration = 1, infinite = false) {
  blob.style.background = `url(spritesheets/${animation}.png)`;
  blob.style.animation = `${animation} ${duration}s ${infinite ? "infinite" : ""}`;
}
