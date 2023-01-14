import React from 'react'
import "../styles/CSSItems.css"

const Items = () => {
    return (
        <>
            <div className="cont-item">
                <div className="cont-item__container">
                    <i class="fa-regular fa-circle-check cont-item__icon"></i>
                    <p className="cont-item__item">Example</p>
                </div>
                    <i className="fa-solid fa-xmark cont-item__close"></i>
            </div>
        </>
    )
}

export default Items