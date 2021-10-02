import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCard=products=>{
    const [cart,setCart]=useState([])
    useEffect(()=>{
       if(products.length){
           const saveCart=getStoredCart()
           const storedCart=[];
           for(const key in saveCart){
               const addProduct=products.find(product=>product.key===key)
               if(addProduct){
                   const quantity=saveCart[key]
                   addProduct.quantity=quantity;
                   storedCart.push(addProduct)
               }
           }
           setCart(storedCart)
       }
    },[products])
    return [cart]

}
export default useCard;