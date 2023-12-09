import React from 'react';

// reactstrap components
import {Container} from 'reactstrap';

// core components

function ProfilePageHeader() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                if (pageHeader.current)
                    pageHeader.current.style.transform = 'translate3d(0,' + windowScrollTop + 'px,0)';
            };
            window.addEventListener('scroll', updateScroll);
            return function cleanup() {
                window.removeEventListener('scroll', updateScroll);
            };
        }
    }, [pageHeader]);
    return (
        <>
            <div className="page-header clear-filter page-header-small" filter-color="blue">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: 'url(' + require('assets/img/bg5.jpg').default + ')',
                    }}
                    ref={pageHeader}
                />
                <Container>
                    <div className="photo-container">
                        <img alt="..." src={require('assets/img/ryan.jpg').default}></img>
                    </div>
                    <h3 className="title">Loja Online</h3>
                    <p className="category">A nossa coleção</p>
                </Container>
            </div>
        </>
    );
}

export default ProfilePageHeader;
