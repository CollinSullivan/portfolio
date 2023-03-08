import * as React from 'react'
import Slider from 'react-slick'
import { Link } from 'gatsby'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { carouselItem,
        carouselItemHeading } from './Carousel.module.css'

const Carousel = ( { data, technology }) => {

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    

    let lowerCaseTechnology = []
    if (technology === undefined){
        lowerCaseTechnology = []
    } else {
        lowerCaseTechnology = technology.map(str => str.title.toLowerCase());
    }


    let filtered = Object.values(data.allMdx.nodes).filter(function (entry) {
        if(entry.frontmatter.technology == null ){
            return false
        }
        let currentTechnology = entry.frontmatter.technology.split(",")

        for(let i = 0; i < currentTechnology.length; i++) {
            for(let j = 0; j < lowerCaseTechnology.length; j++){
                if (currentTechnology[i].toLowerCase() === lowerCaseTechnology[j]){
                    return true
                }
            }
        }
        return false
    })

    if (lowerCaseTechnology.length === 0){
        filtered = data.allMdx.nodes
    }

    const slides = 
        filtered.map((node) => (
            <div key={node.id} className={carouselItem}>
                <article >
                    <Link to={`/projects/${node.frontmatter.slug}`} className={carouselItemHeading}>
                        {node.frontmatter.title}   
                    </Link>
                    <p>Posted: {node.frontmatter.date}</p>
                    <p>Tech: {node.frontmatter.technology}</p>
                </article>
            </div>
        ))   
    return (
        <div style={{textAlign:'center'}}>
            <Slider {...settings}>
                {slides}
            </Slider>
        </div>
    )

}



export default Carousel

  