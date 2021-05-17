import photoCard from '../templeates/photoCard.hbs';
import fechGlery from './fetchGalery';
import refs from './refs.js';
import alerts from './alert.js';

let page = 0;
function searchQuery(query) {
  page = 1;
  refs.gallery.innerHTML = '';
  fechGlery(query, page).then(array => {
    refs.gallery.insertAdjacentHTML('beforeend', photoCard(array));
    if (array.length === 0) {
      return alerts.errorNotFound;
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
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });
}

// function disable() {
//   this.refs.button.disabled = true;
//   this.refs.label.textContent = 'Loading...';
// }

export { searchQuery, nextSearchPage };
