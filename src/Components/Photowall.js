import React from 'react';
import PropTypes from 'prop-types'
import Photo from './Photo'
function Photowall (props) {
    return  <div>
                <div className='photo-grid'>
                    {props.posts
                    .sort(function(x,y) {
                        return y.id - x.id;
                    })
                    .map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
                </div>
            </div>
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

// class Photowall extends Component {
//     render() {
//         return  <div className='photo-grid'>
//                     {this.props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto}/>)}
//                 </div>
//     }
// }

export default Photowall;