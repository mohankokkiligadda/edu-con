import React from 'react';
import './About.css';
import img1 from '../../Images/expert connection.jpeg';
import img2 from '../../Images/personalised support.jpeg';
import img3 from '../../Images/scholar ship image.jpg';
import img4 from '../../Images/get in touch.jpeg';

const EducationConsultancy = () => {
  return (
    <div className="container">
      <section className="section">
        <div className="content">
          <h2>About Education Consultancy</h2>
          <p>
            At Education Consultancy, we're driven by a passionate team committed to empowering individuals to pursue their educational dreams with confidence. With a deep understanding of the challenges and opportunities within the higher education landscape, our dedicated team works tirelessly to provide personalized guidance and support to students and parents alike, specializing in Ivy League universities, USA education, UK education, and foreign education options.
          </p>
        </div>
        <div className="image">
          <img src={img1} alt="About Education Consultancy" />
        </div>
      </section>

      <section className="section section-reverse">
        
        <div className="content">
          <h2>Mission</h2>
          <p>
            Our mission is to democratize access to higher education by connecting students with the resources, support, and expertise they need to make informed decisions about their academic futures. We believe in fostering a culture of empowerment and inclusivity, ensuring that every individual has the opportunity to pursue their passions and achieve their full potential through education, regardless of their background or circumstances.
          </p>
        </div>
        <div className="image">
          <img src={img2} alt="Mission" />
        </div>
      </section>

      <section className="section">
        <div className="content">
          <h2>What Sets Us Apart</h2>
          <ul>
            <li><strong>Student-Centric Approach:</strong> Our approach revolves around the needs of students, prioritizing their unique goals and aspirations. We understand that each student's journey is different, and our team is dedicated to providing personalized support tailored to their individual needs.</li>
            <li><strong>Community of Experts:</strong> Education Consultancy is fueled by a community of knowledgeable peers and mentors who are passionate about sharing their insights and experiences. By connecting students with current university students, we foster a supportive environment where individuals can learn from each other and thrive together.</li>
            <li><strong>Innovative Solutions:</strong> We are committed to staying at the forefront of innovation in higher education consulting. Our team continuously explores new ways to enhance the student experience, leveraging technology and best practices to deliver exceptional service and support.</li>
          </ul>
        </div>
        <div className="image">
          <img src={img3} alt="What Sets Us Apart" />
        </div>
      </section>

      <section className="section section-reverse">
        
        <div className="content">
          <h2>Get in Touch</h2>
          <p>
            Whether you're a student embarking on your educational journey or a parent seeking guidance for your child, our team is here to help. Contact us today to learn more about how Education Consultancy can support you in achieving your academic goals, whether at an Ivy League institution, a prestigious university in the USA or UK, or any other foreign education destination.
          </p>
          <button className="details-btn">Contact Us</button>
        </div>
        <div className="image">
          <img src={img1} alt="Get in Touch" />
        </div>
      </section>
    </div>
  );
};

export default EducationConsultancy;
