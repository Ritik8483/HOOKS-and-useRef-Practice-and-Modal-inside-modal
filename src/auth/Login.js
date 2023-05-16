import React from "react";
import styles from "../auth/Login.module.scss";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from 'yup'

const Login = () => {
  const initialValues = {
    email: "",
  };
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required "),
  });
  const submitForm = (val) => {
    console.log(val);
  };

  return (
    <div>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h2>Login</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={submitForm}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form  className={styles.formGroup} onSubmit={handleSubmit}>
                <Form.Group
                //   className={styles.formGroup}
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="name@example.com"
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit">Login</Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
