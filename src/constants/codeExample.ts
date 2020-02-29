const Buttons = `<Fragment>
  <Button variant="secondary" size="sm">
    Small
  </Button>
  <Button variant="secondary">Medium</Button>
  <Button variant="secondary" size="lg">
    Large
  </Button>
</Fragment>`;

const Cards = `<Row>
  <Col lg={4} md={6} sm={12} xs={12}>
    <Card className="cards mt-1 mb-1">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="cards-footer">Card Footer</Card.Footer>
    </Card>
  </Col>
  <Col lg={4} md={6} sm={12} xs={12}>
    <Card className="cards cards-hover mt-1 mb-1">
      <Card.Img variant="top" className="cards-hover__photo" src="/images/styleGuideImg.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <div className="cards-hover__text-fade"></div>
      </Card.Body>
    </Card>
  </Col>
  <Col lg={4} md={6} sm={12} xs={12}>
    <Card className="cards mt-1 mb-1">
      <Card.Header className="cards-header">Card Header</Card.Header>
      <Card.Img variant="top" src="/images/styleGuideImg.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>`;

const CheckBox = `<Form>
  <Form.Check custom inline label="1" type="checkbox" id="custom-inline-checkbox-1" />
  <Form.Check custom inline label="2" type="radio" id="custom-inline-radio-2" />
  <Form.Check className="check" type="switch" id="custom-switch" label="Check this switch" />
</Form>`;

const Colors = `<Fragment>
  <Button className="buttonClr" variant="secondary">
    Secondary
  </Button>
  <Button className="buttonClr" variant="info">
    Info
  </Button>
  <Button className="buttonClr" variant="primary">
    Primary
  </Button>
  <Button className="buttonClr" variant="light">
    Light
  </Button>
</Fragment>`;

const Inputs = `<>
  <DebounceInput
    className="form-control is-valid"
    placeholder="Enter please information"
    id="validationTooltip01"
    debounceTimeout={300}
    minLength={1}
    value={search}
    onChange={changeHandler}
    required
  />
  <div className="valid-feedback mb-2">Input</div>
  <DebounceInput
    className="form-control is-invalid"
    placeholder="Enter please information"
    id="validationTooltip01"
    debounceTimeout={300}
    minLength={1}
    value={search}
    onChange={changeHandler}
    required
  />
  <div className="invalid-feedback">Input</div>
</>`;

const Tables = `<>
<Table className="table table-hover" striped bordered hover variant="secondary">
  <thead>
    <tr>
      <th>Number</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {mappedItems.map((val: { description: number; date: number }, i: string | number | undefined) => (
      <tr key={i}>
        <td>{val.description}</td>
        <td>{val.date}</td>
      </tr>
    ))}
  </tbody>
</Table>
</>`;

const Typography = `<Fragment>
  <p className="h1">h1.Заголовок</p>
  <p className="h2">h2.Заголовок</p>
  <p className="h3">h3.Заголовок</p>
  <p className="h4">h4.Заголовок</p>
  <p className="h5">h5.Заголовок</p>
  <p className="h6">h6.Заголовок</p>
</Fragment>`;

export default { Buttons, Cards, CheckBox, Colors, Inputs, Tables, Typography };
