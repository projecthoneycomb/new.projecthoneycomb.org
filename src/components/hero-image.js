import React from "react"

import "./hero-image.css"


/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const HeroImage = ({ Image, align }) => {

  const hairOptions = ['#ecbc88', '#1a1a1a', '#5e3623', '#9f462c', '#cd9f6e'];
  var hair = hairOptions[Math.floor(Math.random() * hairOptions.length)];

  const skinOptions = ['#715449', '#9c7662', '#d9a77d', '#eebfa7'];
  var skin = skinOptions[Math.floor(Math.random() * skinOptions.length)];
  
  let style = align === 'center' ? 'hero-container center' : 'hero-container';

  return <React.Fragment>
  <style dangerouslySetInnerHTML={{__html: `
     :root {
      --skin-color: ${skin};
      --hair-color: ${hair};
      }
    `}} />
  <div class={style}>
    <Image></Image>
  </div>
  </React.Fragment>
  
}

export default HeroImage
