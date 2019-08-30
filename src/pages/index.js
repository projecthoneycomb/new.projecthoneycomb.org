import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroImage from "../components/hero-image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Introducing Project Honeycomb</h1>
    <h2>What we want to do, how we want to do it and where we need your help.</h2>
    <div style={{ margin: `50px 0`, background: '#FBDCD9', borderRadius: 10 }}>
      <HeroImage />
    </div>
    <p>As it stands, technology within schools is proving largely ineffectual. Teachers are finding that the hardware and software they are using is burdening them further in an environment where they are already stretched. On the other hand, students today are digital natives. They’re the first generation to have grown up with technology at their fingertips but their experiences in school have yet to match that of their personal lives.</p>
    <p>We believe that by developing new and approachable software, alongside close collaboration from teachers, students and schools, we can improve the working and psychological lives of those involved in education. We have located three crucial areas for improvement that can drastically change the way students and teachers can communicate and use technology for the better.</p>
    <h3>Creativity alongside technology, not in spite of it</h3>
    <p>Historically, technology’s introduction to education has mainly focused on getting physical hardware into schools and was overwhelmingly unsuccessful. As Ex-Secretary of State for Education Damian Hinds put it, “In the past, Governments have been guilty of imposing unwanted technology on schools” with SMART boards, iPads, etc. In reality, for most of us, the technology we interact with on a day to day basis is software: apps, websites, presentations, documents, and that is where we believe the problem lies.</p>
    <p>The relationship between schools and software appears to be at a breaking point as 63% of teachers say that tasks related to data inputting are a burden on their time due to duplicate data entry, unusable software and pointless, bureaucratic processes. In addition to that, only 36% of teachers believe that their training using new technology is adequate. </p>
    <p>This imbalance for teachers can be vastly improved by the creation of better, more useful, software. Honeycomb is focusing on the reduction of relentless and often pointless data entry that restricts teachers from what they were trained to do; teach. Teachers are in their profession to teach and are often not able to, to the best of their ability, due to the sheer volume of time spent entering data on each individual child. We want to relieve the stress and workload of teachers, freeing them up to remain creative in their teaching.</p>
    <h3>Finding the middle ground for the next generation of school software</h3>
    <p>As we learn more about the landscape of software in schools we came across the</p>
    <h3>Building a private space for mental wellbeing</h3>
    <p>...</p>
    <h3>Okay, but how are you going to do this?</h3>
    <p>We don’t know yet. The people at Honeycomb have a commercial & research background, with a desire to help support education. We want to listen to you; students, teachers and leadership, and learn about the problems as you see them to try and solve them with you. We want to conduct a research phase of 3 months to help understand what you need and have your invaluable input in this process.</p>
    <h3>How can I help?</h3>
    <p>Firstly, it’s important that we don’t add more burden to your life if you’re a teacher, student, senior leader or just an interested parent, so you can choose how you want to talk to us and how much. We don’t want to, nor will we, abuse any time or contact information you give us.</p>
  </Layout>
)

export default IndexPage
