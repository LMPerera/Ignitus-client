import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ignitus-Internals';

import resume from '../../ignitus-Assets/Images/resume.png';

const Introduction = () => (
  <div className="intro__wrapper" >

      <h1 className="intro text-center">Welcome to Ignitus</h1>

      <div className="intro__content">
        <div className="intro__content--upper">
          Get handpicked top-quality global research <br />
          and industrial internships, for <span className="bold-txt">free</span>!
        </div>

        <div className="intro__content--lower">
          <p>Ingnite your resume and get the <span className="bold-txt">best global <br /> opportunities</span>
              and skyrocekt your career</p>
              <Link to="/Signup">
                <button className="btn">
                  Sign Up
                </button>
              </Link>
        </div>
        <img className="img-fluid" src={resume} alt="resume" />
      </div>

  </div>
);
export default withErrorBoundary(Introduction);
