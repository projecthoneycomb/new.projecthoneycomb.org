import React from "react"
import Layout from "../components/layout"
import Author from "../components/author"
import HeroImage from "../components/hero-image"
import SEO from "../components/seo"

import Illustration from "../images/illus-student.svg";

const IndexPage = () => {

  return <Layout>
    <SEO title="Home" />
    <h1>Modern wellbeing in schools</h1>
    <h2>Building a private space for mental wellbeing</h2>
    <Author></Author>
    <HeroImage Image={Illustration}/>
    <h3>A secure, scalable platform that enables teachers’ creativity</h3>
    <p>Support for bringing conversations around mental health and wellbeing into education has grown rapidly over the last few years, as has the concern around the privacy and security of everyone’s, but especially children’s, data. The desire to help students understand their own mental health, monitor their wellbeing and set them up with the tools they need to cope in the modern world is fundamentally opposed by the current ‘capture all, wide access’ strategy regarding data and analytics that we’re seeing in schools today.</p>
    <p>We believe that first, we need to address this privacy imbalance of students’ information. Currently, almost all data about a student is able to be viewed by any teachers, in the same way that their detention records or predicted grades can be. We don’t believe thoughts and feelings should be treated as mere data entry. Instead, what we think is the right approach, is a place for students to keep a track of how the day went, their thoughts and feelings, whether they feel their workload is too much, in a completely confidential setting.</p>
    <p>We want to make the core of this mental wellbeing log the idea of progressive disclosure of complexity. With looking inward, assessing and reflecting on yourself and your wellbeing, even for adults, you want to dip your toe in and engage with that process at a comfortable pace. This is obviously even more true for students who are growing into the minds they are trying to understand in an environment that can often come with an adult level of stress.</p>
    <p>Depending on many different factors, the level of engagement a student might want with their log might change day to day, building up from stage to stage. These stages are characterised as feeling, the rawest gut response; thinking, a small diary-like entry that will help you remember causes or outcomes of those feelings; reflection, a guided look back over a contextually significant amount of time to help understand; and conversation, helping the user learn how to communicate what they’ve learned to parents, teachers or peers.</p>
    <p>What’s important is that the student is the only one who can access and control their wellbeing log. Setting a rock-solid technical and cultural boundary that builds trust and proves that this is a space that cannot be exploited, gamed or shared, is incredibly important in allowing students’ reflection to be as valuable as possible. This provides a way for the school to become more honest and open regarding mental health without being invasive and potentially making things worse.</p>
    <p>If that information is restricted strictly to access and control for the students, how does this impact their school experience in any meaningful way? The first component is setting up a culture and an environment where they feel they can be comfortable and have the appropriate opportunities where they can talk about their own mental wellbeing. The second is this system sets them up to have the skills and ability to communicate about their own mental health with their real reflections, thoughts and feelings.</p>
    <p>That’s all well and good, but how do you know whether that’s successful or not? Almost everything in education has some kind of output that needs to be measured. It’s how students, teachers, schools and governments are assessed. It’s not enough for this to just feel right, how do we prove this is working? If we can’t capture primary wellbeing metrics because of this private environment we must identify valuable knock-on or secondary metrics. These could be higher achievement, better attendance or fewer incidents of bullying or arguments.</p>
    <p>We want to conduct a series of research on the existing infrastructure for mental wellbeing inside schools, the best way to assist students in this “feelings, thoughts, reflection, conversation” process and if improved mental wellbeing correlates with improved secondary metrics.</p>
    <Author></Author>
  </Layout>
}

export default IndexPage
