import {IonContent, IonPage, IonSearchbar} from '@ionic/react';
import React from 'react';
import '../../theme/Home.css';
import ShowNameComponent from "../../components/ShowNameComponent";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {updateUserName} from "./HomeActions";

class HomePage extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    componentWillUnmount(): void {
        const {initialize} = this.props;
        initialize({
            name: ""
        });
    }

    onSearchBarChange(event: any) {
        this.props.updateUserName(event.detail.value);
        // this.setState({name: event.detail.value})
    }

    render(): React.ReactElement<any, any> {
        return (
            <IonPage>
                <IonContent>
                    <h1>Hallo geef je naam in!</h1>
                    <IonSearchbar value={this.props.name} onIonChange={e => this.onSearchBarChange(e)}/>
                    <h1>Ingegeven tekst:</h1>
                    <ShowNameComponent name={this.props.name}/>
                </IonContent>
            </IonPage>
        );
    }
}

function mapStateToProps(state: any) {
    return({
        name: state.home.name
    })
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({
        updateUserName
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
