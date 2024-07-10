import { Accordion, Container } from "react-bootstrap";

function PoliticasDePrivacidade() {
  return (
    <>
      <Container>
        <h1 className="m-4">Políticas de Privacidade</h1>
        <Accordion className="m-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, omnis amet aspernatur magni dolores ipsam!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, nam.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Item #3</Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Item #4</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              recusandae eveniet dolorem quo ipsam excepturi amet cum sed
              voluptatum, veniam reiciendis tempora voluptas aliquid corrupti.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Item #5</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              est voluptatum explicabo.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Item #6</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default PoliticasDePrivacidade;
