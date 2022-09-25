import React, { Component } from 'react';
import Heading from '../Components/Heading';
import Photowall from '../Components/Photowall';
import AddPhoto from '../Components/AddPhoto'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Main extends Component {
    constructor() { // Called only once in a lifetime.
        console.log('Start Constructor');
        super();
        this.state = {
            posts: [{
                id: 0,
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
            }, 
            {
                id: 1,
                description: "Aliens???",
                imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
            }, 
            {
                id: 2,
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }]
            //this works fine render method then why doesn't in removePhoto
            //this keyword binding is broken, !!!PROBLEM
            //Then how do I update the component's state if I am not able to reference to Component's instance.
            //How do restore the context
        }
        this.removePhoto = this.removePhoto.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
        console.log('End Constructor');
    }

    addPhoto(postSubmitted)
    {
        console.log('Adding Photo');
        this.setState( (state) => ({
            posts: state.posts.concat([postSubmitted])
        }));
    }

    removePhoto(postRemoved) {
        console.log('Removing : postRemoved.description');
        this.setState( (state) => ({
            posts: state.posts.filter(post => post!==postRemoved )
        }));
    }

    componentDidUpdate(prevProps, prevState) {//Invoked whenever render the state is updated and render is called.
        console.log('Start componentDidUpdate -- re-render');
        console.log(prevState.posts);
        console.log(this.state);
    }

    componentWillMount() {//Invoked before the component is mounted
        console.log('Start ComponentWillMount');
    }
    
    componentDidMount() {//Invoked right after the component is mounted into the DOM. Preferred for Async calls and AJAX API Calls. Server/API requests.
        // console.log('Start ComponentDidMount');
        // const data = SimulateFetchFromDatabase();
        // this.setState(() => ({
        //     posts: data
        // }));
        console.log('End ComponentDidMount');
    }

    render() { // NO ASYNC OR AJAX function should be here.
        console.log('Start Render');
        return  (
                <div>
                    <Route exact path="/" render={()=>(
                        <div>
                            <Heading title="!@#$%^&*()"/>
                            <Link className="add-icon" to="/AddPhoto"/>
                            <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
                        </div>
                    )}/>
                    {/* {<Route exact path="/AddPhoto" component={AddPhoto}/>} */} 
                    {/* Alternatively */}
                    {<Route exact path="/AddPhoto" render={({history}) => (
                        <AddPhoto onAddPhoto={(addedPost) => (
                            this.addPhoto(addedPost),
                            history.push('/')
                        )}/>
                    )}/>}
                </div>
        )
    }
}

// function SimulateFetchFromDatabase()
// {
//     return [{
//         id: "0",
//         description: "beautiful landscape",
//         imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//         "3919321_1443393332_n.jpg"
//     }, 
//     {
//         id: "1",
//         description: "Aliens???",
//         imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
//     }, 
//     {
//         id: "2",
//         description: "On a vacation!",
//         imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//     }];
// }

export default Main;