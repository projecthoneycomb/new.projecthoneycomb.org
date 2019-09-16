import React from "react";
import Img from "gatsby-image";

import { useStaticQuery, graphql } from "gatsby"

const Author = ({ img }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <div class="author-container">
    <div class="profile-container">
      <div class="profile-image-container">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
      <div class="double-container">
        <p style={{ fontSize: 20 }}>James Williams</p>
        <p style={{ opacity: 0.7, lineHeight: '16px' }}>Founder of Project Honeycomb</p>
      </div>
    </div>
    <div style={{ flex: 1 }}></div>
    <div class="double-container">
      <p class="hideonmobile">@0charactersleft</p>
      <a href="https://twitter.com/messages/compose?recipient_id=452382026" target="_blank">Direct message me</a>
    </div>
    <div class="double-container">
      <p class="hideonmobile">james@projecthoneycomb.org</p>
      <a href="mailto:james@projecthoneycomb.org" target="_blank">Email me</a>
    </div>
  </div>
}

export default Author;