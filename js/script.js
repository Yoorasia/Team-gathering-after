// underline
let horizontalBar = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll(".navbar ul a");
function horizontalIndicator(e) {
horizontalBar.style.left = e.offsetLeft + "px";
horizontalBar.style.width = e.offsetWidth + "px";
horizontalBar.style.top = e.offsetTop + e.offsetHeight + "px";
}

horizontalMenus.forEach((menu) =>
menu.addEventListener("click", (e) =>
    horizontalIndicator(e.currentTarget)
)
);

// 햄버거메뉴
document.getElementById("mobile-menu").addEventListener("click", function() {
    document.querySelector(".menu-toggle").classList.toggle("active");
    document.querySelector(".navbar").classList.toggle("mobile-nav");
});