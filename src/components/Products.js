import { useState, useEffect } from "react"
import { getProducts } from "../services/productsService"
import { Row, Col, Card, Button, Container } from "react-bootstrap"

export default function Products() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])


  const filterProducts = (e) => {
    setFilteredProducts(products.filter((prd) => prd.category === e.target.innerText.charAt(0).toLowerCase() + e.target.innerText.slice(1)))
  }

  // useEffect(() => {
  //   getProducts().then((data) => {
  //     setProducts(data);
  //   });
  // }, []);

  useEffect(() => {
    const getCategories = async () => {
        try {
            const arrProducts = await getProducts()
            setProducts(arrProducts)
            setFilteredProducts(arrProducts)
            const arrCategories = arrProducts.map((item) => item.category)
            // console.log(arrCategories)
            const uniqueCategories = [...new Set(arrCategories)]
            setCategories(uniqueCategories)
        } catch (error) {
            console.log(error)
        }
    }
    getCategories()
  }, [])

  return (
    <>
      <Container className="text-center">
        <Button variant="outline-dark m-2" onClick={(e) => {setFilteredProducts(products)}}>All</Button>
        {categories.map((item,i) => (
          <Button key={i} variant="outline-dark m-2" onClick={(e) => {filterProducts(e)}}>{item.charAt(0).toUpperCase() + item.slice(1)}</Button>
        ))}
      </Container>
      <Container>
        <h1 className="text-center display-5 fw-bold m-2">Latest Products</h1>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredProducts.map((item, i) => (
            // <Col className="col-sm-6 col-md-4 col-lg-3">
            <Col key={i}>
              {/* default <Card style={{ width: "18rem" }} */}
              <Card className="h-100 text-center p-4">
                <Card.Img style={{height: '250px', objectFit:'contain'}} variant="top" src={item.image} alt={item.title}/>
                {/* <Card.Body className="row align-items-center"> */}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description.substring(0,100)}...</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Text className="fw-bold fs-4">$ {item.price.toFixed(2)}</Card.Text>
                  <Button variant="dark ms-2">Add to cart</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
