import "./Jobs.css";

const sections = [

"Upcoming Internship Programs",

"Open Positions",

"Hiring Process",

"Why Join W3TechLabs",

"Our Benefits",

"Application Process",

"Frequently Asked Questions"

];

function Jobs() {

return (

<div className="jobs-page">

<section className="jobs-hero">

<div className="container">

<div className="row align-items-center">

<div className="col-lg-7">

<h1>

Start Your Career with

<span> W3TechLabs</span>

</h1>

<p>

Kickstart your professional journey through internships,
graduate opportunities, and future career openings at
W3TechLabs.

</p>

<div className="hero-buttons">

<button className="btn btn-primary">

Explore Opportunities

</button>

<button className="btn btn-outline-light">

Contact HR

</button>

</div>

</div>

</div>

</div>

</section>

<section className="container py-5">

<div className="row">

{sections.map((title)=>(

<div
className="col-lg-6 mb-4"
key={title}
>

<div className="placeholder-card">

<h3>{title}</h3>

<p>

Content Coming Soon

</p>

</div>

</div>

))}

</div>

</section>

</div>

);

}

export default Jobs;