const blogTitle = document.querySelector(".blog-title");
const blogPara = document.querySelector(".blog-para");

blogTitle.addEventListener("click", (e) => {
    e.target.contentEditable = true;
})

blogPara.addEventListener("click", (e) => {
    e.target.contentEditable = true;
})