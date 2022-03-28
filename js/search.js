// Search

const elSearchBox = document.querySelector('#searchbox');
const elSearch = document.querySelector('#id-search');
const elIsearch = document.querySelector('#id-Isearch');
const elSearchBtn = document.querySelector('#id-searchBtn');
const elSearchMain = document.querySelector('#search-main');


function funMain(e) {
  let a = e.path[1].id
  let b = e.path[0].id

  console.log(b)

  if(a == elSearchBox.id || b == elSearchBox.id) {
    elSearchBox.style.display = 'none'
    elIsearch.value = ""
    elSearch.innerHTML = ''
    elbody.style.overflow = 'auto'
  }
}

elIsearch.addEventListener("focusin", myFocusFunction);

function myFocusFunction() {
    elSearchBox.style.display = 'block';
    elbody.style.overflow = 'hidden'
}


let a = 0
elIsearch.addEventListener('keyup', (e)=> {
  elSearch.innerHTML = ''
  let values = e.target.value.toLowerCase()

  if(!elIsearch.value.trim()) {
    elSearch.innerHTML = null
    elIsearch.value = null
  } else {

  for(let i = 0; i < movies.length; i++) {
    if(movies[i].title.toLowerCase().indexOf(values) != -1) {

      let [li, imgdiv, img, h3] = createElements('li', 'div', 'img', 'h3')

      li.className = 'search__item d-flex';
      li.setAttribute('onclick', 'funFilms(event)');
      li.setAttribute('id', movies[i].imdbId);

      imgdiv.className = 'search__imgbox';
      img.className = "search__img"
      img.setAttribute('src', movies[i].youtubePoster);
      h3.className = 'search__name';
      h3.textContent = movies[i].title;

      //liga qoshish
      imgdiv.appendChild(img)
      li.appendChild(imgdiv)
      li.appendChild(h3)
      elSearch.appendChild(li);
    }
  }
}
})



// // RegExp bilan qilingan qism 100% tayyor emas

// elIsearch.addEventListener('keyup', (e)=> {
//   if(!elIsearch.value.trim()) {
//     elSearch.innerHTML = null
//     elIsearch.value = null
//   } else {
//     let regExp = new RegExp(elIsearch.value, 'gi')
//     console.log(regExp)
//     let movie = movies.filter(el => el.title.match(regExp))

//     // renderSearchedFilms(movie)
//     }
// })

// function renderSearchedFilms(arr) {
//   elSearch.innerHTML = ''
//   for(let i = 0; i < arr.length; i++) {

//         let [li, imgdiv, img, h3] = createElements('li', 'div', 'img', 'h3')

//         li.className = 'search__item d-flex';
//         imgdiv.className = 'search__imgbox';
//         img.className = "search__img"
//         img.setAttribute('src', arr[i].youtubePosterMax);
//         h3.className = 'search__name';
//         h3.textContent = arr[i].title;


//         li.addEventListener('click', () => {
//           console.log('aaa')
//         })

//         //liga qoshish
//         imgdiv.appendChild(img)
//         li.appendChild(imgdiv)
//         li.appendChild(h3)

//         elSearch.appendChild(li);
//     }
// }