// Section 6 - Member.js
// https://reactrouter.com/en/main/hooks/use-params#useparams
import React from 'react';
import { useParams } from 'react-router-dom';

function Member() {

    const { id } = useParams();

    return (
      <div>
        <h2>Member Details</h2>
        <p>Member ID: {id}</p>
      </div>
    );
}

export default Member;