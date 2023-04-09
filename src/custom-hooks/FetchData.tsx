import { useEffect, useState } from "react"
import { server_calls } from "../api/server"

export const useGetData = () => {
    const [carData, setData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( ()=> {
        handleDataFetch();
    }, []) 

    return { carData, getData:handleDataFetch }
}


function setData(result: any) {
    throw new Error("Function not implemented.")
}

