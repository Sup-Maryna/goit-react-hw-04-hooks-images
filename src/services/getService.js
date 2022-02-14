function fetchImages(value, page) {
  const query = `https://pixabay.com/api/?q=${value}&page=${page}&key=24226787-6ce4851176ffde83450b99032&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(query).then((res) => res.json());
}
export default fetchImages;
