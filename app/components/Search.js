// Include React
import React from 'react';

// Create the Search component
// Notice how the Search React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
class Search extends React.Component {
    render() {
        return (
            <h1>I'm the Search Component!!</h1>
        );
    }
}


// Export the component back for use in other files
export default Search;
