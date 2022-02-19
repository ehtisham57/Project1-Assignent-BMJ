import React, { useState } from "react";
import './style.css'
import Menu from "./menuApi";
import MenuCard from "./menucard";
import Nav from './navbar'



const Uniqueslist=()=>
[
    ...new Set(
        Menu.map((curElenent)=>{
            return curElenent.category;
        })
    ),
    "All",
]
function Resturant() {
    const [menuData , setmenuData] = useState(Menu)
    const [menuList ,setMenuList]= useState(Uniqueslist)


const filterItems = (category)=>{
    if(category === 'All'){
        setmenuData(Menu);
        return;
    }


    const updatedList = Menu.filter((curElenent)=>{
        return curElenent.category === category
    })

    setmenuData(updatedList)
}


  return (

  <>
  <Nav filterItems={filterItems} menuList={menuList} />
  <MenuCard menuData={menuData}/>
  </>
  );
}

export default Resturant;