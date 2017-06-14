import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import DynamicBarGraph from './DynamicBarGraph';
import Thing from './Thing';
import Things from './Things';
import LifecycleThings from './LifecycleThings';
import HigherOrderThings from './HigherOrderThings';
import HigherOrderThings2 from './HigherOrderThings2';
import HigherOrderThings3 from './HigherOrderThings3';

import '../styles/barGraph.scss';

export default class HomePage extends React.Component<any, any> {
    render() {
        return (
            <Router>
                <div>
                    <h2>Topics</h2>
                    <ul>
                        <li>
                            <Link to={`/thing`}>
                                Thing
                            </Link>
                        </li>
                        <li>
                            <Link to={`/things`}>
                                Things
                            </Link>
                        </li>
                        <li>
                            <Link to={`/lifecycle`}>
                                Lifecycle
                            </Link>
                        </li>
                        <li>
                            <Link to={`/hoc`}>
                                Higher order components
                            </Link>
                        </li>
                        <li>
                            <Link to={`/hoc2`}>
                                More higher order components
                            </Link>
                        </li>
                        <li>
                            <Link to={`/hoc3`}>
                                Even more higher order components
                            </Link>
                        </li>
                        <li>
                            <Link to={`/bar`}>
                                Something remotely useful
                            </Link>
                        </li>
                    </ul>

                    <Route path="/bar" component={DynamicBarGraph}/>
                    <Route path="/thing" component={Thing}/>
                    <Route path="/things" component={Things}/>
                    <Route path="/lifecycle" component={LifecycleThings}/>
                    <Route path="/hoc" component={HigherOrderThings} />
                    <Route path="/hoc2" component={HigherOrderThings2} />
                    <Route path="/hoc3" component={HigherOrderThings3} />
                </div>
            </Router>
        );
    }
}