import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        // we want to register interceptors 
        // BEFORE child components are rendered

        state = {
            error: null
        }

        // only called after all child elements have been rendered
        // i.e. end of return statement, in this case WrappedComponent
        // BUT since that reaches out to web in componentDidMount of WrappedComponent,
        // interceptors that return error msgs are not set up
        // unless componentWillMount or constructor is used
        componentWillMount() {
            axios.interceptors.request.use(req => {
                // clear any errors to ensure no error when 
                // new HTTP request is sent
                this.setState({error: null});
                return req;
            })
            axios.interceptors.response.use(res => res, error => {
                console.log('[withErrorHandler] DidMount');
                console.log(error);
                this.setState({error: error});
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render () {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;

