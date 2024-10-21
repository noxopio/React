import { useEffect, useState } from "react"
export const useFetch = (url) => {
    const [state, setState] = useState(
        {
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        }
    )

    useEffect(() => {
        getFecth();
    }, [url])
    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }
    const getFecth = async () => {
    
        try {
            // const url = 'https://pokeapi.co/api/v2/pokemon/1';
            const res = await fetch(url)
            await new Promise(resolve => setTimeout(resolve, 1500));
            if (!res.ok) {
                setState({
                    data: null,
                    isLoading: false,
                    hasError: true,
                    error: {
                        status: res.status,
                        statusText: !res.statusText ? 'Ocurrio un error' : res.statusText,
                    }
                })
                return;
            }
            const data = await res.json();
            setState({
                data,
                isLoading: false,
                hasError: false,
                error: null,
            })
            console.log({ data });
        }
        catch (error) {
            setState({
                ...state,
                isLoading: false,
                hasError: true,
                error: error,
            })
        }

    }
    getFecth()
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}