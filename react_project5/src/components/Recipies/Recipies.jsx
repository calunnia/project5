import React from 'react'
import SingleRecipe from '../SingleRecipe/SingleRecipe.jsx'

function Recipies({data}) {


    return (
        <div>
            {data.map((item,i)=>(<SingleRecipe item={item} key={'singrecip'+i.toString()}/>))}
        </div>
    )
}

export default Recipies
