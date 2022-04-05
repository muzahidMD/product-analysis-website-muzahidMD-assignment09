import { useEffect, useState } from "react"

const useChart = () => {
    const [charts, setChart] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])
    return [charts, setChart];
}

export default useChart;