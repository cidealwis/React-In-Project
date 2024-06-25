import React from 'react';
import DataComponent from '../../common/Layout/DataComponent/DataComponent';
import './DashBoard.css';
import image1 from '../../images/home/a.jpg';
import image2 from '../../images/home/b.jpeg';
import image3 from '../../images/home/c.jpg';

const data = [
  {
    image: image1,
    title: 'Comprehensive Curriculum',
    text: 'Our course covers everything from the fundamentals of currency markets to advanced trading strategies, as well as it equipped with high accurate technical analyzing lessons, trading psychology, money management, tricks for maintaining trading discipline & more ensuring you have the knowledge and skills to excel.',
    buttonText: 'Get it Now'
  },
  {
    image: image2,
    title: 'Practical Learning',
    text: 'We believe in hands-on experience. Our curriculum includes real-world case studies, simulations, and practical exercises to reinforce learning and build confidence.',
    buttonText: 'Get it Now'
  },
  {
    image: image3,
    title: 'Track Records',
    text: 'Our track record speaks for itself. Many of our past students have gone on to become successful traders, and we’re committed to helping you achieve the same level of success.',
    buttonText: 'Get it Now'
  }
];

function DashBoard() {
  return (
    <div className="home-container">
      <h1 className="dashboard-title">Our Exclusive Courses</h1>
      <div className="data-components-container">
        {data.map((item, index) => (
          <DataComponent
            key={index}
            image={item.image}
            title={item.title}
            text={item.text}
            buttonText={item.buttonText}
          />
        ))}
      </div>
      <button className="view-more-button">View More</button>
    </div>
  );
}

export default DashBoard;
