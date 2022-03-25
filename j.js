const elList = document.querySelector("#main-list");
const elTop = document.getElementById("top-movie");
const elAction = document.getElementById("action");
const elCategories = document.getElementById("categories");
let newMovie = [];
let topMovie = [];
let action = [];
let cate = [];

// let elRandom = movies(Math.floor(Math.random() * movies.length));

movies.forEach((item, index) => {
  let elYear = 2018;
  if (item.year >= elYear) {
    topMovie.push({
      "title": item.title,
      "year": item.year,
      "categories": item.categories,
      "summary": item.summary,
      "imdbId": item.imdbId,
      "imdbRating": item.imdbRating,
      "runtime": item.runtime,
      "language": item.language,
      "youtubeId": item.youtubeId,
      "youtubePosterMax": item.youtubePosterMax,
      "imdbPage": item.imdbPage
    });
  }
});
topMovie.forEach((item, index) => {
  if (index < 4) {
    let li = document.createElement("li");
    li.className = 'movie__main col-3';
    li.innerHTML = `
    <div class="movie__item item">
    <div class="item__imgbox">
      <img class="item__img" src="${item.youtubePoster}" alt="movie__img">
      <div class="movie__btns d-flex align-items-center justify-content-between">
        <p class="movie__tv text-uppercase mb-0">tv series</p>
        <button class="movie__btn"><i class='bx bxs-heart' ></i></button>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between mb-3">
      <span class="item__years">USA, ${item.year}</span>
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
        More
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">About Movie</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ${item.summary}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h4 class="item__title">${item.title}</h4>
    <div class="item__box d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img class="movie__imdb" src="imgs/imdb.png" alt="imdb">
      <span class="item__range">${item.runtime}</span>
      </div>
      <div class="d-flex align-items-center">
        <i class='bx bxs-star' style='color:#d8e818'></i>
        <span class="item__percent">${item.imdbRating}</span>
      </div>
    </div>
    <div>
      <span class="item__category text-capitalize">${item.categories}</span>
    </div>
  </div>
`;
    elList.appendChild(li);
  }
});