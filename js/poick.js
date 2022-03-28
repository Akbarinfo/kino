// search
const elForm = document.querySelector('form');
const elInPoick = document.querySelector('#InPoick');
const elNsPoick = document.querySelector('#id-year-star');
const elNePoick = document.querySelector('#id-year-end');
const elSelect = document.querySelector('select');
const elBtnPoick = document.querySelector('#BtnPoick');
const elUlBox = document.querySelector('#id-poick');


// Category Filter

let category = [];
let a = 0
movies.forEach((items) => {
  category.push(...items.categories);
});
category = [...new Set(category)]


for(let i = 0; i < category.length; i++) {
  let op = document.createElement('option');
  op.setAttribute('value', category[i])
  op.textContent = category[i]
  elSelect.appendChild(op);
}

elForm.addEventListener('submit', funSearch);

  function funSearch(e) {
    e.preventDefault();
    console.log("malumot", elInPoick.value)
    console.log("start yil", elNsPoick.value)
    console.log("end yil", elNePoick.value)
    console.log('Category', elSelect.value)

    // && item.categories == elSelect.value
    let filmNew = movies.filter((item) => item.year < elNsPoick.value && item.year > elNePoick.value && item.categories == elSelect.value)
    // && item.title == elInPoick.value

    console.log(filmNew)


    // for(let i = 0; i < filmNew.length; i++) {
    //   let li = document.createElement('li');
    //   li.className = 'search__item d-flex';
    //   li.setAttribute('onclick', 'funFilms(event)');
    //   li.setAttribute('id', filmNew[i].imdbId);

    //   imgdiv.className = 'search__imgbox';
    //   img.className = "search__img"
    //   img.setAttribute('src', filmNew[i].youtubePoster);
    //   h3.className = 'search__name';
    //   h3.textContent = filmNew[i].title;

    //   //liga qoshish
    //   imgdiv.appendChild(img)
    //   li.appendChild(imgdiv)
    //   li.appendChild(h3)
    //   elUlBox.appendChild(li);
    // }


    // elInPoick.value = "What do you want to watch?";
    // elNsPoick.value = "2000";
    // elNePoick.value = "2018";

  }



// console.log(test)