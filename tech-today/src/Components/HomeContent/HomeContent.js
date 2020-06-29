import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../HomeContent/HomeContent.css'


const homeContent = () => {
    return (
        <div className="card-container">
            <Card>
                <Card.Header>
                    <h4 className="title">Gaming</h4>
                    <span className="read-link" >Read More</span>
                </Card.Header>
            </Card>

            <CardGroup>
                <Card>
                <a target="_blank" href="https://nyti.ms/2NEhe5q">
                    <Card.Img variant="top" src="https://wrctr.co/3g5DS2D" />
                    </a>
                    <Card.Body>
                        <Card.Title><a href ="https://nyti.ms/3gaQllx">The Best Compact Mechanical Keyboards</a>
                        </Card.Title>
                        <Card.Text>
                        A compact mechanical keyboard takes up less space on a desk than a regular one—but you might need to be prepared to give up some keys in return.
                        
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">by Kimber Streams</small>
                    </Card.Footer>
                </Card>

                <Card>
                <a target="_blank" href="https://www.nytimes.com/wirecutter/reviews/best-couch-co-op-nintendo-switch-games/">
                    <Card.Img variant="top" src="https://wrctr.co/31onwOx" />
                    </a>
                    <Card.Body>
                    <a target="_blank" href="https://nyti.ms/2NEhe5q">
                        <Card.Title>19 Video Games to Play When You Need to Relax</Card.Title>
                        </a>
                        <Card.Text>
                        If you’re stuck inside and need something to help reduce your anxiety, these relaxed video games will get the job done.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">by Andrew Cunningham</small>
                    </Card.Footer>
                </Card>
                
                <Card>
                    <a target="_blank" href="https://nyti.ms/2NEhe5q">
                    <Card.Img variant="top" src="https://wrctr.co/38a4nBt" />
                    </a>
                    <Card.Body>
                    <a target="_blank" href="https://nyti.ms/2NEhe5q">
                        <Card.Title>5 of the Best Couch Co-op Games for Nintendo Switch</Card.Title>
                        </a>
                        <Card.Text>
                           Staff at Wirecutter shared some of their favorite split-screen, couch co-op games for the Nintendo Switch that are great for playing at home and with family.
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">by Wirecutter Staff</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
}
export default homeContent;



