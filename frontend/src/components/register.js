import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: '',
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                password: '',
                confirmPassword: '',
                emailId: ''
            },
            loading: false,
            isCreatingUser: false,
            validateDetail: {
                firstName: 'form-control',
                lastName: 'form-control',
                dateOfBirth: 'form-control',
                password: 'form-control',
                emailId: 'form-control'
            },
            errors: {
                passwordMisMatch: null
            },
            isUserCreate: false,
        }
    }

    handleChange = (event) => {
    }


    componentDidMount() {
        console.log("register did mount");
        this.props.UserAction.resetUserExist();
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isUserCreate) {
            this.props.history.push("/signIn");
        }
    }


    render() {
        console.log('stateeeeee', this.state)
        const { validateDetail } = this.state;
        return (
            <div className="app flex-row align-items-center">
                <div className="container">
                        
                   <div className='content' style={{ marginTop: '2%' }}>
                        <div className="row">
                            <div className='col-lg-1'></div>
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-8">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-3 form-group text-right">

                                            <label>First Name</label>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className={validateDetail.firstName}
                                                    name='firstName' onChange={this.handleChange} placeholder="First Name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 form-group text-right">
                                            <label>Last Name</label>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className={validateDetail.lastName} name='lastName' onChange={this.handleChange} placeholder="Last Name" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                            <div className="col-lg-1"></div>
                        </div>
                        
                    </div>
                </div >
            </div >
        )
    }
}


export default Register;