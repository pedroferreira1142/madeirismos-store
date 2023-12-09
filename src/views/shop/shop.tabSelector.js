import React from 'react';
import {NavItem, NavLink, Nav} from 'reactstrap';
import Block from '../../components/block/block';
import Skeleton from 'react-loading-skeleton';

export const TabSelector = ({tabsKeys, pills, setPills, pendingCollections}) => {
    return (
        <Block className="nav-align-center">
            <Nav className="nav-pills-info " pills role="tablist">
                {tabsKeys.map((collection, index) =>
                    pendingCollections ? (
                        <NavItem>
                            <Skeleton
                                count={1}
                                width="6.25rem"
                                height="2.56rem"
                                style={{marginRigh: 10, marginLeft: 10}}
                            />
                        </NavItem>
                    ) : (
                        <NavItem key={index}>
                            <NavLink
                                className={pills === index ? 'active' : ''}
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPills(index);
                                }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    fontWeight: 'bold',
                                }}
                            >
                                {collection}
                            </NavLink>
                        </NavItem>
                    )
                )}
            </Nav>
        </Block>
    );
};
