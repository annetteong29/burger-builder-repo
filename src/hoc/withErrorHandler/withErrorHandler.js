import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                // clear any errors to ensure no error when 
                // new HTTP request is sent
                this.setState({error: null});
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                console.log('[withErrorHandler] DidMount');
                console.log(error);
                this.setState({error: error});
            });
        }

        // multiple interceptors are being attached to 
        // the same axios instance every time wEH is called.
        // when wEH is used across multiple pages i.e. routing,
        // multiple axios instances/classes will be called &
        // interceptors previously attached to components where wEH was used
        // will not be needed anymore BUT still exist.
        // worst case they could lead to errors or change state of app,
        // and in best case, just leak memory
        //
        // (for useEffect in functional component, this part of code
        // would be in return part of useEffect method.)
        componentWillUnmount() {
            // console.log('WillUnmount', this.reqInterceptor, this.resInterceptor);
            // returns 0 and 0 - these are IDs being kept by axios' memory
            // for both the request and response interceptors,
            // i.e. 2 different lists of interceptors
            // they start with index 0 and each list now has 1 element each
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
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

