export const getGifs = async( category ) => {
    
    const apiKey = 'fxpQClUSxdDsbEJGmBB7RgXLWyAv6ouP';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    



    return gifs;
}








// https://api.giphy.com/v1/gifs/random?api_key=fxpQClUSxdDsbEJGmBB7RgXLWyAv6ouP


// const serviceUrl = 'https://api.giphy.com/v1/gifs/'

// const getImage = fetch(`${serviceUrl}random?api_key=${apiKey}`)


// getFetch.then(response => {
//     return response.json()
// }).then(data => {
//     console.log('responseFetch',data)
// }).catch(error => {             // catch any error that occurs in the fetch
//     console.log(error)
// })



// getImage
// .then(response => response.json())
// .then(({data}) => {
//     const {url} = data.images.original
//     // console.log(data.images.original.url)
//     const img = document.createElement('img');
//     img.src = url;
// document.body.append(img)


// }).catch(console.warn);
