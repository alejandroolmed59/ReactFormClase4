import React, {Component} from 'react';
import './ReactFeed.css'
import Post from './Post'
import {posts} from './posts'
import Form from './form'

const initValues = {
  author: "",
  text: "",
  img: ""
};

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      ...initValues,
      posts: posts
    }
  }

  likeHandler = index => {
    let postsAux = [...this.state.posts];

    postsAux[index].likes += 1;

    this.setState({
      posts: postsAux,
    })
  }

  changeHandler = event=> {
    console.log(event);
    const { target } = event;
    this.setState({
      [target.id]: target.value
    });
  }

  submitHandler = event => {
    event.preventDefault();
    const { author, text, img } = this.state;
    const postsAux = [...this.state.posts];
    postsAux.unshift({ 
      name:author, 
      text, 
      image:img,
      likes:0 
    });
    this.setState({ ...initValues, posts:postsAux });
  }
  
  render(){
    const postsComponents = this.state.posts.map((post, index) => {
      return (<Post
        key = {index}
        likes = {post.likes}
        name = {post.name}
        text = {post.text}
        image = {post.image}
        onClick = {()=> this.likeHandler(index)}
        />);
      
    });

    const { author, text, img} = this.state;
  
    return (
      <div className = "container">
        <h1>React Feed</h1>
        <h2>Recent posts</h2>
        <Form author={author} text={text} img={img} submitHandler={this.submitHandler} changeHandler={this.changeHandler} />
  
        <div className="posts">
          {postsComponents}
        </div>
      </div>
    );
  }
}

export default App;
