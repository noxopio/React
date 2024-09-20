import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newValue=(inputValue.trim().toUpperCase());
        if(newValue.length <=1) return;
        // setCategories( categories=>[ inputValue,...categories])
        onNewCategory(newValue)
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

export default AddCategory
