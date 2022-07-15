import { Plant } from "../Plant/Plant"

export const MyPlants = ( {plants = []} ) => {

    return (
        <div className='myPlants'>
            { plants.map(p => {
                return (
                    <Plant key={p.id} genre={p.genre} species={p.species} family={p.family} image={p.image}/>
                )
            })}
        </div>
    )
}