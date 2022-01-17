import React from 'react'

const Ratings = ({rating,reviews,color}) => {
    return (
        <div>
            <span>
                <i style={{color: color}} class={rating>=1?"fas fa-star": rating>=0.5? "fas fa-star-half-alt": "far fa-star"}></i>
            </span>
            <span>
                <i style={{color: color}} class={rating>=2?"fas fa-star": rating>=1.5? "fas fa-star-half-alt": "far fa-star"}></i>
            </span>
            <span>
                <i style={{color: color}} class={rating>=3?"fas fa-star": rating>=2.5? "fas fa-star-half-alt": "far fa-star"}></i>
            </span>
            <span>
                <i style={{color: color}} class={rating>=4?"fas fa-star": rating>=3.5? "fas fa-star-half-alt": "far fa-star"}></i>
            </span>
            <span>
                <i style={{color: color}} class={rating>=5?"fas fa-star": rating>=4.5? "fas fa-star-half-alt": "far fa-star"}></i>
            </span>
            <span> {reviews} reviews</span>
        </div>
    )
}

Ratings.defaultProps = {
    color : "#f8e825"
}


export default Ratings
