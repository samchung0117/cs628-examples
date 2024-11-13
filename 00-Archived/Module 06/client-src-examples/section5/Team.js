// Section 5 - Team.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Team() {
    return <div>
        <h2>This is Team Component</h2>
        <div>
            <ul>
                <li>
                    <Link to="/team/member">Member</Link>
                </li>
            </ul>
        </div>
        <Outlet />
    </div>
}
export default Team;