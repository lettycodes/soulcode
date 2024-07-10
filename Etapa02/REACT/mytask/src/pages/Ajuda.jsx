import { Container, Accordion, Button, Alert } from "react-bootstrap";

function Ajuda() {
  return (
    <main className="mt-4">
      <Container>
        <h1>Ajuda</h1>
        <hr />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Sobre o nosso sitema</Accordion.Header>
            <Accordion.Body>
              My Task é um sistema para gerenciamento de tarefas pessoais. Nesta
              aplicação você pode gerenciar todos os seus afazeres.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Sobre a empresa</Accordion.Header>
            <Accordion.Body>
              Essa empresa desenvolve soluções focadas em produtividade e
              bem-estar.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button className="mt-2 me-2">Entre em contato</Button>
        <Button variant="outline-danger" className="mt-2 me-2">
          Denunciar
        </Button>
        <Alert variant="warning" className="mt-2">
          Atenção! Estamos em manutenção.
        </Alert>
      </Container>
    </main>
  );
}

export default Ajuda;
