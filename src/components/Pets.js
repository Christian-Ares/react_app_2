import React from 'react'


const Pets = (props)=>{

    const renderPets = ()=>{
        return props.pets.map((pet, index) => {
        return(
            <div key={index}>
                <li>{pet.name} -- {pet.animal}</li>
                <button onClick={()=>props.deletePet(index)}>Delete</button>
            </div>
            ) 
        }) 
    }

    const onInputChange = (_event) => {
        // console.log(_event.target.name)
        props.updateAnimals(_event.target.name, _event.target.value)
    }
    return(
        <div>
            <h2>Pets Component</h2>

            <form onSubmit={props.addPet}>

                <label htmlFor="name">Name: </label>
                <input 
                    type="text"
                    name="name"
                    value={props.temporalNewAnimal.name}
                    onChange={(event)=>onInputChange(event)}
                    placeholder="Introduce un nombre" />

                <label htmlFor="animal">Animal: </label>
                <input 
                    type="text" 
                    name="animal" 
                    value={props.temporalNewAnimal.animal} 
                    onChange={(event)=>onInputChange(event)} 
                    placeholder="Introcude un animal" />

                <button type="submit">Create Animal</button>
            </form>

            <ul>
               {renderPets()} 
            </ul>

        </div>
    )
}

export default Pets