import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/courses.css';

const CoursesPage = () => {
  const navigate = useNavigate();

  const handleEnroll = (courseName) => {
    navigate('/payments', { state: { course: courseName } });
  };

  return (
    <div className="courses-page">
      <h1 className="page-header">Our Dance Courses</h1>

      <div className="course-packages">
        <div className="package-container">

          {/* 6-Month Course */}
          <div className="package-card">
            <h3>6-Month Dance Course</h3>
            <div className="package-details">
              <p>
                Our 6-month dance course is perfect for beginners and intermediate dancers looking to build a strong foundation in multiple dance styles.
              </p>
              <div className="package-perks">
                <ul>
                  <li>Weekly training sessions (2–3 times/week)</li>
                  <li>Introduction to styles like Bollywood, Hip-Hop, and Contemporary</li>
                  <li>Choreography projects and group performances</li>
                  <li>Basic fitness and flexibility training</li>
                  <li>Mid-course progress assessment</li>
                </ul>
              </div>
              <p className="package-fees">Ideal for: Kids, teens, and adults</p>
              <button className="enroll-button" onClick={() => handleEnroll("6-Month Dance Course")}>Enroll Now</button>
            </div>
          </div>

          {/* 12-Month Course */}
          <div className="package-card">
            <h3>12-Month Professional Course</h3>
            <div className="package-details">
              <p>
                The 12-month course is designed for serious dancers aiming to go professional or compete. It includes rigorous training and mentorship.
              </p>
              <div className="package-perks">
                <ul>
                  <li>Sessions 3–5 times/week</li>
                  <li>Advanced styles: Classical, Contemporary, Hip-Hop</li>
                  <li>Solo and group choreography</li>
                  <li>Live shows and competitions</li>
                  <li>Certification and portfolio creation</li>
                </ul>
              </div>
              <p className="package-fees">Ideal for: Advanced dancers and performers</p>
              <button className="enroll-button" onClick={() => handleEnroll("12-Month Professional Course")}>Enroll Now</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
