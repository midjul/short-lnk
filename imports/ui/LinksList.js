import React from 'react';
import { Tracker } from 'meteor/tracker';
import { Links } from '../api/links';
import { Meteor } from 'meteor/meteor';
import LinksListItem from './LinksListItem';
import { Session } from 'meteor/session';
import FlipMove from 'react-flip-move';

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
            const links = Links.find({ visible: Session.get('showVisible') }).fetch();
            this.setState({ links });
        });
    }

    componentWillUnmount() {
        this.linksTracker.stop();
    }
    renderLinksListItems() {
        if (this.state.links.length === 0) {
            return <div className="item"><p className="item__status-message">No Links Found</p></div>
        }
        return this.state.links.map((item) => {
            const shortUrl = Meteor.absoluteUrl(item._id)
            return (<LinksListItem shortUrl={shortUrl} key={item._id} {...item} />);
        });
    }
    render() {
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderLinksListItems()}
                </FlipMove>
            </div>
        )
    }
}


export default LinksList;