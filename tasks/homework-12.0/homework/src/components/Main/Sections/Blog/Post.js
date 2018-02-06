import React, { Component } from 'react';

class Post extends Component {
    render() {
      return (
        <section id="post">
        <div className="post-block container">
                <header>
                    <h2>blog post</h2>
                </header>
                <div className="post-content">
                    <div className="preview">
                        <div className="tegs">
                            <ul>
                                <li>
                                    <a href="">Health</a>
                                    <i className="icon-tag"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="img"></div>
                    </div>
                    <article>
                        <header>
                            <h3>Blog Heading Here</h3>
                        </header>
                        <div className="text-block">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            , when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className="ul-block">
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Proin tempus ipsum vitae velit convallis venenatis.</li>
                                <li>Curabitur vel felis pretium, blandit arcu in, sollicitudin ipsum.</li>
                            </ul>
                        </div>
                        <div className="text-block">
                            <img src="img/posts/post/img.fw.png" alt="img"/>
                            <p>Printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                        <footer>
                            <div className="data"><span>2017</span></div>
                            <div className="share">
                                <ul>
                                    <li>
                                        <a href=""><i className="icon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="">t</a>
                                    </li>
                                    <li>
                                        <a href="">g</a>
                                    </li>
                                    <li>
                                        <a href="">s</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                    </article>
                    <hr/>
                </div>
        </div>
    </section>
    
      );
    }
  }

export default Post;