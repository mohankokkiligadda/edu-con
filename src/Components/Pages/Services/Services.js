import React from 'react';
import img1 from '../../Images/university selection.jpeg';
import img2 from '../../Images/personalised support.jpeg';
import img3 from '../../Images/our services.jpeg';
import img4 from '../../Images/get in touch.jpeg';

const Services = () => {
  return (
    <div className="container">
      <section className="section">
        <div className="image">
          <img src={img1} alt="University Selection" />
        </div>
        <div className="content">
          <h2>University Selection</h2>
          <p>
            Connect with current university students who can provide firsthand insights into different universities and programs. Whether you're considering Ivy League institutions, prestigious universities in the USA or UK, or other foreign education destinations, our student advisors are here to share their experiences and help you find the perfect fit for your educational needs.
          </p>
        </div>
      </section>

      <section className="section section-reverse">
        <div className="image">
          <img src={img2} alt="Scholarship Assistance" />
        </div>
        <div className="content">
          <h2>Scholarship Assistance</h2>
          <p>
            Gain valuable guidance and support from students who have successfully secured scholarships. Our student advisors can offer insights into scholarship opportunities, application processes, and tips for crafting compelling applications. Let our experienced peers help you navigate the scholarship landscape and maximize your chances of success.
          </p>
        </div>
      </section>


      <section className="section section-reverse">
        
        <div className="content">
        <h2>Additional Services</h2>
        <ul>
            <li><strong>Student-Centric Approach:</strong> Our approach revolves around the needs of students, prioritizing their unique goals and aspirations. We understand that each student's journey is different, and our team is dedicated to providing personalized support tailored to their individual needs.</li>
            <li><strong>Community of Experts:</strong> Education Consultancy is fueled by a community of knowledgeable peers and mentors who are passionate about sharing their insights and experiences. By connecting students with current university students, we foster a supportive environment where individuals can learn from each other and thrive together.</li>
            <li><strong>Innovative Solutions:</strong> We are committed to staying at the forefront of innovation in higher education consulting. Our team continuously explores new ways to enhance the student experience, leveraging technology and best practices to deliver exceptional service and support.</li>
          </ul>
        </div>
        <div className="image">
          <img src={img3} alt="Scholarship Assistance" />
        </div>
      </section>
      <section className="section section-reverse">
        <div className="image">
          <img src={img4} alt="Scholarship Assistance" />
        </div>
        <div className="content">
        <h2>Get Started Today!</h2>
        <p>
          Connect with our team of student advisors and embark on your educational journey with confidence. Whether you're in need of university selection assistance, scholarship guidance, or additional support, Education Consultancy is here to help you succeed. Contact us today to learn more and get started on the path to achieving your academic goals.
        </p>
        <button className="details-btn">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default Services;
