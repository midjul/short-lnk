import React from 'react';
import { Meteor } from 'meteor/meteor';


class AddLink extends React.Component {
    constructor(props){
        super(props);
        this.state={
            url:''
        }
        this.onChange=this.onChange.bind(this);
    }
onSubmit(e) {
    e.preventDefault();

    const {url}=this.state;

    if (url) {
      Meteor.call('links.insert', url, (err, res)=>{
       if(!err){
       this.setState({url:''})
       }
      });
    }
  }
  onChange(e){
  this.setState({url:e.target.value})
  }
    render() {
        return (
            <div>
                <p>Add Link</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text"  
                    placeholder="URL" 
                    value={this.state.url}
                    onChange={this.onChange} />
                    <button>Add Link</button>
                </form>
            </div>
        )
    }
}

export default AddLink;