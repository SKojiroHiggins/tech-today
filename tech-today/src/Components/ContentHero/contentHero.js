import React from 'react';
import Card from 'react-bootstrap/Card';
import contentHero from '../ContentHero/ContentHero.css'


const ContentHero = () => {
    return (
        <div className="hero">
            <div className='gif'>

                <Card className="bg-dark text-white">
                    <Card.Img src="https://bit.ly/2BBkvjc" alt="Gaming GIF" />
                    <Card.ImgOverlay>
                        <Card.Title>Gaming</Card.Title>
                        <Card.Text>
                        The latest tech news about the world's best (and sometimes worst) hardware, apps, and much more. From top companies like Google and Apple to tiny startups vying for your attention, Verge Tech has the latest in what matters in technology daily.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>












                {/* <br>
          </br>
        <Card>
          <Card.Header>Gaming</Card.Header>
          <Card.Body>
            <Card.Text>
              <p className='content-text'>
                The latest tech news about the world's best (and sometimes worst) hardware, apps, and much more. From top companies like Google and Apple to tiny startups vying for your attention, Verge Tech has the latest in what matters in technology daily.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <span></span>
      <div className='vid-box'>
        <iframe className='video-its'
          src="https://www.youtube.com/embed/_Q8AKghK44M" /> */}
            </div>
        </div>
    );
}

export default ContentHero;
