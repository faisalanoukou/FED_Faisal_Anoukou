// JavaScript Document
console.log("hi");

// Code van ChatGPT
document.addEventListener("DOMContentLoaded", () => {
    const dropdownTrigger = document.querySelector("li:nth-child(3) > a");
    const dropdownMenu = document.querySelector(".dropDown");

    if (!dropdownTrigger || !dropdownMenu) return;

    dropdownTrigger.addEventListener("click", (e) => {
        e.preventDefault(); 
        dropdownMenu.style.display =
            dropdownMenu.style.display === "flex" ? "none" : "flex";
    });

document.addEventListener("click", (e) => {
    if (
        dropdownMenu.style.display === "flex" &&
        !dropdownMenu.contains(e.target) &&
        e.target !== dropdownTrigger &&
        !dropdownTrigger.contains(e.target)
        ) {
        dropdownMenu.style.display = "none";
        }
    });
});