import React from 'react';

var ToolBar = React.createClass({
    render: function() {
        return (
            <div className="btn-group">
                <a href="#/" className="btn btn-default">
                    <span>Home</span>
                </a>
                <a href="#/create/" className="btn btn-default">
                    <span>Create</span>
                </a>
                <a href="#/history" className="btn btn-default">
                    <span>History</span>
                </a>
                <a href="#/sign" className="btn btn-default">
                    <span>Sign in</span>
                </a>
            </div>
        )
    }
});

export default ToolBar;
