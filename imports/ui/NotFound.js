import React from 'react';
import {Link} from 'react-router';

export default () => (
    <div className="boxed-view">
        <div className="boxed-view__box">
            <h1>Page Not Found</h1>
            <p>Hmm, we're unable to find that page.</p>
            <Link to="/">HEAD HOME</Link>
        </div>
    </div>);