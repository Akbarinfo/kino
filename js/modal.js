/// modal qismi
const elMov = document.querySelector('.featured__list');
const elModal = document.querySelector('.fmodal');
const elModalM = document.querySelector('#id-modal-main');
const elDelModal = document.querySelector('#id-delModal');

function funFilms(e) {
  let a = e.path[1].id;

  movies.forEach((item) => {
    if(a == item.imdbId) {
      let items = document.createElement('div');
      items.className = "fmodal__item d-flex";
      items.innerHTML = `
      <button class="fmodal__btndel" id="id-delModal" onclick="funDel(event)"><i class='bx bxs-x-circle'></i></button>
      <div class="fmodal__box">
      <h2 class="fmodal__name">${item.title}</h2>

      <div class="fmodal__video">
        <iframe width="100%" height="270" src="https://www.youtube-nocookie.com/embed/${item.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
      <div class="fmodal__info">
        <div class="fmodal__rtinfo d-flex justify-content-between algin-items">
          <span class="fmodal__rt"><i class='bx bxs-star fmodal__star'></i> ${item.imdbRating}</span>
          <span class="fmodal__date"><i class='bx bxs-calendar fmodal__calen'></i> ${item.year}</span>
          <span class="fmodal__time"><i class='bx bx-time fmodal__ticon' ></i> ${item.runtime}min</span>
        </div>
        <p class="fmodal__cate">${item.categories}</p>
        <p class="fmodal__desc">${item.summary}</p>

        <div class="fmodal__pod d-flex justify-content-between align-items-center">
          <a class="fmodal__link" href="#">SHow on IMDB <i class='bx bx-link-external fmodal__ex'></i></a>
          <button class="fmodal__btn"><i class='bx bxs-bookmark fmodal__book'></i> Bookmark</button>
        </div>
      </div>
      `
      elModalM.textContent = null;
      elModalM.appendChild(items)
      elModal.style.display = "flex";
      elbody.style.overflow = 'hidden';
    }
  })
}

function funDel() {
  elModal.style.display = "none";
  elbody.style.overflow = 'auto';
}