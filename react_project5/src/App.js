import './App.css'
import React, {useEffect, useState} from 'react'
import Loading from './components/Loading/Loading.jsx'
import Recipies from './components/Recipies/Recipies.jsx'

const App = () => {

  
  const [data, setData] = useState([])
  const [loading, setloading] = useState(false)
  const [show, setShow] = useState('')
  
  const [filteredData, setFilteredData] = useState([])  
 

useEffect(() => {
 
      setloading(true)
      setData([])
      setFilteredData([])  
    
        

            fetch('api/v1/data')
            .then(  (response) => (response.json()))
            .then(  (respAdat)     => (setData(respAdat)))
            .catch( (error)    => {
                                    console.log('error', error)
                                    setData(null)
                                  }
                  )
            .finally( ()=>{
            
                            console.log('fetch end');
                            setloading(false)
                            setShow('all')
                          }
                    )
            return () => {
            // cleanup
            }
      }, [])

console.log('recipe data=',data,'sow=',show,filteredData.length);

useEffect(()=>{


            if(show === 'breakfast') 
                  setFilteredData (data.filter((item)=>( item.type ==='breakfast')))
               
              if(show === 'lunch')
                  setFilteredData (data.filter((item)=>( item.type ==='lunch')))
            
              if(show === 'dinner')
                  setFilteredData (data.filter((item)=>( item.type ==='dinner')))
                
              if(show === 'dessert')
                  setFilteredData (data.filter((item)=>( item.type ==='dessert')))
                
              if(show === 'all')
                  setFilteredData (data)
                 
                  console.log('sow=',show);
              return () => {
                // cleanup
              }
   }, [show] )



  return (
    <div className="App">

     <h1>Our Recipes</h1>
        <button onClick={()=>(setShow('all'))}>All</button>
        <button onClick={()=>(setShow('breakfast'))}>Breakfast</button>
        <button onClick={()=>(setShow('lunch'))}>Lunch</button>
        <button onClick={()=>(setShow('dinner'))}>Dinner</button>
        <button onClick={()=>(setShow('dessert'))}>Dessert</button>
      
   
   {loading ? <Loading/>
            : data === null
                           ? <p>Uppps Something happend....</p>
                           : filteredData.length ===0
                                           ? <p>Sorry, no {show} service.</p>
                                           : <Recipies data={filteredData} />
                          }
    </div>
  )
}

export default App
