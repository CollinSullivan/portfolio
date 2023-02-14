import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const HeadPageTemplate = ({ data }) => {
  const { body } = data.mdx;

  return (
    <div>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  )
}

export default HeadPageTemplate;
