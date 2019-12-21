import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { Redirect } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import './AddFilmsForm.scss';

export const AddFilmForm = ({ addFilm }) => {

  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (values) => {
    
    addFilm(values);
  };

  return (
    <div className="form">
      <Formik
        initialValues={{ title: '', year: '', format: '', stars: '', image: '' }}
        validate={values => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Required';
          } else if (
            !/[a-zA-Z0-9]+/g.test(values.title)
          ) {
            errors.title = 'Invalid title';

          } else if (!values.year) {
            errors.year = 'Required';
          } else if (
            !/^\d{4}$/g.test(values.year) && values.year > 1895
          ) {
            errors.year = 'Invalid year';

          } else if (!values.format) {
            errors.format = 'Required';
          } else if (
            !/[a-zA-Z0-9]+/g.test(values.format)
          ) {
            errors.format = 'Invalid format';

          } else if (!values.stars) {
            errors.stars = 'Required';
          } else if (
            !/[a-zA-Z0-9]+/g.test(values.stars)
          ) {
            errors.stars = 'Invalid actors';

          } else if (!values.image) {
            errors.image = 'Required';
          } else if (
            !/[a-zA-Z0-9]+/g.test(values.image)
          ) {
            errors.image = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          // values.stars = values.stars.split(/, |\. |; |,|\.|;+/g)
          handleSubmit(JSON.stringify(values));
          setSubmitting(false);          
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              <div className="ui label">
                Title:
              </div>
              <Field 
                type="title" 
                name="title"             
                className="form__input"
                placeholder="Set film title!"
              />
              <ErrorMessage name="title" component="div" />
            </label>

            <label>
              <div className="ui label">
                Year:
              </div>
              <Field 
                type="text" 
                name="year"
                className="form__input"
                placeholder="Set movie release year!" 
              />          
              <ErrorMessage name="year" component="div" />
            </label>

            <label>
              <div className="ui label">
                Format:
              </div>
              <Field 
                type="text" 
                name="format"
                className="form__input"
                placeholder="Set movie format!" 
              />
              <ErrorMessage name="format" component="div" />
            </label>

            <label>
              <div className="ui label">
                Actors:
              </div>
              <FieldArray name="stars">
                {({ push }) => (
                  <>
                    <Field 
                      type="text" 
                      name="stars"
                      className="form__input"
                      placeholder="Set movie stars!" 
                      onChange={() => push({ stars: ""  })}
                    />
                    <ErrorMessage name="stars" component="div" />
                  </>
                )}
              </FieldArray>
            </label>

            <label>
              <div className="ui label">
                Image:
              </div>
              <Field 
                type="text" 
                name="image"
                className="form__input"
                placeholder="Set movie image!" 
              />
              <ErrorMessage name="image" component="div" />
            </label>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

            {redirect && <Redirect to="/" />}
          </Form>
        )}
      </Formik>
    </div>
  )
};
