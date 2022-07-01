import {useEffect, useState} from "react";
import axios from "axios";

export function useFetch<T>(link: string): [Boolean, T] {
    const [isLoading, setLoading] = useState<Boolean>(false)
    const [entity, setEntity] = useState<T>([] as unknown as T)
    useEffect(() => {
        fetchEntity()
    }, []);

    async function fetchEntity() {
        try {
            const response = await axios.get<T>('https://jsonplaceholder.typicode.com/posts');
            setEntity(response.data);
        } catch (e) {
            console.error(e)
        }
    }
    return [isLoading, entity];

}