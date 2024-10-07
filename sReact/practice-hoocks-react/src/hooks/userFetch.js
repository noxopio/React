import { useEffect, useState } from "react"

export const useFetch = (url) => {
    
    const [state, setState] = useState({data: null, loading: true, errors: null
    })
    
    const { data, loading: isLoading, errors } = state;
    const getFecht = async () => {
        
        try {
            const res = await fetch(url);
            const data = await res.json();
            setState({
                data,
                isLoading: false,
                errors: null
                
            })
            console.log(data);
            
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                errors: error
            })
        }
        
        
    }
    
    useEffect(() => {
        if (!url) return
        getFecht()
    }, [url])
    
    return { data, isLoading, errors }
    
}
