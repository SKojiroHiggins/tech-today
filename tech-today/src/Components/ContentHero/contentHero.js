import React from 'react';
// import '../App.css';
import Card from 'react-bootstrap/Card';



function contentHero() {
  return (
    <div className="hero">
      <div className='content'>
        <Card>
          <Card.Header>Tech</Card.Header>
          <Card.Body>
            <Card.Text className="blockquote mb-0">
              <p>
                The latest tech news about the world's best (and sometimes worst) hardware, apps, and much more. From top companies like Google and Apple to tiny startups vying for your attention, Verge Tech has the latest in what matters in technology daily.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <span></span>
      <div className='vid-box'>
        <iframe className='video-its'
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
      </div>
    </div>
  );
}

export default contentHero;
