const BASE_URL = 'https://pixabay.com/api/';
const KEY_API = '21643539-8a39d318f8dc12da0f0bd24ac';

function fechGlery(query, page) {
  return fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${KEY_API}`,
  )
    .then(response => {
      return response.json();
    })
    .then(object => {
      return object.hits;
    })
    .catch(error => {
      console.log(error);
    });
}
export default fechGlery;

// import axios from 'axios';
// import fechCantries from './counry-servis';
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// export const fechGlery = (query, page) => {
//   return axios
//     .get(
//       `?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${KEY_API}`,
//     )
//     .then(response => response.data.results)
//    .then(({ data }) => data.hits);
// };

//
// function onSerch(e) {
//   e.preventDefault();
//   refs.gallery.innerHTML = '';
//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;
//   fechGlery(searchQuery).then(renderGalleryCard).catch(alert.errorNotFound);
// }
// function onSerch(e) {
//   e.preventDefault();
//   refs.gallery.innerHTML = '';
//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;
//   fechGlery(searchQuery).then(renderGalleryCard).catch(alert.errorNotFound);
// }
// function renderGalleryCard(gallery) {
//   const marcup = photoCard(gallery);
//   refs.gallery.innerHTML = marcup;
// }
