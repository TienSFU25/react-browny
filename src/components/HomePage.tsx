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

import '../styles/barGraph.scss';

export default class HomePage extends React.Component<any, any> {
    render() {
        return (
            <Router>
                <div>
                    <h2>Topics</h2>
                    <ul>
                        <li>
                            <Link to={`/bar`}>
                                Rendering with React
                            </Link>
                        </li>
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
                                Lifecycle
                            </Link>
                        </li>
                    </ul>

                    <Route path="/bar" component={DynamicBarGraph}/>
                    <Route path="/thing" component={Thing}/>
                    <Route path="/things" component={Things}/>
                    <Route path="/lifecycle" component={LifecycleThings}/>
                    <Route path="/hoc" component={HigherOrderThings}/>
                </div>
            </Router>
        );
    }
}