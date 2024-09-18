
const getImage = async () => {
    try {
        const apiKey = 'fxpQClUSxdDsbEJGmBB7RgXLWyAv6ouP';
        const apiUrl = 'https://api.giphy.com/v1/gifs/'
        const resp = await fetch(`${apiUrl}random?api_key=${apiKey}`)
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    } catch (error) {
        console.error(error);
    }
}
getImage();