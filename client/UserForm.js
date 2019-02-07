import React, {Component} from 'react';

import styles from './UserForm.css';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
}

    handleSubmit(e) {
        e.preventDefault();
        this.props.onUserSubmit(this.state.name);
    }

    handleChange(e) {
        this.setState({ name : e.target.value });
    }

    render() {
        return(  
        <form className={styles.UserForm} onSubmit={this.handleSubmit}>
            <h1>Welcom to ChatApp!</h1>  
            <input
                className={styles.UserInput}
                placeholder='Write your nickname and press enter'
                onChange={this.handleChange}
                value={this.state.name}
            />
        </form>
        );
    }
}

export default UserForm;