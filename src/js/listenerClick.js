import refs from './refs';
import { searchQuery, nextSearchPage } from './searchQuery';
import onGalleryElClick from './basicLightbox';

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  searchQuery(refs.input.value);
});

refs.button.addEventListener('click', e => {
  e.preventDefault();
  nextSearchPage(refs.input.value);
});

refs.gallery.addEventListener('click', onGalleryElClick);
