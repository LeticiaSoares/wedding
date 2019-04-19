import React from 'react'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css"

const images = [
    {
        original: '../../images/lehbrufotos/1.jpg',
        thumbnail: '../../images/lehbrufotos/1.jpg',
    },
    {
        original: '../../images/lehbrufotos/2.jpg',
        thumbnail: '../../images/lehbrufotos/2.jpg',
    },
    {
        original: '../../images/lehbrufotos/3.jpg',
        thumbnail: '../../images/lehbrufotos/3.jpg',
    },
    {
        original: '../../images/lehbrufotos/4.jpg',
        thumbnail: '../../images/lehbrufotos/4.jpg',
    },
    {
        original: '../../images/lehbrufotos/5.jpg',
        thumbnail: '../../images/lehbrufotos/5.jpg',
    },
    {
        original: '../../images/lehbrufotos/6.jpg',
        thumbnail: '../../images/lehbrufotos/6.jpg',
    },
    {
        original: '../../images/lehbrufotos/7.jpg',
        thumbnail: '../../images/lehbrufotos/7.jpg',
    },
    {
        original: '../../images/lehbrufotos/8.jpg',
        thumbnail: '../../images/lehbrufotos/8.jpg',
    },
    {
        original: '../../images/lehbrufotos/9.jpg',
        thumbnail: '../../images/lehbrufotos/9.jpg',
    },
    {
        original: '../../images/lehbrufotos/10.jpg',
        thumbnail: '../../images/lehbrufotos/10.jpg',
    },
    {
        original: '../../images/lehbrufotos/11.jpg',
        thumbnail: '../../images/lehbrufotos/11.jpg',
    },
    {
        original: '../../images/lehbrufotos/12.jpg',
        thumbnail: '../../images/lehbrufotos/12.jpg',
    },
    {
        original: '../../images/lehbrufotos/13.jpg',
        thumbnail: '../../images/lehbrufotos/13.jpg',
    },
    {
        original: '../../images/lehbrufotos/14.jpg',
        thumbnail: '../../images/lehbrufotos/14.jpg',
    },
    {
        original: '../../images/lehbrufotos/15.jpg',
        thumbnail: '../../images/lehbrufotos/15.jpg',
    },
    {
        original: '../../images/lehbrufotos/16.jpg',
        thumbnail: '../../images/lehbrufotos/16.jpg',
    },
    {
        original: '../../images/lehbrufotos/17.jpg',
        thumbnail: '../../images/lehbrufotos/17.jpg',
    },
    {
        original: '../../images/lehbrufotos/18.jpg',
        thumbnail: '../../images/lehbrufotos/18.jpg',
    },
    {
        original: '../../images/lehbrufotos/19.jpg',
        thumbnail: '../../images/lehbrufotos/19.jpg',
    },
    {
        original: '../../images/lehbrufotos/20.jpg',
        thumbnail: '../../images/lehbrufotos/20.jpg',
    },
    {
        original: '../../images/lehbrufotos/21.jpg',
        thumbnail: '../../images/lehbrufotos/21.jpg',
    },
    {
        original: '../../images/lehbrufotos/22.jpg',
        thumbnail: '../../images/lehbrufotos/22.jpg',
    },
    {
        original: '../../images/lehbrufotos/23.jpg',
        thumbnail: '../../images/lehbrufotos/23.jpg',
    }


]

const Galery = styled(({className}) =>(
    <div className={className}>
        <div className='container'>
            <h2 className="title"> Nossas memórias </h2>
            <div><ImageGallery items={images} lazyLoad={true} /></div>
        </div>

    </div>
))`
      background-color: #F2B73F;
      width: 100%;
      height: 100vh;
    .container{
         width: 100%;
        background-color: #F2B73F;
        margin: 0 auto;
    }
   
    
  
     .image-gallery-thumbnail-inner img {
            object-fit: cover ;
            width: 100%;
            height: 97px;
        }
        .image-gallery-image img {
            width: 100%;
            margin: 0 auto;
            height: 450px;
            /* left: 50%; */
            object-fit: cover;
            display: block;
            position: relative;
       }
    
    .title {
        font-size: 65px;
        margin-bottom: 10px;
        line-height: 1.5;
        font-weight: bold;
        text-align: center;
        color: #ffff;
        font-family: "Sacramento", Arial, serif;
    }  
      @media screen and (min-width: 768px) {
        .container{
            width: 50%;
            height: 350px;
        }
       .image-gallery-slide {
          background-color: #F2B73F;
        }
        .image-gallery-thumbnail-inner img {
            height: 97px;
            object-fit: cover;
            width: 79px;
        }
        .image-gallery-image img {
            width: 550px;
            height: 550px;
            margin: 0 auto;
            /* left: 50%; */
            object-fit: cover;
            display: block;
            position: relative;
       }
    }
   
`


export default  Galery


