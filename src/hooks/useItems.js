import { useEffect, useState } from "react"

const useItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const url = `https://mysterious-depths-40501.herokuapp.com/inventory`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
}
export default useItems;