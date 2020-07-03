import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RedditActions from '../../store/actions';

function Posts({modules}){
  
    return(
        <section className="result max-container">
            <main className="container-posts ">
                <section className="result-posts">
                    {modules.map((item,i)=>(
                        <article className="result-item" key={i}>
                            <div className="result-image">
                                <img src={item.urlToImage} alt="thumbnail"/>
                            </div>
                            <div className="result-decription">
                                <h4 className="result-title">{item.title}</h4>
                                
                                <p>{item.description}</p>
                                <small>{item.publishedAt.split('T',1)}</small>
                                <a href={item.url}>Ver mais</a>
                            </div>

                        </article> 
                    ))}
                </section>
            </main>
        </section>
    )
}


const mapStateToProps = (state) => {
    return {
        modules: state.posts
    }
}

  
const mapDispatchToProps = (dispatch)=>
    bindActionCreators(RedditActions,dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Posts);
