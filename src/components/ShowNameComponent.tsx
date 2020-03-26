import React from 'react';

class ShowNameComponent extends React.Component<any, any> {
    render() {
        if(this.props.name) {
            const color = this.props.name.length >= 5 ? "blue" : "red";
            return(
                <div>
                    <h4 style={{color: color}}>{this.props.name}</h4>
                </div>
            )
        } else {
            return(
                <div>
                    <h4>Nog geen naam ingegeven...</h4>
                </div>
            )
        }
    }
}

export default ShowNameComponent;