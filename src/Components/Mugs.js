import React from 'react'
import Carousel2 from './Carousel2'
import "./Mugs.css"


function Mugs() {

    const images = [
        'https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png',
        'https://www.aesop.com/u1nb1km7t5q7/4A6vzBFbfH8Gn2pGdAKvSj/d7e7119a352d9381720f698b65307224/Aesop_Home_Aganice_Aromatique_Candle_Web_Medium_862x752px.png',
        'https://www.aesop.com/u1nb1km7t5q7/1HDrLNDwmYh2CtqiEsFL2n/507570e4e0b46a69e418d63df74fe44f/Aesop_Home_Callippus_Aromatique_Candle_Web_Large_1102x962px.png',
        'https://www.aesop.com/u1nb1km7t5q7/3Gl0lAqs3RFMdTkfohehHt/0e5ed642c54781db0a84f694797b5907/Aesop_Home_Murasaki_Aromatique_Incense_Web_Large_1584x1384px.png',
        'https://www.aesop.com/u1nb1km7t5q7/4dDnzrqcgMeqKPXni0V0iV/d32a161375b1e4f21f5fe79471ef4b3c/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png',
    ];
    return (
        <div className='mugs'>
            <div className='mdetail'>
                <div id='mtitle'>For the home</div>
                <div id='mdescr'>Domestic pleasures</div>
                <div id='mpara'>
                    Our range of aromatic formulations for the home are practical and pleasing in equal measure.</div>
                <div id='mbutton'>See all Home</div>
            </div>
            <div className='caro'>
                <Carousel2 images={images} />
            </div>
        </div>
    )
}

export default Mugs