import React, { useState, useRef, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Carousel from '../../components/Carousel'
import MultiSelectDropdown from '../../components/MultiSelectDropdown'

const ProjectPage = ( { data }) => {

    function getParameter() {
        var url = window.location.href;
        var v= 'selected'
        v = v.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + v + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return parseInt(decodeURIComponent(results[2].replace(/\+/g, ' ')));
    }

    // I want to have this stored in a file/ preferably have this as a graphQL query. But until then this will suffice.
    const technologies = [
        { id: 0, title: 'Java' },
        { id: 1, title: 'JavaScript' },
        { id: 2, title: 'Python' },
        { id: 3, title: 'Tableau' },
        { id: 4, title: 'C' }
    ]

    

    const [selected, setSelected] = useState([])

    const isFirstRender = useRef(true);

    useEffect(() => {
        isFirstRender.current = false;
    }, []);
    if(isFirstRender.current){
        if(getParameter() !== null){
            selected.push(getParameter())
        }
    }
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
        <div>
            
            <Layout 
                pageTitle="My Projects">
                <div style={{ paddingLeft: '4rem', paddingRight:'4rem'}}>
                    <Carousel
                        data={data}
                        technology={selected.map( id => technologies[id])}/>
                </div>
                <div style={{ paddingTop: '2rem', paddingBottom: '12rem'}}>
                    <MultiSelectDropdown options={technologies} selected={selected} toggleOption={toggleOption}s/>
                </div>
            </Layout>
        </div>
    )
}

export const query = graphql`
query {
    allMdx(filter: {frontmatter: {technology: {ne: null}, exclude: {eq: "false"}}}) {
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