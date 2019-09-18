import React from "react"
import Layout from "../components/layout"
import Author from "../components/author"
import HeroImage from "../components/hero-image"
import SEO from "../components/seo"

import Illustration from "../images/illus-teacher.svg";

const IndexPage = () => {

  return <Layout>
    <SEO title="Teachers" />
    <h1>A new way of making software for school</h1>
    <h2>Finding the middle ground for the next generation of school software.</h2>
    <Author></Author>
    <HeroImage align="center" Image={Illustration}/>
    <p>In 2010, the US Government needed to build a marketplace that all healthcare insurance providers could use to offer the American people a new set of healthcare plans as defined in the Affordable Care Act. It was estimated that, with this reform, 32 million people would be able to get insurance where they couldn’t before. On Healthcare.gov’s first day, six people successfully used it to sign up for health insurance. It cost 1.7 billion dollars. It was an unmitigated disaster.</p>
    <p>After this, some of the best of the best programmers, project managers and designers in Silicon Valley left their exciting and well-paid jobs and formed the United States Digital Service and an organisation called 18F. It was the technology equivalent of being drafted into the Army. Now, 9 years later, any government agency that needs a digital project, from the scale of Healthcare.gov to exploring the FBI’s crime data to applying for land permits online, can work with them to do so.</p>
    <p>These agencies do due diligence on new and existing technologies and products, provide an open-source, secure and documented starting point for any government agency wanting to make their own software and a framework for agile, appropriate and cost-efficient project management within the context of the public sector. Ultimately, costs have gone down, quality and security have gone up and knowledge and autonomy have been retained inside the public sector and not outsourced to private companies.</p>
    <p>As we’ve researched the landscape of software in education we were expecting to see, and indeed found, monolith, for-profit software companies like SIMS, Go 4 Schools, Impero and even general tools like Microsoft Office & Googe’s Suite. Most of these solutions are inflexible, unimaginative, expensive and aren’t designed with sufficient input from their intended users: teachers, students, administrators and parents. This is creating the burden most teachers are experiencing with frustrating user experiences and duplicate input.</p>
    <p>What we weren’t expecting to find was the amount of homegrown software, systems and solutions found in schools across the UK. Innovative, requirement-led, useful and engaging software made by the school, an enthusiastic teacher and sometimes even budding students! This is exciting, invigorating and inspiring to us that this autonomy and drive is clearly there in schools whether that’s a website, an app or even a complicated excel spreadsheet. However, the problems with these solutions often outweigh the benefits. They are difficult and time consuming to support, once the original creator leaves or is too busy, improving or fixing it is often more work than starting over and can have huge security and privacy problems.</p>
    <p>Like the USDS and 18F for government, is there space in education for a middle ground between these two worlds? One that keeps the innovation, autonomy and creativity of teachers, students and administrators but which comes from a basis of security, privacy, support and best practices. How can these systems and insights be shared between schools? How can the money being spent on sub-par software be used more effectively?</p>
    <Author></Author>
  </Layout>
}

export default IndexPage
