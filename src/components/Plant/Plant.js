import './Plant.css'

export const Plant = ({ species, image }) => {

    return (
        <div className='plant'>
            <img src={image} alt={species}></img>
            <h1>{species}</h1>
        </div>
    )
}