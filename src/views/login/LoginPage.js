import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col,
    FormText,
} from 'reactstrap';
import NavbarMenu from 'components/Navbars/navbarMenu';
import TransparentFooter from 'components/Footers/TransparentFooter.js';
import {useLoginPageHelper} from './loginPage.helper';

function LoginPage() {
    const {
        email,
        password,
        errorEmail,
        errorPassword,
        history,
        navbarEffect,
        requestLoginHandler,
        onChangePassword,
        onChangeEmail,
    } = useLoginPageHelper();

    React.useEffect(() => {
        navbarEffect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);

    return (
        <>
            <NavbarMenu activeScrollTransperency={true} />
            <div className="page-header clear-filter" filter-color="blue">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: 'url(' + require('assets/img/login.jpg').default + ')',
                    }}
                />
                <div className="content">
                    <Container>
                        <Col className="ml-auto mr-auto" md="4">
                            <Card className="card-login card-plain">
                                <Form action="" className="form" method="" onSubmit={(e) => requestLoginHandler(e)}>
                                    <CardHeader className="text-center">
                                        <div className="logo-container">
                                            <img alt="..." src={require('assets/img/now-logo.png').default} />
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <InputGroup
                                            className={'no-border input-lg' + (firstFocus ? ' input-group-focus' : '')}
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons ui-1_email-85"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                value={email}
                                                placeholder="E-mail"
                                                type="email"
                                                onFocus={() => setFirstFocus(true)}
                                                onBlur={() => setFirstFocus(false)}
                                                onChange={(e) => onChangeEmail(e)}
                                            />
                                        </InputGroup>
                                        {errorEmail && (
                                            <FormText color="warning" style={{marginBottom: 10}}>
                                                {errorEmail}
                                            </FormText>
                                        )}
                                        <InputGroup
                                            className={'no-border input-lg' + (lastFocus ? ' input-group-focus' : '')}
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons text_caps-small"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>

                                            <Input
                                                value={password}
                                                placeholder="Password"
                                                type="password"
                                                onFocus={() => setLastFocus(true)}
                                                onBlur={() => setLastFocus(false)}
                                                onChange={(e) => onChangePassword(e)}
                                            />
                                        </InputGroup>
                                        {errorPassword && (
                                            <FormText color="warning" style={{marginBottom: 10}}>
                                                {errorPassword}
                                            </FormText>
                                        )}
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button block className="btn-round" color="info" size="lg" type="submit">
                                            Iniciar
                                        </Button>

                                        <div className="pull-mid">
                                            <h6>
                                                <a
                                                    className="link"
                                                    href="signup"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        history.push('/signup');
                                                    }}
                                                >
                                                    Criar Conta
                                                </a>
                                            </h6>
                                        </div>
                                    </CardFooter>
                                </Form>
                            </Card>
                        </Col>
                    </Container>
                </div>
                <TransparentFooter />
            </div>
        </>
    );
}

export default LoginPage;
