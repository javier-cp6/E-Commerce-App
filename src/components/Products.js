import { useState, useEffect } from "react"
import { getProducts } from "../services/productsService"
import { Row, Col, Card, Button, Container } from "react-bootstrap"

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
        getProducts()
        .then((data) => {
            setProducts(data)
        })
    }, [])
  return (
    <>
      <h1>Products</h1>
      <Container>
        <Row className="g-4">
          {products.map((item, i) => (
            <Col>
              <Card style={{ width: "18rem" }} key={i} className="h-100 text-center p-4">
                <Card.Img style={{height: '250px', objectFit:'contain'}} variant="top" src={item.image} alt={item.title}/>
                <Card.Body className="row align-items-center">
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Card.Text>${item.price}</Card.Text>
                  <Button variant="primary">Add to cart</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
