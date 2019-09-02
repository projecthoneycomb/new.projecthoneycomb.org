import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import HeroImage from "../components/hero-image"
import SEO from "../components/seo"

const IndexPage = () => {
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
  `)

  return <Layout>
    <SEO title="Home" />
    <h1>Introducing Project Honeycomb</h1>
    <h2>What we want to do, how we want to do it and where we need your help.</h2>
    <div class="author-container">
      <div class="profile-container">
        <div class="profile-image-container">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
        <div class="double-container">
          <p style={{fontSize: 20}}>James Williams</p>
          <p style={{opacity: 0.7, lineHeight: '16px'}}>Founder of Project Honeycomb</p>
        </div>
      </div>
      <div style={{flex: 1}}></div>
      <div class="double-container">
        <p>@0charactersleft</p>
        <a href="https://twitter.com/messages/compose?recipient_id=452382026" target="_blank">Direct message me</a>
      </div>
      <div class="double-container">
        <p>james@projecthoneycomb.org</p>
        <a href="mailto:james@projecthoneycomb.org" target="_blank">Email me</a>
      </div>
    </div>
    <div class="hero-container">
      <HeroImage />
    </div>
    <p>As it stands, technology within schools is proving largely ineffectual. Teachers are finding that the hardware and software they are using is burdening them further in an environment where they are already stretched. On the other hand, students today are digital natives. They’re the first generation to have grown up with technology at their fingertips but their experiences in school have yet to match that of their personal lives.</p>
    <p>We believe that by developing new and approachable software, alongside close collaboration from teachers, students and schools, we can improve the working and psychological lives of those involved in education. We have located three crucial areas for improvement that can drastically change the way students and teachers can communicate and use technology for the better.</p>
    <h3>Creativity alongside technology, not in spite of it</h3>
    <p>Historically, technology’s introduction to education has mainly focused on getting physical hardware into schools and was overwhelmingly unsuccessful. As Ex-Secretary of State for Education Damian Hinds put it, “In the past, Governments have been guilty of imposing unwanted technology on schools” with SMART boards, iPads, etc. In reality, for most of us, the technology we interact with on a day to day basis is software: apps, websites, presentations, documents, and that is where we believe the problem lies.</p>
    <p>The relationship between schools and software appears to be at a breaking point as 63% of teachers say that tasks related to data inputting are a burden on their time due to duplicate data entry, unusable software and pointless, bureaucratic processes. In addition to that, only 36% of teachers believe that their training using new technology is adequate. </p>
    <p>This imbalance for teachers can be vastly improved by the creation of better, more useful, software. Honeycomb is focusing on the reduction of relentless and often pointless data entry that restricts teachers from what they were trained to do; teach. Teachers are in their profession to teach and are often not able to, to the best of their ability, due to the sheer volume of time spent entering data on each individual child. We want to relieve the stress and workload of teachers, freeing them up to remain creative in their teaching.</p>
    <h3>Finding the middle ground for the next generation of school software</h3>
    <p>In 2010, the US Government needed to build a marketplace that all the healthcare insurance providers could use to offer the American people a new set of healthcare plans as defined in the Affordable Care Act. It was estimated that, with this reform, 32 million people would be able to get insurance where they couldn’t before. On Healthcare.gov’s first day, six people successfully used it to sign up for health insurance. It cost 1.7 billion dollars. It was an unmitigated disaster.</p>
    <p>After this, some of the best of the best programmers, project managers and designers in Silicon Valley left their exciting and well-paid jobs and formed the United States Digital Service and an organisation called 18F. It was the technology equivalent of being drafted into the Army. Now, 9 years later, any government agency that needs a digital project, from the scale of Healthcare.gov to exploring the FBI’s crime data to applying for land permits online, can work with them to do so.</p>
    <p>These agencies do due diligence on new and existing technologies and products, provide an open-source, secure and documented starting point for any government agency wanting to make their own software and a framework for agile, appropriate and cost-efficient project management within the context of the public sector. Ultimately, costs have gone down, quality and security have gone up and knowledge and autonomy have been retained inside the public sector and not outsourced to private companies.</p>
    <p>As we’ve researched the landscape of software in education we were expecting to see, and found, monolith, for-profit software companies like SIMS, Go 4 Schools, Impero and even general tools like Microsoft Office & Googe’s Suite. Most of these solutions are inflexible, unimaginative, expensive and aren’t designed with sufficient input from their intended users: teachers, students, administrators and parents. This is creating the burden most teachers are experiencing with frustrating user experiences and duplicate input.</p>
    <p>What we weren’t expecting to find was the amount of homegrown software, systems and solutions found in schools across the UK. Innovative, requirement-led, useful and engaging software made by the school, an enthusiastic teacher and sometimes even budding students! This is exciting, invigorating and inspiring to us that this autonomy and drive is clearly there in schools whether that’s a website, an app or even a complicated excel spreadsheet. However, the problems with these solutions often outweigh the benefits. They are difficult and time consuming to support, once the original creator leaves or is too busy improving or fixing it is often more work than starting over and can have huge security and privacy problems.</p>
    <p>Like the USDS and 18F for government, is there space in education for a middle ground between these two worlds? One that keeps the innovation, autonomy and creativity of teachers, students and administrators but which comes from a basis of security, privacy, support and best practices. How can these systems and insights be shared between schools? How can the money being spent on sub-par software be used more effectively?</p>
    <h3>Building a private space for mental wellbeing</h3>
    <p>...</p>
    <h3>Okay, but how are you going to do this?</h3>
    <p>We don’t know yet. The people at Honeycomb have a commercial & research background, with a desire to help support education. We want to listen to you; students, teachers and leadership, and learn about the problems as you see them to try and solve them with you. We want to conduct a research phase of 3 months to help understand what you need and have your invaluable input in this process.</p>
    <h3>How can I help?</h3>
    <p>Firstly, it’s important that we don’t add more burden to your life if you’re a teacher, student, senior leader or just an interested parent, so you can choose how you want to talk to us and how much. We don’t want to, nor will we, abuse any time or contact information you give us.</p>
    <div class="author-container">
      <div class="profile-container">
        <div class="profile-image-container">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
        <div class="double-container">
          <p style={{fontSize: 20}}>James Williams</p>
          <p style={{opacity: 0.7, lineHeight: '16px'}}>Founder of Project Honeycomb</p>
        </div>
      </div>
      <div style={{flex: 1}}></div>
      <div class="double-container">
        <p>@0charactersleft</p>
        <a href="https://twitter.com/messages/compose?recipient_id=452382026" target="_blank">Direct message me</a>
      </div>
      <div class="double-container">
        <p>james@projecthoneycomb.org</p>
        <a href="mailto:james@projecthoneycomb.org" target="_blank">Email me</a>
      </div>
    </div>
  </Layout>
}

export default IndexPage
