import React, { useState } from "react";
import PriceList from '../PriceList/PriceList.jsx'

function OrderForm({
  item,
  order,
  setOrder,
  setToppingList,
  toppingList,
  setExtraToppings,
  extra_toppings,
    }) 

{    const [available, setAvailable] = useState(item.extra_topping);
    const [show, setShow] = useState(false); 
    const [showSize,setShowSize] = useState(false)
    const [showPrice ,setShowprice] =useState(false)

 
  console.log('show=',show);
  return (
    <div className="form">
        { <h1>Your Choice = {item.title} </h1>}
          
            <div className="where">
                    <p> <input className="delivery" type="radio" id="delivery"  name="delivery" value="delivery"/>           {/*  type=radio => a name nek ugyan annak kell lenni igy automatikusan csak egyet tudsz bejelolni , ha a name =kulonbozo akkor ez nem el. type =>checkbox az osszeset be tudod egyszerre jelolni */}
                    <label htmlFor="delivery">Delivery</label></p>
                
                    <p> <input  className="delivery" type="radio" id="eat_in" name="delivery" value="eat_in"/>
                    <label htmlFor="eat_in">Eat In</label></p>
                    </div>

                    <div className="choose">
               { item.toppings.length >0 &&
                  <div className="toppings">
                    <button>Available toppings:</button>
                     { item.toppings.map((top) => <p><input type="checkbox"  name={top.name} value= {top.price} /><label htmlFor={top.name}> {top.name} £{top.price}  </label></p>)}
                   </div>      

                }
                         {/* <button onClick={()=>(setShowSize(!showSize))}>Select size</button>

                            <div>
                                {  console.log('show size')}
                                {    showSize 
                                    ? item.size.map((size,i)=>( <p key={i.toString()}> <input type="radio"  name="size" value= {size}/><label htmlFor={size}> {size}   </label></p> ))
                                    : ''
                                   
                                    }
                            </div> */}

                                  <div className="size">
                                    <button> Available Size</button>
                                    { item.size.map((size) => <p><input type="checkbox"  name={size.name } value= {size.price} /><label htmlFor={size.name}> {size.name} £{size.price}  </label></p>)}   
                                  </div>


                            
                            </div>
                                    <button onClick={()=>(setShowprice(!showPrice))}>Total price</button>

                                                <p>{showPrice ? <PriceList/> :''}</p>



                                                <input type="text" name="name" placeholder="name" required />
            <input type="tel" name="phone" placeholder="phone" required />
            <input type="number" name="person" placeholder="person/dose/seats" required />
            <input type="text" name="address" placeholder="Address" required/>





                                                <div className="finish_btns">
                                                      <button onClick={() => setOrder(!order)}>Cancel</button>
                                                      <button  type="submit" onClick={() => setOrder(!order)}>Submit</button>
                                                      </div>
    </div>
  );
}

export default OrderForm;
