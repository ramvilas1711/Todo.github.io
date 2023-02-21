import React, { useState } from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const CardNotes = (Props)=>{
  
  const[showMenu, setShowMenu] = useState(false);

  const showMenuOption = ()=>{ 
    setShowMenu(!showMenu);
    
  }

  const deleteData = ()=>{
    Props.deleteDataCard(Props.id);
  }

  const editData = ()=>{
    Props.editCardNotes(Props.id);
  }

    return(
        <>
            <Card className="card-area">
              <div className="menu">
              <ListOutlinedIcon className="menu-icon" onClick= {showMenuOption}></ListOutlinedIcon>
              {
                showMenu && (<ul className="menu-option">
                <li>
                   <Button onClick={deleteData}>
                    <DeleteIcon/>              
                   </Button>
                </li>
                <li>
                    <Button onClick={editData}>
                       <EditOutlinedIcon/>
                    </Button>
                </li>
              </ul>)
              }
             
              </div>
              <h2>{Props.title}</h2>
              <p>{Props.content}</p>
            </Card>

        </>
    )
}

export default CardNotes;