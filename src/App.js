import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ posts: json }))
  }
  render() {
    const { posts } = this.state;
    return (
<div className="body">
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="/">Portfolio</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Gallery</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>

<div className="jumbotron">
  <div className="container text-center">
    <h1>React App in AWS</h1>      
  </div>
</div>
  
  <div className="container-fluid bg-3 text-center">    
  {/* <h3>Some of my Work</h3> */}
  <div className="row">
  {posts.map((post) => ( 
    <div className="card text-dark bg-white col-sm-3 px-3 py-3" key={post.id}>
      <p> {post.title}</p>
      <img src ={`https://picsum.photos/id/${post.id}/300/200`} className="img-responsive"  alt="new" />
      <p>{post.body}</p>
    </div>
    ))}
   
  </div>
</div>




<footer className="container-fluid text-center">
  <p>React App in AWS</p>
</footer>
</div>
      
      
    );
  }
}
export default App;