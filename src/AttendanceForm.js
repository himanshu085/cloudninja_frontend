import react, * as React from "react";
import { Page, Grid } from "tabler-react";
import SiteWrapper from "./SiteWrapper.react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withFormik } from 'formik';
const AttendanceForm = ({ values, handleChange, handleSubmit, errors, touched, isSubmitting }) => {
  return (
    <SiteWrapper>
      <Page.Card
            title="Employee Registration"
        ></Page.Card>
        <Grid.Col md={6} lg={6} className="align-self-center">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            {touched.id && errors.id && <p className="red">{errors.id}</p>}
            <Label for="id">Employee ID</Label>
            <Input
              type="text"
              name="id"
              value={values.id}
              onChange={handleChange}
              id="id"
              placeholder="Employee ID"
            />
          </FormGroup>
          <FormGroup>
            {touched.name && errors.name && <p className="red">{errors.name}</p>}
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              id="name"
              placeholder="Employee Name"
            />
          </FormGroup>
          <FormGroup>
            {touched.status && errors.status && <p className="red">{errors.status}</p>}
            <Label for="status">Status</Label>
            <Input type="select" name="status" id="status" value={values.status} onChange={handleChange}>
              <option>Select Status</option>
              <option>Present</option>
              <option>Absent</option>
            </Input>
          </FormGroup>
          <FormGroup>
            {touched.date && errors.date && <p className="red">{errors.date}</p>}
            <Label for="date">Date</Label>
            <Input
              type="date"
              name="date"
              id="date"
              placeholder="datetime placeholder"
              value={values.date}
              onChange={handleChange}
            />
          </FormGroup>
          <Button color="primary" disabled={isSubmitting}>Submit</Button>
        </Form>
    </Grid.Col>
    </SiteWrapper>
  );
}
const FormikApp = withFormik({
  mapPropsToValues({ username, password }) {
    return { username, password }
  },
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    console.log(JSON.stringify(values))
    fetch('http://18.143.135.71:8082/api/v1/attendance/create', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
          'Content-Type': 'application/json'
    }})
  }
})(AttendanceForm);
export default FormikApp