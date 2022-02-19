import React from 'react'

const Nav = ({filterItems , menuList}) => {
  return (
    <>
      <nav className="navbar">
      <div className="btn-group">

          {
              menuList.map((curElenent)=>{
                  return (<button 
                    className="btn-group__item" 
                    onClick={()=>filterItems
                        (curElenent)
                    }>{curElenent}
                    </button>)
              })
          }
          {/* <button className="btn-group__item" onClick={()=>filterItems("breakfast")}>BrakFast</button>
          <button className="btn-group__item" onClick={()=>filterItems("lunch")}>Lunch</button>
          <button className="btn-group__item" onClick={()=>filterItems("evening")}>Evening</button>
          <button className="btn-group__item" onClick={()=>filterItems("dinner")}>Dinner</button>
          <button className="btn-group__item" onClick={()=>setmenuData(Menu)}>All</button> */}

      </div>

  </nav>
    </>
  )
}

export default Nav