
export default class Feachures extends React.Component {

  render() {
    return(
      <div id="features" style={{ paddingTop: 70 + 'px', width: 80 + '%', margin: '0 auto' }}>
        <div className="features-top">
          <h2>Powerful Features Help You Build Your Resume</h2>
          <p>See what we cooked up to help you create the cover letter and resume of your dreams!</p>
        </div>
        <div className="leftside-block job-search-feature" id="job-search">
          <div className="feature">
            <h3>Job  Search</h3>
            <p>
              <strong>We search for jobs on multiple job boards <br /> all at once - so you can find the job that works for you.</strong> Use our search engine to find posts on numerous boards, including:
            </p>
            <div className="job-boards-list">
              <h3>Job boards we currently serve:</h3>
              <ul>
                <li>Indeed</li>
                <li>CareerBuilder</li>
                <li className="clear">SimplyHired</li>
                <li>Authentic Jobs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="feature">
          <h2>Notifications and Offers</h2>
          <p><strong>Put your feet up!  We'll keep an eye out for your dream job.</strong></p>
        </div>
        <div className="feature">
          <h2><cufon className="cufon cufon-canvas" alt="Resume " style={{width: '84px', height: '25px'}}>Resume Builder</cufon></h2>
          <h3><strong>Everything you need on one page!</strong><br /> No multiple forms - it's fast and user-friendly.</h3>
          <p>Simply list your qualifications and experience and share it with potential employers today. Then, view statistics, update, download, and print anytime. Fantastic results with minimum effort!</p>
        </div>
      </div>
    )
  }

}
  