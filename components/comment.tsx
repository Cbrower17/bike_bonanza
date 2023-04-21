import React, { useState } from "react";
export default function Comment({ comment}) {
  
  return (
    <tr >
        <td>{comment.user}:</td>
        <td >{comment.content}</td>
        
        <td className= "">
            
            <p className="inline-grid">{comment.votes}</p>
            
        </td>
    </tr>
  );
}