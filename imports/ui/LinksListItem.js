import React from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';

class LinksListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            justCopied: false
        }
    }
    componentDidMount() {
        this.clipboard = new Clipboard(this.refs.copy);

        this.clipboard.on('success', () => {
            this.setState({
                justCopied: true
            })

            setTimeout(() => this.setState({ justCopied: false }), 1000);

        }).on('error', () => {
            alert('Unable to copy. Please manually copy the link');
        })
    }
    componentWillUnmount() {
        this.clipboard.destroy();
    }
    renderStats(){
        const visitmessage=this.props.visitedCount===1 ? 'visit': 'visits';
        let visitedMessage=null;
        if(typeof this.props.lastVisitedAt=== 'number'){
        const momentNow=moment(this.props.lastVisitedAt);
          visitedMessage=`(visited ${momentNow.fromNow()})`;
        }
     return <p>{this.props.visitedCount} {visitmessage} - {visitedMessage}</p>
    }
    render() {
        return (
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
                <p>{this.props.visible.toString()}</p>
                  {this.renderStats()}
                <button ref="copy" data-clipboard-text={this.props.shortUrl}>{(this.state.justCopied) ? 'Copied' : 'Copy'}</button>
                <button onClick={() => {
                    Meteor.call('links.setVisibility', this.props._id, !this.props.visible);
                }}>
                    {this.props.visible ? 'Hide' : 'Unhide'}
                </button>
            </div>
        )
    }
}

LinksListItem.propTypes = {
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    shortUrl: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    visitedCount: PropTypes.number.isRequired,
    lastVisitedAt: PropTypes.number
}
export default LinksListItem;