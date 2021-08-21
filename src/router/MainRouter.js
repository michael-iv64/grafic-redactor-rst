import React, { Component } from 'react';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './MainRouter.module.css';

//  components
// tabs
import { TabsClassicGroup, TabsClassicItem ,TabsClassicPanel, Desktop, Internet, Mobile,Promocode } from '@design-system-rt/rtk-ui-kit';

import Main from '../components/Main';
import App from '../App'
import AddElem from '../components/AddElem';
// import Tabs from '../UI/Tabs';


class MainRouter extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render() {
        console.log('auth', this.props.auth.token.length)
        return (
            <BrowserRouter>
            <div className = {styles.main}>
                <nav>
                    <ul className={styles.header}>
                        <li>
                                <Link to="/"
                                    className={styles.navWrapper}
                                >
                                    <p className={styles.forLink}>
                                    <TabsClassicItem
                                        icon={<Internet />}
                                        index="0"
                                        label="Графический редактор"
                                        style={{marginRight: '50px'}}    
                                                    />
                                    </p>
                                </Link>
                        </li><br />
                        <li>
                                <Link to="/second"
                                    className={styles.navWrapper}
                                >
                                    <p className={styles.forLink}>

                                       <TabsClassicItem
                                            icon={<Desktop />}
                                            index="1"
                                            label="Компоненты пока в куче"
                                            style={{marginRight: '50px'}}    

                                        >
                                        
                                        </TabsClassicItem>
                                    </p>
                                </Link>
                                        
                            </li><br />
                        <li>
                                <Link to="/third"
                                    className={styles.navWrapper}
                                >
                                    <p className={styles.forLink}>

                                    <TabsClassicItem
                                        // disabled
                                        icon={<Promocode />}
                                        index="3"
                                        label="Добавить элемент"
                                        style={{marginRight: '50px'}}    
                                            
                                        />
                                        
                                    </p>
                                </Link>
                                        
                            </li><br />
                            
                            
                
                    </ul>
                    <Switch>
                                <Route  path="/second">
                                {/* <Second /> */}
                                <App />
                               </Route>
                                <Route  path="/third">
                                {/* <Second /> */}
                                <AddElem />
                               </Route>
                            {this.props.auth.token.length === 0
                                ?
                                <Route path="/">
                                    <Main />
                                    {/* <SignInForm /> */}
                                </Route>
                                :
                                <Route path="/">
                                    {/* <Admin /> */}
                                </Route>
                            }
                    </Switch>
                </nav>
            </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(MainRouter)