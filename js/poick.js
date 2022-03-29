// search
const elForm = document.querySelector('form');
const elInPoick = document.querySelector('#InPoick');
const elNsPoick = document.querySelector('#id-year-star');
const elNePoick = document.querySelector('#id-year-end');
const elSelect = document.querySelector('select');
const elBtnPoick = document.querySelector('#BtnPoick');
const elUlBox = document.querySelector('#id-poick');


// Bu funsiya vazifasi shundan iboratki, bunda birdaniga
// hoxlagancha o'zgaruchi yaratsa bo'ladi, namuna uchun 61 va 74 qator dagi code
function createElements(...array) {
  return array.map(el => {
    return document.createElement(el)
  })
}

// Category Filter

let category = [];
let a = 0
movies.forEach((items) => {
  category.push(...items.categories);
});

category = [...new Set(category)]

for (let i = 0; i < category.length; i++) {
  let op = document.createElement('option');
  op.setAttribute('value', category[i])
  op.textContent = category[i]
  elSelect.appendChild(op);
}

let filmNew = []

elForm.addEventListener('submit', funSearch);

function funSearch(e) {
  e.preventDefault();
  elUlBox.innerHTML = ''
  filmNew = []

  for(let j = 0; j < movies.length; j++) {
    let title = movies[j].title.toLowerCase().includes(elInPoick.value.toLowerCase())
    let year = movies[j].year;
    let cate = true
    if (elSelect.value == 'all') {
      cate = true
    } else {
      cate = movies[j].categories.includes(elSelect.value);
    }

    if (title && cate && year >= elNsPoick.value && year <= elNePoick.value) {
      filmNew.push(movies[j])
    }
  }

  if(filmNew.length == 0) {
    let [li, h1] = createElements('li', 'h1')
    li.className = 'search__item d-flex';
    h1.textContent = 'Nothing found for your request'
    li.appendChild(h1)
    elUlBox.appendChild(li)

    elInPoick.value = "";
    elNsPoick.value = "2000";
    elNePoick.value = "2018";
  } else {

  // Displayga chiarish joyi
  for(let i = 0; i < filmNew.length; i++) {
    let [li, imgdiv, img, h3] = createElements('li', 'div', 'img', 'h3');
    li.className = 'search__item d-flex';
    li.setAttribute('onclick', 'funFilm(event)');
    li.setAttribute('id', filmNew[i].imdbId);

    imgdiv.className = 'search__imgbox';
    img.className = "search__img"
    img.setAttribute('src', filmNew[i].youtubePoster);
    h3.className = 'search__name';
    h3.textContent = filmNew[i].title;

    //liga qoshish
    imgdiv.appendChild(img)
    li.appendChild(imgdiv)
    li.appendChild(h3)
    elUlBox.appendChild(li);
  }

  elInPoick.value = "";
  elNsPoick.value = "2000";
  elNePoick.value = "2018";
}
}

// modalga chiqarish joyi
function funFilm(e) {
  let a = e.path[1].id;

  console.log(a)
  console.log(e)

  filmNew.forEach((item) => {
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
