import React from 'react';
import { Tracker } from 'meteor/tracker';
import { Links } from '../api/links';
import {Meteor} from 'meteor/meteor';

class LinksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
    }
    componentDidMount() {
        this.linksTracker = Tracker.autorun(() => {
            Meteor.subscribe('links');
            const links = Links.find().fetch();
            this.setState({ links });
        });
    }

    componentWillUnmount() {
    this.linksTracker.stop();
    }
    renderLinksListItems() {
        return this.state.links.map((item) => <p key={item._id}>{item.url}</p>)
    }
    render() {
        return (
            <div>
                <p>Links List</p>
                <div>
                    {this.renderLinksListItems()}
                </div>
            </div>
        )
    }
}


export default LinksList;