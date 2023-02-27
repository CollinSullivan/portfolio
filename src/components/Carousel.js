import * as React from 'react'
import Slider from 'react-slick'
import { Link } from 'gatsby'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Carousel = ( { data, technology }) => {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "3rem",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        
    };

    let filtered = Object.values(data.allMdx.nodes).filter(function (entry) {
        if(entry.frontmatter.technology == null ){
            return false
        }
        return entry.frontmatter.technology.includes(technology)
    })

    if (technology === undefined) {
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
        <Slider {...settings}>
            {slides}
        </Slider>
    )

}



export default Carousel

  