import React,{useState} from 'react';
import * as RedditActions from '../../store/actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

function SearchPosts({fechtingPosts}){
    const [text,setText] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        fechtingPosts(text)
    }

    function handleChange(e){
        const text = e.target.value
        setText(()=>text)
    }

    return(
        
        <div className="max-container search-posts">
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} placeholder="Buscar por posts" onChange={handleChange}/>
                <button type="submit">Lupa</button>
            </form>
        </div>
    )
}
  
const mapDispatchToProps = (dispatch)=>
    bindActionCreators(RedditActions,dispatch)

const mapStateToProps = (state) => {
    return {
        modules: state
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchPosts);