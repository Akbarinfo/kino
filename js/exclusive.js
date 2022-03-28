const elExclusive = document.querySelector('.exclusive');

let newExcluseive = movies.filter((item) => item.imdbRating >= 8.5)


newExcluseive.forEach((item, index) => {

  if(index < 3) {


    // Displayga chiqarish qismi

    let [li, imgdiv, ahref, icon, img, name, ihref] = createElements('li', 'div', 'a', 'i', 'img', 'h3', 'a')

    li.className = 'exclusive__item';
    ahref.setAttribute('href', `https://www.youtube.com/watch?v=${item.youtubeId}`)
    ihref.className = 'exclusive__icon'
    ihref.setAttribute('href', `https://www.youtube.com/watch?v=${item.youtubeId}`)
    imgdiv.className = 'exclusive__imgbox';
    icon.className = 'bx bx-play-circle'
    img.className = 'exclusive__img';
    img.src = `${item.youtubePoster}`;
    name.className = 'exclusive__name';
    name.textContent = `${item.title}`;
    ihref.appendChild(icon)
    imgdiv.appendChild(ahref);
    imgdiv.appendChild(ihref)
    ahref.appendChild(img);

    li.appendChild(imgdiv);
    li.appendChild(name);

    elExclusive.appendChild(li);
  }
})
