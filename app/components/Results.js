// Include React
import React from 'react';

// Create the Results component
// Notice how Results uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
class Results extends React.Component {
    render() {
        return (
            <h1>I'm the Results Component!!</h1>
        );
    }
}

// Export the component back for use in other files
export default Results;
