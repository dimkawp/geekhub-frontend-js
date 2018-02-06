import React, { Component } from 'react';

class Information extends Component {
    render() {
      return (
        <section id="information">
            <div className="information-block container">
                <div className="content col-sm-12 col-xl-7">
                    <article>
                        <header>
                            <h2>About us</h2>
                        </header>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing .</p>
                    </article>
                    <article>
                        <header>
                            <h2>Vision</h2>
                        </header>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                    </article>
                    <article>
                        <header>
                            <h2>mission</h2>
                        </header>
                        <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    </article>
                </div>
                <div className="content col-sm-12 col-xl-5">
                    <div className="player">
                        <img src="img/information/player.fw.png" alt="player"/>
                    </div>
                    <form>
                        <div><span>FREE Consultation</span></div>
                        <div className="inputs">
                            <input type="text" placeholder="name"/>
                            <input type="text" placeholder="email"/>
                            <textarea name="" id="" cols="30" rows="5" placeholder="Comment"></textarea>
                        </div>
                        <button type="submit">Submit Now</button>
                    </form>
                    
                </div>
            </div>
        </section>
        
      );
    }
  }

export default Information;