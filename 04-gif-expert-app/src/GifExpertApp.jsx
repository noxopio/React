import { useState } from "react"
import AddCategory from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        setCategories([ 'HunterXHunter',...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
           
           <AddCategory
            setCategories={setCategories}
           
           />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <hr />
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>
                            {category}
                        </li>
                    })
                }
            </ol>
            <hr />
        </>
    )

}











// const apiKey = 'fxpQClUSxdDsbEJGmBB7RgXLWyAv6ouP';
// const serviceUrl = 'https://api.giphy.com/v1/gifs/'

// const getImage = fetch(`${serviceUrl}random?api_key=${apiKey}`)





// getImage
//   .then(response => response.json())
//   .then(({ data }) => {
//     const { url } = data.images.original
//     // console.log(data.images.original.url)
//     const img = document.createElement('img');
//     img.src = url;
//     document.body.append(img)


//   }).catch(console.warn);
