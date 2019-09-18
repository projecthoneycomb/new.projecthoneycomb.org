import React from "react"
import Layout from "../components/layout"
import Author from "../components/author"
import HeroImage from "../components/hero-image"
import SEO from "../components/seo"

import Illustration from "../images/illus-student.svg";

const IndexPage = () => {

  return <Layout>
    <SEO title="Home" />
    <h1>Introducing Project Honeycomb</h1>
    <h2>What we want to do, how we want to do it and where we need your help.</h2>
    <Author></Author>
    <p>As it stands, technology within schools is proving largely ineffectual. 63% of teachers say that tasks related to data inputting are a burden on their time. Instead of introducing new hardware like SMART boards or iPads, we want to improve the software; the apps, websites and programs, that teachers use. On the other hand, students today are digital natives. They’re the first generation to have grown up with technology at their fingertips but their experiences in school have yet to match that of their personal lives. <a class="inline" href="/teachers">Learn more</a></p>
    <p>Project Honeycomb is a not-for-profit initiative to drastically change the way students and teachers can communicate and use technology for the better.</p>
    <HeroImage Image={Illustration}/>
    <h3>A secure, scalable platform that enables teachers’ creativity</h3>
    <p>In 2010, the US Government needed to build a marketplace that all healthcare insurance providers could use to offer the American people a new set of healthcare plans as defined in the Affordable Care Act. It was estimated that, with this reform, 32 million people would be able to get insurance where they couldn’t before. On Healthcare.gov’s first day, six people successfully used it to sign up for health insurance. It cost 1.7 billion dollars. It was an unmitigated disaster.</p>
    <p>After this, some of the best of the best programmers, project managers and designers in Silicon Valley left their exciting and well-paid jobs and formed the United States Digital Service and an organisation called 18F. It was the technology equivalent of being drafted into the Army. Now, 9 years later, any government agency that needs a digital project, from the scale of Healthcare.gov to exploring the FBI’s crime data to applying for land permits online, can work with them to do so.</p>
    <p>These agencies do due diligence on new and existing technologies and products, provide an open-source, secure and documented starting point for any government agency wanting to make their own software and a framework for agile, appropriate and cost-efficient project management within the context of the public sector. Ultimately, costs have gone down, quality and security have gone up and knowledge and autonomy have been retained inside the public sector and not outsourced to private companies.</p>
    <p>There is an inspiring amount of home-grown software, systems and solutions found in schools across the UK. Innovative, requirement-led, useful and engaging software made by the school, an enthusiastic teacher and sometimes even budding students! Autonomy and drive is clearly there in schools, whether that’s a website, an app or even a complicated excel spreadsheet. However, the problems with these solutions often outweigh the benefits. They are difficult and time consuming to support, once the original creator leaves or is too busy, improving or fixing it is often more work than starting over and can have huge security and privacy problems.</p>
    <p>We want to replicate the best of the 18F model, whilst making sure it's easy for grass roots creativity to flourish within it. <a class="inline" href="/platform">Learn more</a></p>
    <h3>A private space for student’s mental wellbeing</h3>
    <p>Support for bringing conversations around mental health and wellbeing into education has grown rapidly over the last few years, as has the concern around the privacy and security of everyone’s, but especially children’s, data. The desire to help students understand their own mental health, monitor their wellbeing and set them up with the tools they need to cope in the modern world is fundamentally opposed by the current ‘capture all, wide access’ strategy regarding data and analytics that we’re seeing in schools today.</p>
    <p>We believe strongly that first, we need to address this privacy imbalance of students’ information. Currently, almost all data about a student is able to be viewed by any teachers. We don’t believe thoughts and feelings should be treated as mere data entry, in the same way that their detention records or predicted grades are. Instead, what we think is the right approach, is a place for students to keep a track of how the day went, their thoughts and feelings, whether they feel their workload is too much, in a completely confidential setting.</p>
    <p>What’s important is that the student is the only one who can access and control their wellbeing log. Setting a rock-solid technical and cultural boundary that builds trust and proves that this is a space that cannot be exploited, gamed or shared, is incredibly important in allowing students’ reflection to be as valuable as possible. This provides a way for the school to become more honest and open regarding mental health without being invasive and potentially making things worse.</p>
    <p>We are going to conduct a series of research on the existing infrastructure for mental wellbeing inside schools, the best way to assist students in this “feelings, thoughts, reflection, conversation” process and if improved mental wellbeing correlates with improved secondary metrics. <a class="inline" href="/wellbeing">Learn more</a></p> 
    <h3>Okay, but practically how are you going to do this?</h3>
    <p>We don’t know yet. The people at Honeycomb have a commercial & research background, with a desire to help support education. We don’t want to presume a wrongly biased solution, and therefore want and need to listen to you; students, teachers and leaders.</p>
    <p>We are going to conduct a research phase of 3 months in pilot schools to help understand what you need and have your invaluable input in this process.</p>
    <h3>How can I help?</h3>
    <p>Firstly, it’s important that we don’t add more burden to your life if you’re a teacher, student, senior leader or just an interested parent, so you can choose how you want to talk to us and how much. We don’t want to, nor will we, abuse any time or contact information you give us.</p>
    <p>If you want to get involved, drop me an email or message with the buttons below, or call 0115 824 5959.</p>
    <Author></Author>
  </Layout>
}

export default IndexPage
