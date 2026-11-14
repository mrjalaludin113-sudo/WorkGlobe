const jobs = [
  {
    title: "Construction Supervisor",
    company: "Global Builders",
    location: "United Arab Emirates",
    type: "Full Time",
    visa: true,
  },
  {
    title: "Software Developer",
    company: "Tech Solutions",
    location: "United Kingdom",
    type: "Full Time",
    visa: true,
  },
  {
    title: "Registered Nurse",
    company: "Healthcare Group",
    location: "Saudi Arabia",
    type: "Full Time",
    visa: true,
  },
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a className="logo" href="/">Work<span>Globe</span></a>
        <nav>
          <a href="#jobs">Find Jobs</a>
          <a href="#employers">Employers</a>
          <a href="#about">About</a>
        </nav>
        <a className="login" href="/login">Login / Sign Up</a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">YOUR FUTURE HAS NO BORDERS</p>
          <h1>Your Career.<br /><span>Your World.</span></h1>
          <p className="subtitle">
            Discover worldwide job and visa opportunities.
            Connect with employers and take your career global.
          </p>
          <a className="primary-button" href="#jobs">Explore Jobs →</a>
          <div className="hero-stats">
            <div><strong>Global</strong><small>Job Opportunities</small></div>
            <div><strong>Worldwide</strong><small>Career Access</small></div>
            <div><strong>Free</strong><small>Job Searching</small></div>
          </div>
        </div>
        <div className="globe">🌍</div>
      </section>

      <section className="search-section">
        <h2>Find Your Next Opportunity</h2>
        <p>Search jobs and explore opportunities around the world.</p>
        <div className="search-box">
          <input placeholder="Job title or keyword" />
          <input placeholder="Country or city" />
          <a href="#jobs">Search Jobs</a>
        </div>
      </section>

      <section className="jobs-section" id="jobs">
        <p className="eyebrow">CAREER OPPORTUNITIES</p>
        <h2>Explore Global Jobs</h2>
        <p className="section-description">
          Your next opportunity could be anywhere.
        </p>

        <div className="job-grid">
          {jobs.map((job) => (
            <article className="job-card" key={job.title}>
              <div className="job-icon">💼</div>
              <span className="job-type">{job.type}</span>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>📍 {job.location}</p>
              {job.visa && <span className="visa">Visa sponsorship possible</span>}
              <p className="sample-note">Illustrative preview — not a live vacancy</p>
            </article>
          ))}
        </div>
      </section>

      <section className="features" id="about">
        <h2>Make Your Career Global</h2>
        <div className="feature-grid">
          <div>🌎<h3>Worldwide Jobs</h3><p>Explore opportunities across countries.</p></div>
          <div>🛂<h3>Visa Opportunities</h3><p>Find roles that mention visa sponsorship.</p></div>
          <div>🤝<h3>Connect Directly</h3><p>Discover employers and application links.</p></div>
        </div>
      </section>

      <section className="employer-section" id="employers">
        <h2>Are You Hiring?</h2>
        <p>Connect with job seekers around the world.</p>
        <a href="/register">Join WorkGlobe</a>
      </section>

      <footer>
        <a className="logo" href="/">Work<span>Globe</span></a>
        <p>Your Career. Your World.</p>
        <p>© 2026 WorkGlobe. All rights reserved.</p>
      </footer>
    </main>
  );
}
