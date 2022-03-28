const elNewFilm = document.querySelector('.arrival');

let newArrival = movies.filter((item) => item.year >= 2018)

newArrival.forEach((item, index) => {
  let s = Math.floor(item.imdbRating)

  if(index < 4) {
    // Yangi arrayga qo'shib ketyapmiz
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

    // Displayga chiqarish qismi

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

    elNewFilm.appendChild(li);
  }

})