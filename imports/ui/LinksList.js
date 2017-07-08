import React from 'react';
import { Tracker } from 'meteor/tracker';
import { Links } from '../api/links';
import {Meteor} from 'meteor/meteor';
import LinksListItem from './LinksListItem';
import {Session} from 'meteor/session';

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
            const links = Links.find({visible:Session.get('showVisible')}).fetch();
            this.setState({ links });
        });
    }

    componentWillUnmount() {
    this.linksTracker.stop();
    }
    renderLinksListItems() {
        return this.state.links.map((item) =>{
        const shortUrl=Meteor.absoluteUrl(item._id)
        return (<LinksListItem shortUrl={shortUrl} key={item._id} {...item} />);
        });
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