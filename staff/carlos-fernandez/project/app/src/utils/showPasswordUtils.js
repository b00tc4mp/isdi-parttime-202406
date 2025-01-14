export const showPassword = (buttonSelector, inputSelector) => {
  document
    .querySelectorAll(`[data-${buttonSelector}="true"]`)[0]
    .classList.toggle("swap-active");
  const element = document.getElementById(inputSelector);
  element.type = element.type === "text" ? "password" : "text";
};
