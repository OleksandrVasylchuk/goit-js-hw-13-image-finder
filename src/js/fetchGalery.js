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
