import React from "react"
import Layout from "../components/layout"
import Author from "../components/author"
import HeroImage from "../components/hero-image"
import SEO from "../components/seo"

import Illustration from "../images/illus-teacher-table.svg";

const IndexPage = () => {

  return <Layout>
    <SEO title="Teachers" />
    <h1>Technology in schools</h1>
    <h2>Finding the middle ground for the next generation of school software.</h2>
    <Author></Author>
    <HeroImage align="center" Image={Illustration}/>
    <p>Historically, technology’s introduction to education has focused on getting physical hardware into schools and was overwhelmingly unsuccessful. As ex-secretary of state for Education Damian Hinds put it, “[i]n the past, Governments have been guilty of imposing unwanted technology on schools” with SMART boards, iPads, etc. In reality, the technology we use with that impacts most of us on a day to day basis is software: apps, websites, presentations, documents; that is where we believe the problem lies.</p>
    <p>The relationship between schools and software appears to be at a breaking point as 63% of teachers say that tasks related to data inputting are a burden on their time due to duplicate data entry, unusable software and pointless, bureaucratic processes. In addition to that, only 36% of teachers believe that their training using new technology is adequate. </p>
    <p>This imbalance for teachers can be vastly improved by the creation of better, more useful, software. Honeycomb is focusing on the reduction of relentless and often pointless data entry that restricts teachers from what they were trained to do; teach. Teachers are in their profession to teach and are often not able to, to the best of their ability, due to the sheer volume of time spent entering data on each individual child. We want to relieve the stress and workload of teachers, freeing them up to remain creative in their teaching.</p>
    <p>Despite its pervasiveness, it’s not clear if this data entry is helping schools at all, with a report from the Department of Education stating that “[d]ata is often used too much for monitoring and compliance, rather than to support pupil learning and school improvement”. Capturing and analysing data is a valid and useful part of running a modern organisation but that doesn’t mean that it needs to be done in the way it is now. A real effort needs to be made to highlight the quality, not the quantity of data capture. You need excellent communication to stakeholders, in this case teachers and students, on why this information will help improve their experience at school and if you can’t satisfactorily answer that question, you shouldn’t be capturing that data at all.</p>
    <p>Teaching is considered, we believe rightly so, a creative profession. The reality of teaching for the vast majority of schools could not be further than that and that’s reflected in the software landscape; education-specific content creation tools are rare to see and could provide not only new and expanded creative outlets that let teachers thrive and improve the learning experience for students, but save the time teachers spend wrestling with tools that aren’t fit for purpose.</p>
    <p>We believe that by developing new software, alongside close collaboration from teachers, students and schools, we can improve the working and physiological lives of those involved in education. We don’t just believe it’s about developing new software but also about looking at the education technology industry as a whole and developing a new way of making software that works for everyone.</p>
    <Author></Author>
  </Layout>
}

export default IndexPage
