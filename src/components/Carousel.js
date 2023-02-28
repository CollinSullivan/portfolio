import * as React from 'react'
import Slider from 'react-slick'
import { Link } from 'gatsby'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = ( { data, technology }) => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 1,
        dots: true,
        speed: 500,
        arrows: true,
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
            <div key={node.id}>
                <article >
                    <h2>
                        <Link to={`/projects/${node.frontmatter.slug}`}>
                            {node.frontmatter.title}   
                        </Link>
                    </h2>
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

  