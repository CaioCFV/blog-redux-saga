import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RedditActions from '../../store/actions';

function ShowPosts({modules,getPosts}){
    useEffect(()=>{
        getPosts();
        setTimeout(()=>{
            initVitrine();
        },1000)
       
    },[]);

    function initVitrine(){
        const vitrineElement = document.querySelector('.vitrine-posts');
        const containerElement = document.querySelector('.container-posts');
        const postsElement = document.querySelectorAll('.post-item');   
        const items = postsElement.length;
        const showItems = 1;
        const documentWidth = containerElement.clientWidth / showItems;
        
        vitrineElement.style.cssText = "width:"+items * documentWidth+"px;";
        containerElement.style.cssText = "overflow-x:auto;"

        postsElement.forEach(function(item){
            const slideElement = document.createElement('div');
            item.parentElement.insertBefore(slideElement,item);
            slideElement.appendChild(item);
            slideElement.style.cssText = "width:"+documentWidth+"px;";
            slideElement.setAttribute('class','item-vieirinha');
        })


    }

    return(
        <section className="posts max-container">
            <h1 className="post-container-title">
                Destaques
            </h1>
            <main className="container-posts ">
                <section className="vitrine-posts ">
                    {modules.map((item,i)=>(
                        <article className="post-item" key={i}>
                            <div className="post-image">
                                <img src={item.urlToImage} alt="thumbnail"/>
                            </div>
                            <div className="post-decription">
                                <h4 className="post-title">{item.title}</h4>
                                
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
        modules: state.data
    }
}

  
const mapDispatchToProps = (dispatch)=>
    bindActionCreators(RedditActions,dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(ShowPosts);
