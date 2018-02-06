import React, { Component } from 'react';

class Comments extends Component {
    render() {
      return (
        <section id="comments">
        <div className="comments-block container">
            <div className="item col-sm-12 col-xl-6">
                <header>
                    <span>Comments</span>
                </header>
                <div className="mesages">
                    <div className="mesage"> 
                        <div className="mesage-block">
                            <div className="face-img"></div>
                            <article>
                                <header>
                                    <span className="name">visitor name</span>
                                    <button className="reply">Reply</button>
                                </header>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator 
                                on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which</p>
                            </article>
                        </div>
                    </div>
                    <div className="mesage answer">
                        <div className="mesage-block">
                            <div className="face-img"></div>
                            <article>
                                <header>
                                    <span className="name">visitor name</span>
                                    <button className="reply">Reply</button>
                                </header>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator 
                                on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which</p>
                            </article>
                        </div>
                    </div>
                    <div className="mesage">
                        <div className="mesage-block">
                            <div className="face-img"></div>
                            <article>
                                <header>
                                    <span className="name">visitor name</span>
                                    <button className="reply">Reply</button>
                                </header>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator 
                                on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item col-sm-12 col-xl-6">
                    <header>
                        <span>leave message</span>
                    </header>
                    <div className="form">
                        <form>
                            <div className="inputs">
                                <input type="text" placeholder="name"/>
                                <input type="text" placeholder="email"/>
                                <textarea name="" id="" cols="30" rows="10" placeholder="comment"></textarea>
                            </div>
                            
                            <button>Submit comment</button>                   
                        </form>
                    </div>
            </div>
        </div>
    </section>
    
      );
    }
  }

export default Comments;