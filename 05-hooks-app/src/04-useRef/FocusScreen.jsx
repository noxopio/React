import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef()
    const inputRef1 = useRef()

    const handleClick = () => {

        inputRef.current.select();
        1

    }
    const handleClick1 = () => {

        inputRef1.current.select();


    }

    return (

        <>
            <h1>Focus Screen</h1>
            <hr />

            <input

                ref={inputRef1}
                type="text"
                className="form-control"
                placeholder="Su nombre"
            />
            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Su nombre"
            />

            <button

                onClick={handleClick}
                className="btn btn-outline-primary mt-5"
            >
                Focus
            </button>
            <button

                onClick={handleClick1}
                className="btn btn-outline-primary mt-5"
            >
                Focus
            </button>



        </>

    )
}
