
var sidebaropen = document.querySelector(".open-menu");
sidebaropen.onclick = function () {
    showSidebar = document.querySelector(".side-bar");
    showSidebar.style.display = "flex";
    return false;
}
var sidebarclose = document.querySelector(".close-menu");
sidebarclose.onclick = function () {
    showSidebar = document.querySelector(".side-bar");
    showSidebar.style.display = "none";
    return false;
}
const btn_first = document.querySelector(".resume-btn");
btn_first.addEventListener("click",function(){
    const fileUrl = "ravi-dhanval-webdev.pdf";
    const fileName = "ravi-dhanval-webdev.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    link.click();
})
