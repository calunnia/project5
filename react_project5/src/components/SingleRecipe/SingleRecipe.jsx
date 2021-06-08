 import React, { useState } from "react";
import Top from '../Top/Top.jsx'
import OrderForm from '../OrderForm/OrderForm.jsx'

function SingleRecipe({ item }) {
  const {
    id,
    title,
    price,
    img,
    extra_topping,
    toppings,
    size,
    discription,
    type,
  } = item;

  const [showMore, setShowMore] = useState(false);
  const [order,setOrder] = useState(false)
  const [toppingList,setToppingList] =useState(false)

  const [extraToppings, setExtraToppings] =useState(item.extra_topping)

/* const available = (extraTopping)=>{
 if(item.id === id && item.extra_topping === true){
     setExtraToppings(console.log('mukodok'))
 } */
console.log('orderForm=',order);

  return (
    <div className="single_recipe_wrapp">
      <h2>{title}</h2>
         <div className="pictures">
          <img src={img} alt={title} />

             
                                    <div className="order_btn"><button  onClick={()=>(setOrder(!order))}> Order </button></div> 
                   
                    <div className="order">
                    
                  {order ? <OrderForm
                   item={item}
                    setOrder={setOrder}
                     order={order} 
                      setToppingList={setToppingList}
                       toppingList={toppingList}
                        setExtraToppings={setExtraToppings}
                         extra_topping={extra_topping}
                         /> : ''}
            
        </div>
       
      </div>
    
    </div>
    
  );
}

export default SingleRecipe;



/* {/* {order ? <p> {extra_topping === true ? <button onClick={()=>(setToppingList(!toppingList))}>Choose topping</button> :  ' Sorry there is no available toppings to this menu '   }{/*  </button> */
                           
/* </p>
   :''} */


                  {/* 
                     {toppingList ?  <button onClick={()=> {item.toppings.map((top,i)=>( <Top top={top} key={i.toString()}/>))}}>ToppingList</button> : ''}  */} 