import React, { useState } from 'react'
import Menu from './menuApi'
import Menucard from './Menucard'
import './style.css'
import Navbar from './Navbar'
const uniqueList = [
  ...new Set(
  Menu.map((curElem)=>{
    return curElem.category;
  })
),
"All",
];
console.log(uniqueList)

 const Resturant = () => { 

 const  [menuData ,setMenuData] =useState(Menu)
 const[menuList, setMenuList]=useState(uniqueList)
  const filteritem=(category)=>{
    if(category === "All"){
      setMenuData(Menu);
      return;
    }
    const updateList = Menu.filter((curElem) => {
       return curElem.category === category;

      })
    setMenuData(updateList);

  };

  
  return (
    <>
   <Navbar  filteritem={filteritem}   menuList={menuList}/> 
   
   <Menucard menuData={menuData}/>

    </>
  )
}
 export default Resturant;