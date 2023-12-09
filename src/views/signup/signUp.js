import {Box} from '@mui/system';
import React from 'react';
import {Link} from 'react-router-dom';
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    FormText,
} from 'reactstrap';
import {useSignupHelper} from './signup.helper.js';

// core components

function SignUp() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);

    const {
        email,
        password,
        passwordConfirm,
        errorPasswordConfirm,
        errorEmail,
        errorPassword,
        onChangePasswordConfirm,
        requestLoginHandler,
        onChangePassword,
        onChangeEmail,
    } = useSignupHelper();

    return (
        <>
            <div
                className="section section-signup"
                style={{
                    backgroundImage: 'url(' + require('assets/img/bg11.jpg').default + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',

                    height: '100vh',
                }}
            >
                <Container style={{maxHeight: 300}}>
                    <Row>
                        <Card className="card-signup" data-background-color="blue">
                            <Form action="" className="form" method="" onSubmit={(e) => requestLoginHandler(e)}>
                                <CardHeader className="text-center">
                                    <CardTitle className="title-up" tag="h3">
                                        Sign Up
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <InputGroup className={'no-border' + (firstFocus ? ' input-group-focus' : '')}>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons ui-1_email-85"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            value={email}
                                            placeholder="E-mail..."
                                            type="email"
                                            onFocus={() => setFirstFocus(true)}
                                            onBlur={() => setFirstFocus(false)}
                                            onChange={(e) => onChangeEmail(e)}
                                        />
                                    </InputGroup>
                                    <Box style={{width: '100%', minHeight: 20}}>
                                        {errorEmail && (
                                            <FormText color="warning" style={{marginBottom: 10}}>
                                                {errorEmail}
                                            </FormText>
                                        )}
                                    </Box>
                                    <InputGroup className={'no-border' + (lastFocus ? ' input-group-focus' : '')}>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons text_caps-small"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            value={password}
                                            placeholder="Senha..."
                                            type="password"
                                            onFocus={() => setLastFocus(true)}
                                            onBlur={() => setLastFocus(false)}
                                            onChange={(e) => onChangePassword(e)}
                                        />
                                    </InputGroup>
                                    <Box style={{width: '100%', minHeight: 20}}>
                                        {errorPassword && (
                                            <FormText color="warning" style={{marginBottom: 10}}>
                                                {errorPassword}
                                            </FormText>
                                        )}
                                    </Box>
                                    <InputGroup className={'no-border' + (emailFocus ? ' input-group-focus' : '')}>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons text_caps-small"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            value={passwordConfirm}
                                            placeholder="Repetir Senha..."
                                            type="password"
                                            onFocus={() => setEmailFocus(true)}
                                            onBlur={() => setEmailFocus(false)}
                                            onChange={(e) => onChangePasswordConfirm(e)}
                                        />
                                    </InputGroup>
                                    <Box style={{width: '100%', minHeight: 20}}>
                                        {errorPasswordConfirm && (
                                            <FormText color="warning" style={{marginBottom: 10}}>
                                                {errorPasswordConfirm}
                                            </FormText>
                                        )}
                                    </Box>
                                </CardBody>
                                <CardFooter className="text-center">
                                    <Button
                                        className="btn-neutral btn-round"
                                        color="info"
                                        /* onClick={(e) => e.preventDefault()} */
                                        size="lg"
                                        type="submit"
                                    >
                                        Criar conta
                                    </Button>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Row>
                    <div className="col text-center">
                        <Button className="btn-round btn-white" to="/login" outline size="lg" tag={Link}>
                            Ver Página de Autenticação
                        </Button>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default SignUp;
