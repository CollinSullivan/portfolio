import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Carousel from '../../components/Carousel'
import MultiSelectDropdown from '../../components/MultiSelectDropdown'

const ProjectPage = ( { data }) => {

    // I want to have this stored in a file/ preferably have this as a graphQL query. But until then this will suffice.
    const technologies = [
        { id: 1, title: 'Java' },
        { id: 2, title: 'JavaScript' },
        { id: 3, title: 'Python' },
        { id: 4, title: 'Tableau' },
        { id: 5, title: 'C' }
    ]

    const [selected, setSelected] = useState([])

    const toggleOption = ( { id } ) => {
        setSelected(prevSelected => {
            const newArray = [...prevSelected]
            if (newArray.includes(id)) {
                return newArray.filter(item => item !== id)
            } else {
                newArray.push(id)
                return newArray
            }
        })
    }

    return (
        <Layout pageTitle="My Projects">
            <MultiSelectDropdown options={technologies} selected={selected} toggleOption={toggleOption} />
            <Carousel
                data={data}/>
            {/* <Carousel 
                data={data}
                technology='python'/>
            <Carousel
                data={data}
                technology='java'/>
            <Carousel
                data={data}
                technology='tableau'/>
            <Carousel
                data={data}
                technology='C'/> */}
        </Layout>
    )
}

export const query = graphql`
query {
  allMdx {
    nodes {
      id
      frontmatter {
        slug
        title
        date(formatString: "MMMM D, YYYY")
        technology
      }
    }
  }
}`

export const Head = () => <Seo title="My Projects" />

export default ProjectPage