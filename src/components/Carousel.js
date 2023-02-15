import * as React from 'react'
import Slider from 'react-slick'
import { Link, graphql, useStaticQuery } from 'gatsby'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Carousel = () => {

    const data = useStaticQuery(graphql`
    query {
        allMdx {
          nodes {
            id
            frontmatter {
              slug
              title
              date(formatString: "MMMM D, YYYY")
            }
          }
        }
      }
    `)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

    };

    const slides = 
        data.allMdx.nodes.map((node) => (
            <div>
                <article key={node.id}>
                    <h2>
                        <Link to={`/projects/${node.frontmatter.slug}`}>
                            {node.frontmatter.title}   
                        </Link>
                    </h2>
                    <p>Posted: {node.frontmatter.date}</p>
                </article>
            </div>
        ))   

    return (
        <div>
            <Slider {...settings}>
                {slides}
            </Slider>
        </div>
    )

}



export default Carousel

  