export const AddPlant = () => {

    return (
        <section className='AddPlant'>
            <form>
                <fieldset>
                    <label for='genre'>Genero:</label>
                    <input type='text' id='genre' name='genre'></input>
                    <label for='species'>Especie:</label>
                    <input type='text' id='species' name='species'></input>
                    <label for='family'>Familia:</label>
                    <input type='text' id='family' name='family'></input>
                    <label for='habitat'>Habitat Natural:</label>
                    <input type='text' id='habitat' name='habitat'></input>
                    <label for='environment'>Ambiente Ideal:</label>
                    <input type='text' id='environment' name='environment'></input>
                </fieldset>

            </form>
        </section>
    )
}