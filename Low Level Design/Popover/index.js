const button = document.getElementById("button");
const popover = document.getElementById("popover");

const implementPopOver = (popover_title, placement) => {
  popover.innerHTML = popover_title;
  popover.style.position = "absolute";
  popover.style.width = "fit-content";
  popover.style.backgroundColor = "black";
  popover.style.padding = "4px";
  popover.style.top = button.getBoundingClientRect().top + "px";
  popover.style.left = button.getBoundingClientRect().left + "px";
  popover.style.color = "white";
  popover.style.border = "1px solid black";
  if (placement === "top") {
    let top =
      button.getBoundingClientRect().top -
      button.getBoundingClientRect().height -
      popover.getBoundingClientRect().height -
      10;
    popover.style.top = top + "px";
    popover.style.left = button.getBoundingClientRect().left + "px";
  } else if (placement === "bottom") {
    let top = button.getBoundingClientRect().top + 10;
    popover.style.top = top + "px";
    popover.style.left = button.getBoundingClientRect().left + "px";
  } else if (placement === "left") {
    let top =
      button.getBoundingClientRect().top -
      button.getBoundingClientRect().height;
    let left =
      button.getBoundingClientRect().left -
      popover.getBoundingClientRect().width -
      10;
    popover.style.top = top + "px";
    popover.style.left = left + "px";
  } else {
    let top =
      button.getBoundingClientRect().top -
      button.getBoundingClientRect().height;
    let right =
      button.getBoundingClientRect().left +
      button.getBoundingClientRect().width +
      10;
    popover.style.top = top + "px";
    popover.style.left = right + "px";
  }
};

button.addEventListener("mouseover", (e) => {
  implementPopOver(
    e.target.attributes.popover_title.value,
    e.target.attributes.placement.value
  );
});

button.addEventListener("mouseout", (e) => {
  popover.innerHTML = null;
  popover.removeAttribute("style");
});
