const elMov = document.querySelector('.featured__list');
const elModal = document.querySelector('.fmodal');
const elModalM = document.querySelector('#id-modal-main');
const elDelModal = document.querySelector('#id-delModal');
const elCanvas = document.querySelector('#id-canvas');
const elLikeFilm = document.querySelectorAll('.featured__like');

const elbody = document.querySelector('body')
//element yaratish uchun funksiya

let films = []
let likeFilmArr = []

function createElements (...array) {
  return array.map(el => {
    return document.createElement(el)
  })
}

let newfilm = []

movies.forEach((item, index) =>  {

  let s = Math.floor(item.imdbRating)

  // 4ta kino chiardik bosh sahifaga

  if(index < 4) {

    newfilm.push({
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
      "youtubePoster": item.youtubePoster,
      "imdbPage": item.imdbPage
    });

    let [li, imgdiv, divcheck, checkbox, label, icon, img, infodiv, yearp, name, rtdiv, cate] = createElements('li', 'div', 'div', 'input', 'label',
    'i', 'img', 'div', 'p', 'h2', 'div','p')

    for(let i = 0; i < s; i++) {
      let a = document.createElement('i')
      a.className = 'bx bxs-star featured__star'
      rtdiv.appendChild(a)
    }

    li.setAttribute('onclick', 'funFilm(event)');
    li.setAttribute('id', item.imdbId);

    li.className = 'featured__item';
    imgdiv.className = 'featured__imgbox';
    checkbox.className = 'featured__like';
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', `t${item.imdbId}`)

    //checkbox uchun funtion yaratib ketyabmiz

    checkbox.addEventListener('click', () => {
      elCanvas.innerHTML = null

      if(!checkbox.checked) {
        console.log('if')
        likeFilmArr = likeFilmArr.filter( el => el.imdbId !== checkbox.parentElement.parentElement.parentElement.id)
        films = films.filter( el => el.imdbId !== checkbox.parentElement.parentElement.parentElement.id)
        console.log(likeFilmArr)

      } else {
        console.log('else')
        films.push(newfilm.find(i => i.imdbId == checkbox.parentElement.parentElement.parentElement.id))
        likeFilmArr.push(...films.filter(e => e.imdbId == checkbox.parentElement.parentElement.parentElement.id))
      }

    ///Canvas ni ichiga joylab qoyish qismi

    likeFilmArr.forEach((item) =>  {

      let [li, imgdiv, divcheck, checkbox1, label, icon, img, infodiv, name,] = createElements('li', 'div', 'div', 'input', 'label',
      'i', 'img', 'div', 'p', 'h2')

      li.setAttribute('onclick', 'funFilm(event)');
      li.setAttribute('id', item.imdbId);

      li.className = 'canvas__item';
      imgdiv.className = 'canvas__imgbox';
      checkbox1.className = 'canvas__like';
      checkbox1.setAttribute('type', 'checkbox')
      checkbox1.setAttribute('id', `ts${item.imdbId}`)

      checkbox1.addEventListener('click', () => {
        elCanvas.innerHTML = null

        if(!checkbox1.checked) {
          likeFilmArr = likeFilmArr.filter( el => el.imdbId !== checkbox.parentElement.parentElement.parentElement.id)
          films = films.filter( el => el.imdbId !== checkbox.parentElement.parentElement.parentElement.id)

        } else {
          films.push(newfilm.find(i => i.imdbId == checkbox.parentElement.parentElement.parentElement.id))
          likeFilmArr.push(...films.filter(e => e.imdbId == checkbox.parentElement.parentElement.parentElement.id))
        }
      })

      divcheck.className = 'canvas__checkbox';
      icon.className = 'bx bx-minus canvas__like-icon'
      img.className = 'canvas__img';
      img.src = `${item.youtubePoster}`;
      infodiv.className = 'canvas__infobox';
      name.className = 'canvas__name';
      name.textContent = `${item.title}`;

      divcheck.appendChild(checkbox1);
      label.setAttribute('for', `t${item.imdbId}`)
      label.appendChild(icon);
      divcheck.appendChild(label)
      imgdiv.appendChild(img);
      imgdiv.appendChild(divcheck);
      infodiv.appendChild(name);
      li.appendChild(imgdiv);
      li.appendChild(infodiv);

      elCanvas.appendChild(li);
    });

    })

    divcheck.className = 'featured__checkbox';
    icon.className = 'bx bxs-heart featured__like-icon'
    img.className = 'featured__img';
    img.src = `${item.youtubePoster}`;
    infodiv.className = 'featured__infobox';
    yearp.className = 'featured__year';
    yearp.textContent = `${item.year}`;
    name.className = 'featured__name';
    name.textContent = `${item.title}`;
    cate.className = 'featured__cate';
    cate.textContent = `${item.categories}`;
    rtdiv.className = 'featured__rt d-flex'

    divcheck.appendChild(checkbox);
    label.setAttribute('for', `t${item.imdbId}`)
    label.appendChild(icon);
    divcheck.appendChild(label)
    imgdiv.appendChild(img);
    imgdiv.appendChild(divcheck);
    infodiv.appendChild(yearp);
    infodiv.appendChild(name);
    infodiv.appendChild(rtdiv);
    infodiv.appendChild(cate);
    li.appendChild(imgdiv);
    li.appendChild(infodiv);

    elMov.appendChild(li);
  }
});


function funFilm(e) {
  let a = e.path[2].id;

  newfilm.forEach((item) => {
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
