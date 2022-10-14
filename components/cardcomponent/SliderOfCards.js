import React from 'react'
import HeaderSt from "./HeaderStyles.module.css"
import HeaderCard from "./HeaderCard"

function SliderOfCards(){
    return(
        <div className={HeaderSt.CardsGroup}>
            <HeaderCard />
            <HeaderCard />
            <HeaderCard />
            <HeaderCard />
       
        </div>
    )
}

export default SliderOfCards