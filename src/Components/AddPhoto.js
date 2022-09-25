import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const link = event.target.elements.imagelink.value;
        const desc = event.target.elements.imagedescription.value;
        const post = {
            id: Number(new Date()),
            description: desc,
            imageLink: link
        };
        console.log(`(${link},${desc})`);
        if(desc && link) {
            this.props.onAddPhoto(post)
        }
    }

    render() {
        return(
            <div>
                <h1>Add Photo</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="imagelink"/>
                        <input type="text" placeholder="Description" name="imagedescription"/>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto