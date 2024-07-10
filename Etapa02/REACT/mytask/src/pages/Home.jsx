import { Card, Button, CardGroup } from "react-bootstrap";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";

function Home() {
  return (
    <main className="m-4">
      <h1 className="m-4">Página inicial</h1>
      <CardGroup>
        <div className="d-flex">
          <Card className="mx-2">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Título 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                sunt inventore ipsa porro sint nobis.
              </Card.Text>
              <Button variant="primary">Saiba mais</Button>
            </Card.Body>
          </Card>
          <Card className="mx-2">
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>Título 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                sunt inventore ipsa porro sint nobis.
              </Card.Text>
              <Button variant="primary">Saiba mais</Button>
            </Card.Body>
          </Card>
          <Card className="mx-2">
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Título 3</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                sunt inventore ipsa porro sint nobis.
              </Card.Text>
              <Button variant="primary">Saiba mais</Button>
            </Card.Body>
          </Card>
        </div>
      </CardGroup>

      <CardGroup>
        <div className="d-flex mt-4">
          <Card className="mx-2">
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Title>Título 4</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                sunt inventore ipsa porro sint nobis.
              </Card.Text>
              <Button variant="primary">Saiba mais</Button>
            </Card.Body>
          </Card>
          <Card className="mx-2">
            <Card.Img variant="top" src={image5} />
            <Card.Body>
              <Card.Title>Título 5</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                sunt inventore ipsa porro sint nobis.
              </Card.Text>
              <Button variant="primary">Saiba mais</Button>
            </Card.Body>
          </Card>
          <Card className="mx-2">
            <Card.Img variant="top" src={image6} />
            <Card.Body>
              <Card.Title>Título 6</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                sunt inventore ipsa porro sint nobis.
              </Card.Text>
              <Button variant="primary">Saiba mais</Button>
            </Card.Body>
          </Card>
        </div>
      </CardGroup>
    </main>
  );
}

export default Home;
