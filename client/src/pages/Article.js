import React from 'react'
import { useParams } from 'react-router-dom';
import articleContent from "./article-content";
import Articles from '../components/articles';
import NotFound from './notfound';
import { useState, useEffect } from 'react';
import CommentsList from '../components/commentsList';
import AddCommentForm from '../components/addcommentform';

const Article = () =>{
    const {name} = useParams();
    const article= articleContent.find((article)=>article.name === name)
    const [articleInfo, setArticleInfo]=useState({comments:[]});

    useEffect(()=>{
        const fetchData= async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            // console.log(body);
            setArticleInfo(body);
        }
       fetchData();
    }, [name]);

    function removeComment(e,index){
        console.log(e.target.id)
        setArticleInfo((prev)=>{ 
            console.log(prev)
            prev.comments.splice( e.target.id, 1 );
            return prev;
            // prev.comments.filter(comment=> e.target.id == index)

        })
    }
    if(!article)return <NotFound/>;
    const otherArticles = articleContent.filter(article=> article.name != name)
return(
    <>
<h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'> {article.title}</h1> 
{article.content.map((paragraph, index)=>(<p className='mx-auto leading-relaxed text-base mb-4' key={index}>{paragraph}</p>))}
<CommentsList 
comments={articleInfo.comments} 
removeComment={removeComment}
/>
<AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
<h1 className='sm:text-2xl text-xl font-bold my-4 text-gray-900'>
    Other Articles
</h1>
<div className='flex flex-wrap -m-4'>
<Articles articles={otherArticles}/>
</div>

    </>
)

}

export default Article;