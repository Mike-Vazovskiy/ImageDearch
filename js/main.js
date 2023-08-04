const searchForm = document.getElementById('searchForm');
const searchBox = document.getElementById('searchBox');
const searchResult = document.getElementById('searchResult');
const moreBtn = document.getElementById('moreBtn');
const accessKey = "tu_OuCkHqHYvsmHsorFBsRz_wsHFsm4s5Bn-THPKk4c"


let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = ""
    }

    const results = data.results;

    results.map((result) => {
        const image  = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    moreBtn.style.display = "block";
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages()
})

moreBtn.addEventListener("click", () => {
    page++;
    searchImages()
})