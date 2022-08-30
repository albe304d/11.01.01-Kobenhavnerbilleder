import "./style.css";

const darkmode = document.querySelector("#dark");
const lightmode = document.querySelector("#light");

darkmode.addEventListener("click", function () {
  document.documentElement.classList.add("dark");
});

lightmode.addEventListener("click", function () {
  document.documentElement.classList.remove("dark");
});

//herunder er et eksempel på hvis man fx kun havde en knap der kunne toggle mellem light og dark
// const darkmode = document.querySelector("#dark");

// darkmode.addEventListener("click", function () {
//   document.documentElement.classList.toggle("dark");
// });
//
//
//
//Herunder er et eksempel på toggle med darkmode med brug af local storage
//som får browseren til at huske om brugeren har valgt light eller
//darkmode (det huskes på alle sider af sitet og hvis de går ud og kommer tilbage igen)
//
//
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (
//   localStorage.theme === "dark" ||
//   (!("theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   document.documentElement.classList.add("dark");
// } else {
//   document.documentElement.classList.remove("dark");
// }

// // Whenever the user explicitly chooses light mode
// localStorage.theme = "light";

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = "dark";

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem("theme");
