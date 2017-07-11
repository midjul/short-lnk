import React from 'react';
import { Meteor } from 'meteor/meteor';
import Modal from 'react-modal';


class AddLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            isOpen: false,
            error: ''
        }
        this.onChange = this.onChange.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();

        const { url } = this.state;

        Meteor.call('links.insert', url, (err, res) => {
            if (!err) {
                this.handleModalClose();
            } else {
                this.setState({ error: err.reason })
            }
        });
    }
    onChange(e) {
        this.setState({ url: e.target.value })
    }
    handleModalClose() {
        this.setState({ isOpen: false, url: '', error: '' })
    }
    render() {

        return (
            <div>
                <button className="button" onClick={() => this.setState({ isOpen: true })}>+ Add Link</button>
                <Modal
                    isOpen={this.state.isOpen}
                    contentLabel="Add link"
                    onRequestClose={this.handleModalClose}
                    onAfterOpen={() => this.refs.url.focus()}>
                    <h1>Add Link</h1>
                    {this.state.error ? <p>{this.state.error} </p> : undefined}
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <input type="text"
                            placeholder="URL"
                            ref="url"
                            value={this.state.url}
                            onChange={this.onChange} />
                        <button>Add Link</button>
                    </form>
                    <button onClick={this.handleModalClose}>Cancel</button>
                </Modal>
            </div>
        )
    }
}

export default AddLink;