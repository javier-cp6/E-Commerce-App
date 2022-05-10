import { Card } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Card style={{ height: '550px' }} className="bg-light text-white border-0">
        <Card.Img style={{ height: '550px',objectFit: 'fill' }} src="https://picsum.photos/id/1025/4951/3301" alt="background" />
        <Card.ImgOverlay className="row align-items-center">
          <Card.Body>
            <Card.Title className="display-3 fw-bolder mb-0">New Season Arrivals</Card.Title>
            <Card.Text className="fs-2">
                Check out all the trends!
            </Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
