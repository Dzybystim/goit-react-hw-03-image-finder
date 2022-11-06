export function pixabayApi (search) {
   return fetch(`https://pixabay.com/api/?q=${search}&page=1&key=30142714-7b10e34c120f858629a98df8c&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => res.json())
}