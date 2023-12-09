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
} from 'reactstrap';

// core components

function SignUp() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);
    return (
        <>
            <div
                className="section section-signup"
                style={{
                    backgroundImage: 'url(' + require('assets/img/bg11.jpg').default + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    minHeight: '700px',
                }}
            >
                <Container>
                    <Row>
                        <Card className="card-signup" data-background-color="blue">
                            <Form action="" className="form" method="">
                                <CardHeader className="text-center">
                                    <CardTitle className="title-up" tag="h3">
                                        Sign Up
                                    </CardTitle>
                                    <div className="social-line" style={{minHeight: 100}}></div>
                                </CardHeader>
                                <CardBody>
                                    <InputGroup className={'no-border' + (firstFocus ? ' input-group-focus' : '')}>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons ui-1_email-85"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="E-mail..."
                                            type="email"
                                            onFocus={() => setFirstFocus(true)}
                                            onBlur={() => setFirstFocus(false)}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup className={'no-border' + (lastFocus ? ' input-group-focus' : '')}>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons text_caps-small"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Senha..."
                                            type="password"
                                            onFocus={() => setLastFocus(true)}
                                            onBlur={() => setLastFocus(false)}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup className={'no-border' + (emailFocus ? ' input-group-focus' : '')}>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons text_caps-small"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Repetir Senha..."
                                            type="password"
                                            onFocus={() => setEmailFocus(true)}
                                            onBlur={() => setEmailFocus(false)}
                                        ></Input>
                                    </InputGroup>
                                </CardBody>
                                <CardFooter className="text-center">
                                    <Button
                                        className="btn-neutral btn-round"
                                        color="info"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                        size="lg"
                                    >
                                        Criar conta
                                    </Button>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Row>
                    <div className="col text-center">
                        <Button
                            className="btn-round btn-white"
                            color="default"
                            to="/login"
                            outline
                            size="lg"
                            tag={Link}
                        >
                            Ver página de autenticação
                        </Button>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default SignUp;
