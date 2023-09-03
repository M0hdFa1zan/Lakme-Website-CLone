import React from 'react'
import Carousel2 from './Carousel2'
import "./Oils.css"


function Oils() {

    const images = [
        'https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png',
        'https://www.aesop.com/u1nb1km7t5q7/4DGsDcDdfO5dcxxkckH0Vz/ff15e75ea0734ffa3273513bda5a40d2/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Large_843x1000px.png',
        'https://www.aesop.com/u1nb1km7t5q7/4dDnzrqcgMeqKPXni0V0iV/d32a161375b1e4f21f5fe79471ef4b3c/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png',
        'https://www.aesop.com/u1nb1km7t5q7/4DGsDcDdfO5dcxxkckH0Vz/ff15e75ea0734ffa3273513bda5a40d2/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Large_843x1000px.png',
    ];
    return (
        <div className='oilss'>
            <div className='odetail'>
                <div id='otitle'>For the skin</div>
                <div id='odescr'>Attention for all types</div>
                <div id='opara'>The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.</div>
                <div id='obutton'>See all Skin Care</div>
            </div>
            <div className='caro'>
                <Carousel2 images={images} />
            </div>
        </div>
    )
}

export default Oils