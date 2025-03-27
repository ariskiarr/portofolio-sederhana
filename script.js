
document.addEventListener("DOMContentLoaded", function () {
    const moreText = document.getElementById("more-text");
    const readMoreBtn = document.getElementById("read-more-btn");

    readMoreBtn.addEventListener("click", function (event) {
        event.preventDefault(); 

        if (moreText.style.display === "none") {
            moreText.style.display = "block";
            readMoreBtn.textContent = "READ LESS";
        } else {
            moreText.style.display = "none";
            readMoreBtn.textContent = "READ MORE";
        }
    });
});



