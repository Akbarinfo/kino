// carusel

const elCaruHead = document.querySelector('header');
const elHeroTitle = document.querySelector('#caru-title');
const elHeroRt = document.querySelector('#caru-rt');
const elHeroPr = document.querySelector('#caru-pr');
const elHeroDesc = document.querySelector('#caru-desc');

//Btn page idlar

const elPage1= document.querySelector('#page-1');
const elPage2= document.querySelector('#page-2');
const elPage3= document.querySelector('#page-3');
const elPage4= document.querySelector('#page-4');
const elPage5= document.querySelector('#page-5');

function pageBtn(e) {
  let id = e.target.id;
  console.log(id)

  if(id == 'page-1') {
    elPage1.className = 'hero__pagebtn bpage'
    elPage2.className = 'hero__pagebtn'
    elPage3.className = 'hero__pagebtn'
    elPage4.className = 'hero__pagebtn'
    elPage5.className = 'hero__pagebtn'

    elCaruHead.style.backgroundImage = "url('http://i3.ytimg.com/vi/E9Qv_XVJ-js/maxresdefault.jpg')";
    elHeroTitle.textContent = 'The Foster Boy'
    elHeroRt.textContent = '65 / 100'
    elHeroPr.textContent = '75%'
    elHeroDesc.textContent = "The illegitimate orphan child, 12-year-old Max, is sold by the local minister for a basket of food to the Bösiger family, who own a mountain farm. Max' initial hope of finally finding a loving home is brutally shattered: The farmer and his wife treat Max like livestock, and their son Jacob humiliates and abuses him. Only the local teacher notices the child suffering on the farm."
  }
  else if(id == 'page-2') {

    elPage1.className = 'hero__pagebtn'
    elPage2.className = 'hero__pagebtn bpage'
    elPage3.className = 'hero__pagebtn'
    elPage4.className = 'hero__pagebtn'
    elPage5.className = 'hero__pagebtn'

    elCaruHead.style.backgroundImage = "url('http://i3.ytimg.com/vi/sw7RElt-SvE/maxresdefault.jpg')";
    elHeroTitle.textContent = 'Paddington 2'
    elHeroRt.textContent = '65 / 100'
    elHeroPr.textContent = '75%'
    elHeroDesc.textContent = "Paddington is happily settled with the Brown family in Windsor Gardens, where he has become a popular member of the community, spreading joy and marmalade wherever he goes. While searching for the perfect present for his beloved Aunt Lucy's 100th birthday, Paddington spots a unique pop-up book in Mr. Gruber's antique shop, and embarks upon a series of odd jobs to buy it. But when the book is stolen, it's up to Paddington and the Browns to unmask the thief."
  }

  else if(id == 'page-3') {

    elPage1.className = 'hero__pagebtn'
    elPage2.className = 'hero__pagebtn'
    elPage3.className = 'hero__pagebtn bpage'
    elPage4.className = 'hero__pagebtn'
    elPage5.className = 'hero__pagebtn'

    elCaruHead.style.backgroundImage = "url('/img/header-bg.jpg')";
    elHeroTitle.textContent = 'John Wick 3 : Parabellum'
    elHeroRt.textContent = '65 / 100'
    elHeroPr.textContent = '75%'
    elHeroDesc.textContent = "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere."
  }

  else if(id == 'page-4') {

    elPage1.className = 'hero__pagebtn'
    elPage2.className = 'hero__pagebtn'
    elPage3.className = 'hero__pagebtn'
    elPage4.className = 'hero__pagebtn bpage'
    elPage5.className = 'hero__pagebtn'

    elCaruHead.style.backgroundImage = "url('http://i3.ytimg.com/vi/DVZGyTdk_BY/maxresdefault.jpg')";
    elHeroTitle.textContent = 'Human Flow'
    elHeroRt.textContent = '65 / 100'
    elHeroPr.textContent = '75%'
    elHeroDesc.textContent = 'Over 65 million people around the world have been forced from their homes to escape famine, climate change and war in the greatest human displacement since World War II. Human Flow, an epic film journey led by the internationally renowned artist Ai Weiwei, gives a powerful visual expression to this massive human migration.'
  }

  else if(id == 'page-5') {

    elPage1.className = 'hero__pagebtn'
    elPage2.className = 'hero__pagebtn'
    elPage3.className = 'hero__pagebtn'
    elPage4.className = 'hero__pagebtn'
    elPage5.className = 'hero__pagebtn bpage'

    elCaruHead.style.backgroundImage = "url('http://i3.ytimg.com/vi/VmS4lTZ34uk/maxresdefault.jpg')";
    elHeroTitle.textContent = 'Last Flag Flying'
    elHeroRt.textContent = '65 / 100'
    elHeroPr.textContent = '75%'
    elHeroDesc.textContent = "n 2003, 30 years after they served together in the Vietnam War, former Navy Hospital Corpsman Larry \"Doc\" Shepherd re-unites with ex-Marines Sal and Mueller on a different type of mission: to bury Doc's son, a young Marine killed in the Iraq War."
  }
}