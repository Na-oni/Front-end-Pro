import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

import styles from './BookingForm.module.css';

class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = { language: this.props.language, content: [] };
    }

    componentDidMount() {
        const { language } = this.props;
        axios.get('/languages/' + language + '/home/BookingForm.json').then(response => this.setState({ content: response.data })).catch(error => console.error(error));
    }

    render() {
        const { cities, onSubmit, latest_request } = this.props;
        const { content } = this.state;

        if (cities.length === 0 || !content.textCity) return null;

        const validationSchema = Yup.object({
            city: Yup.string().required(content.textCity.error),
            startDate: Yup.date().required(content.startDate.error).min(new Date(new Date().setDate(new Date().getDate() - 1)), content.startDate.minError),
            endDate: Yup.date().required(content.endDate.error).min(Yup.ref("startDate"), content.endDate.minError),
            adults: Yup.number().required(content.adults.error).min(1, content.adults.minError),
            children: Yup.number().required(content.children.error).min(0, content.children.minError)
        });

        const initialValues = {
            city: latest_request?.city || cities[0]?.city || "",
            startDate: latest_request?.startDate || "",
            endDate: latest_request?.endDate || "",
            adults: latest_request?.adults || 1,
            children: latest_request?.children || 0
        };

        return (
            <>
                <p className={styles.title}>{content.title?.label}</p>
                <div className={styles.form}>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({ errors, touched }) => (
                            <Form>
                                <div className={styles.form_row}>
                                    <div className={styles.form_group}>
                                        <label htmlFor="city">{content.textCity.label}</label>
                                        <Field as="select" id="city" name="city" className={styles.form_control}>
                                            {cities.map((city, index) => (
                                                <option key={index} value={city.city}>{city.city}
                                                </option>
                                            ))}
                                        </Field>
                                        {errors.city && touched.city && <div className={styles.error}>{errors.city}</div>}
                                    </div>
                                    <div className={styles.form_group}>
                                        <label htmlFor="start-date">{content.startDate.label}</label>
                                        <Field type="date" id="start-date" name="startDate" className={styles.form_control} />
                                        {errors.startDate && touched.startDate && <div className={styles.error}>{errors.startDate}</div>}
                                    </div>
                                    <div className={styles.form_group}>
                                        <label htmlFor="end-date">{content.endDate.label}</label>
                                        <Field type="date" id="end-date" name="endDate" className={styles.form_control} />
                                        {errors.endDate && touched.endDate && <div className={styles.error}>{errors.endDate}</div>}
                                    </div>
                                </div>
                                <div className={styles.form_row}>
                                    <div className={styles.form_group}>
                                        <label htmlFor="adults">{content.adults.label}</label>
                                        <Field type="number" id="adults" name="adults" className={styles.form_control} min="1" />
                                        {errors.adults && touched.adults && <div className={styles.error}>{errors.adults}</div>}
                                    </div>
                                    <div className={styles.form_group}>
                                        <label htmlFor="children">{content.children.label}</label>
                                        <Field type="number" id="children" name="children" className={styles.form_control} min="0" />
                                        {errors.children && touched.children && <div className={styles.error}>{errors.children}</div>}
                                    </div>
                                    <div className={styles.form_group}>
                                        <label>&nbsp;</label>
                                        <button type="submit" className={styles.btn_submit}>{content.submitButton}</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </>
        );
    }
}

export default BookingForm;