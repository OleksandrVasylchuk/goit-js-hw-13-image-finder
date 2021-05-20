import photoCard from '../templeates/photoCard.hbs';
import fechGlery from './fetchGalery';
import refs from './refs.js';
import noMatchesFound from './pnotify.js';

let page = 0;
function searchQuery(query) {
  page = 1;
  refs.gallery.innerHTML = '';
  fechGlery(query, page).then(array => {
    refs.gallery.insertAdjacentHTML('beforeend', photoCard(array));
    if (array.length === 0) {
      noMatchesFound();
    }
    if (array.length === 12) {
      refs.button.classList.remove('is-hiden');
    }
  });
}
function nextSearchPage(query) {
  fechGlery(query, page).then(array => {
    page += 1;
    refs.gallery.insertAdjacentHTML('beforeend', photoCard(array));
    if (array.length !== 12) {
      refs.button.classList.add('is-hiden');
    }
    window.scrollBy({
      top: 700,
      left: 0,
      behavior: 'smooth',
    });
  });
}

// function disable() {
//   this.refs.button.disabled = true;
//   this.refs.label.textContent = 'Loading...';
// }

export { searchQuery, nextSearchPage };
