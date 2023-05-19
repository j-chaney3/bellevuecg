import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateWaitingListForm } from '../utils/validateWaitingListForm';

const WaitingListForm = () => {
	const handleSubmit = (values, { resetForm }) => {
		console.log('form values', values);
		resetForm();
	};

	return (
		<Formik
			initialValues={{
                
				firstName: '',
				lastName: '',
				email: '',
				borough: '',
				other: '',
			}}
			onSubmit={handleSubmit}
			validate={validateWaitingListForm}
		>
            {/*used to disable submit before validation is passes, wrap <Form></Form> within <Formik> */}
            {({isValid}) => (
			<Form>
				<FormGroup row>
					<Label htmlFor="firstName" md="1">
						First Name:
					</Label>
					<Col md="4">
						<Field
							name="firstName"
							placeholder="First Name"
							className="form-control"
						/>
						<ErrorMessage name="firstName">
							{(msg) => <p className="text-danger">{msg}</p>}
						</ErrorMessage>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label htmlFor="lastName" md="1">
						Last Name:
					</Label>
					<Col md="4">
						<Field
							name="lastName"
							placeholder="Last Name"
							className="form-control"
						/>
						<ErrorMessage name="lastName">
							{(msg) => <p className="text-danger">{msg}</p>}
						</ErrorMessage>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label htmlFor="email" md="1">
						Email:
					</Label>
					<Col md="4">
						<Field
							name="email"
							placeholder="Email Address"
							className="form-control"
						/>
						<ErrorMessage name="email">
							{(msg) => <p className="text-danger">{msg}</p>}
						</ErrorMessage>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label htmlFor="borough" md="1">
						Borough:
					</Label>
					<Col md="4">
						<Field
							name="borough"
							as="select"
							className="form-control"
						>
							<option vlaue=''>Borough</option>
							<option value='Avalon'>Avalon</option>
							<option value='Bellevue'> Bellevue</option>
							<option value='Brighton Heights'>Brighton Heights</option>
							<option value='other'>other</option>
						</Field>
						<ErrorMessage name="borough">
							{(msg) => <p className="text-danger">{msg}</p>}
						</ErrorMessage>
					</Col>
					<Col md="1">
						<Label htmlFor="other" md="1">
							Other:
						</Label>
					</Col>
					<Col md="5">
						<Field
							name="other"
							placeholder="If you selected other enter borough here"
							className="form-control"
						/>
						<ErrorMessage name="other">
							{(msg) => <p className="text-danger">{msg}</p>}
						</ErrorMessage>
					</Col>
				</FormGroup>
                <FormGroup row>
                    <Col md={{size: 10, offset: 0}}>
                        <Button type='submit' color='primary' disabled={!isValid}>
                            Add me to waitlist!
                        </Button>
                    </Col>
                </FormGroup>
			</Form>
            )}
		</Formik>
	);
};

export default WaitingListForm;
