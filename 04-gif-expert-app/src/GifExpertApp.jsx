import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory}/>
            <hr />
            {categories.map(category => (<GifGrid key={category} category={category} />))}
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
