import React, {Component} from 'react';

import "./post-add-form.css";
class PostAddForm extends Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            text: ""
        };
        this.onValue = this.onValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValue(e){
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        if(this.state.text){
            this.props.onPost(this.state.text)
        }
        this.setState({
            text: ""
        })
    }

    render(){
        return (
            <form className="bottom-panel d-flex">
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValue}
                    value={this.state.text}
                />
                <button type="submit" onClick={this.onSubmit} className="btn btn-outline-secondary">Добавить</button>
            </form>
        );
    }
}

export default PostAddForm;
