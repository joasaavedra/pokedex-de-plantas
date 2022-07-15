import { useEffect, useState }from 'react'
import { MyPlants } from "../MyPlants/MyPlants"
import { getPlants } from '../plants'

export const MyPlantsContainer = () => {
    const [plantsList, setPlantsList] = useState([])

    useEffect(() => {
        const list = getPlants()

        list.then(response => {
            setPlantsList(response)
        })
    }, [])

    return (
        <section>
            <MyPlants plants={plantsList}/>
        </section>
    )
}