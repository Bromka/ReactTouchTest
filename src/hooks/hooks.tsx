import {useEffect, useState} from "react";
import axios from "axios";

function useFetch(link: string) {
    const [isLoading, setLoading] = useState<Boolean>(false)
    const [entity, setEntity] = useState<T[]>([])
    useEffect(() => {

    });

    async function fetchEntity() {
        try {
            const response = await axios.get<T[]>('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        } catch (e) {
            console.error(e)
        }
    }
    return [isLoading, entity];

}