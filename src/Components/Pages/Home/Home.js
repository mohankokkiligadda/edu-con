
import React from 'react';
import './Home.css';
import img1 from '../../Images/expert connection.jpeg';
import img2 from '../../Images/personalised support.jpeg';
import img3 from '../../Images/scholar ship image.jpg';

const Home = () => {
  const cardData = [
    {
      image: img1,
      title: 'Expert Connections',
      details: 'Connect directly with current university students who are studying in your field of interest or at your desired institution. Benefit from their firsthand experiences, insights, and advice to make informed decisions about your educational future.'
    },
    {
      image: img2,
      title: 'Personalized Support',
      details: 'Receive personalized guidance tailored to your specific needs and aspirations. Whether you have questions about academic programs, campus culture, scholarship opportunities, or extracurricular activities, our student experts are here to help.'
    },
    {
      image: img3,
      title: 'Scholarship Assistance',
      details: 'Explore scholarship options and receive guidance on the application process from our team of student experts. Gain insights from students who have successfully secured scholarships, learn from their experiences, strategies, and tips to craft winning scholarship applications.'
    }
  ];

  return (
    <div className="container1">
      
      <div className='title'>How We Can Help You</div>
      
      <section className="cards-container">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} />
            <h2>{card.title}</h2>
            <button className="details-btn">More Details</button>
            <p className="hidden-details">{card.details}</p>
          </div>
        ))}
      </section>
      <section className="why-choose-us">
        <div className='title'>Why Choose Us?</div>
        <ul>
          <li>Real-World Insights: Access firsthand information from students actively engaged in university life, ensuring that you receive relevant and up-to-date advice.</li>
          <li>Peer-to-Peer Support: Benefit from the perspective of peers who understand the challenges and opportunities of higher education and can provide empathetic support.</li>
          <li>Personalized Guidance: Receive tailored advice and recommendations to help you achieve your academic and career goals effectively.</li>
        </ul>
      </section>
      <section className="why-choose-us1">
        <div className='title'>Get Started Today!</div>
        <ul>
          <li>Embark on your educational journey with confidence by connecting with our student experts. Whether you're exploring university options, seeking scholarship opportunities, or navigating the admissions process, Education Consultancy is here to support you every step of the way.</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
