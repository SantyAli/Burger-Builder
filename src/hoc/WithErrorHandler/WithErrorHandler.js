import React from "react";
import { Component } from "react";
import Auxx from "../Auxx";
import Modal from "../../Components/UI/Modal/Modal";
const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }
    //This does not work for me........
    // componentWillUnmount() {
    //   axios.interceptors.request.eject(this.reqInterceptor);
    //   axios.interceptors.respose.eject(this.resInterceptor);
    // }

    // componentDidMount() {
    //   axios.interceptors.request.use((req) => {
    //     this.setState({ error: null });
    //     return req;
    //   });
    //   axios.interceptors.response.use(
    //     (res) => res,
    //     (error) => {
    //       this.setState({ error: error });
    //     }
    //   );
    // }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Auxx>
          <Modal
            show={this.state.error}
            // modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxx>
      );
    }
  };
};

export default WithErrorHandler;
