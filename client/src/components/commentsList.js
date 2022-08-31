import React from "react";

const CommentsList = ({comments, removeComment})=>{

    // const handleRemoveItem = (e) => {
    //     const name = e.target.getAttribute("name")
    //      updateList(list.filter(item => item.name !== name));
    //    };

    return(
<>
<h3 className="sm:text-2xl text-xl font-bold my-6 text-gray-900">
    Comments:
</h3>
{comments.map((comment, index)=>(
    <div className="shadow rounded px-8 pt-6 pb-8 mb-4" key={index}>
        <h4 className="text-xl font-bold">{comment.username}</h4>
        <p className="mt-1 mb-4">{comment.text}</p> 
        <button id={index} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
        onClick={()=>removeComment(index)}
        >Delete</button>
        
    </div>
))}
</>
    )
}

export default CommentsList;