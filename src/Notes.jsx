import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";
import Button from '@mui/material/Button';

const Notes = (Props)=>{

    const userInputData = (event)=>{
        Props.userNoteData(event);
    }


    const addCardRecord = ()=>{
        Props.AddingCard();
    }

    return(
        <>
        <div className="note-body">
            <div className="notes-area">
            <input type="text" name="title" value={Props.cardData.title} placeholder="Title" onChange={userInputData}/>
            <textarea name="textarea" id="" value={Props.cardData.textarea} cols="" rows="" placeholder="Write a note" onChange={userInputData}></textarea>
            </div>
        <Button className="add-btn"  onClick={addCardRecord}>➕</Button>
        </div>
        </>
    )
}


export default Notes;