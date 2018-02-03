import React, { Component } from 'react';

class Services extends Component {
    render() {
      return (
        <section id="services">
            <div className="services-block container">
                <header>
                    <h3>Services</h3>
                </header>
                <div className="content container">
                    <article className="col-ms-12 col-xl-4">
                        <header><h4>business consultation</h4></header>        
                        <p>Many variations of passages of Lorem <br/>
                        available, but the majority have suffered <br/>
                        alteration in some form, by injected humour, or randomised.
                        words which don't look</p>
                    </article>
                    <article className="col-ms-12 col-xl-4">
                        <header><h4>boost local business</h4></header>
                        <p>There are many variations of passages of <br/>
                        Lorem Ipsum available, but the majority <br/>
                        have suffered alteration in some.
                        form, by injected humour, or randomised.
                        words which don't look</p>
                    </article>
                    <article className="col-ms-12 col-xl-4">
                        <header><h4>accounting</h4></header>        
                        <p>professor at Hampden-Sydney College in <br/>
                        Virginia, looked up one of the more obscure <br/>
                        Latin words, consectetur.</p>
                    </article>
                </div>
                <button>Full Services</button>
            </div>
        </section>
      );
    }
  }

export default Services;