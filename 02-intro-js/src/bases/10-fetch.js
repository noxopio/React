
// https://api.giphy.com/v1/gifs/random?api_key=fxpQClUSxdDsbEJGmBB7RgXLWyAv6ouP


const apiKey = 'fxpQClUSxdDsbEJGmBB7RgXLWyAv6ouP';
const serviceUrl = 'https://api.giphy.com/v1/gifs/'

const getImage = fetch(`${serviceUrl}random?api_key=${apiKey}`)


// getFetch.then(response => {
//     return response.json()
// }).then(data => {
//     console.log('responseFetch',data)
// }).catch(error => {             // catch any error that occurs in the fetch
//     console.log(error)
// })



getImage
.then(response => response.json())
.then(({data}) => {
    const {url} = data.images.original
    // console.log(data.images.original.url)
    const img = document.createElement('img');
    img.src = url;
document.body.append(img)


}).catch(console.warn);
