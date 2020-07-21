// Include React
import React from 'react';

// Create the Header component
// Notice how the Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
class Header extends React.Component {

    //constructor optional here, again can be functional component
    constructor(props){
        super(props);
    }
    render() {
        const myName = 'Joe';
        return (
            <h1>I'm a header!</h1>
        );

    }
}


// Export the component back for use in other files
export default Header;
