import logo from './logo.svg';
import './App.css';
import Notes from "./Notes";
import Header from "./Header"
import Footer from "./Footer"
import CardNotes from "./CardNotes"
import { useEffect, useState } from 'react';

const getLocalStorageData = ()=>{

  let list = localStorage.getItem("lists");

  if(list){
    return JSON.parse(localStorage.getItem("lists"));
  }else{
    return [];
  }
}

function App() {

  const[isTrigger, setIsTrigger] = useState(false);
  const[dataId, setDataId] = useState(null);
  const [newData, setnewdata] = useState(getLocalStorageData());
  const[userData,setUserData] = useState({
    title: '',
    textarea:'',
    id:''
})


useEffect(()=>{
  localStorage.setItem("lists", JSON.stringify(newData));
},[newData]);

const userInput = (event)=>{

    var timestamp = new Date().getUTCMilliseconds();

    const{name,value}= event.target;
    
     setUserData(oldData =>{
        return{
            ...oldData,
            [name] : value,
            id:timestamp
        }
     });
     
}

const addCardData = ()=>{

  if((userData.title == "") &&(userData.textarea == "")){
      alert("pleasae enter data");
  }else if(isTrigger){
    setnewdata(
      newData.map((item,index)=>{
       if(item.id == dataId){
        return {
          ...item,
          title:userData.title,
          textarea:userData.textarea}
       }
       return item;
  }))
  setUserData({
    title: '',
    textarea:'',
    id:''
});
setIsTrigger(false);
  }else{

      setnewdata((prevData) =>{
        return[...prevData,userData];
      })
      setUserData({
        title: '',
        textarea:'',
        id:''
    });
  }
}

const editNotes = (id)=>{
    let editItem = newData.find((item)=>{
      return item.id ===id;
    })
    setIsTrigger(true);
    setUserData(editItem);
    setDataId(id);
     console.log(editItem);
}

const deleteCard = (id)=>{

    const filter = newData.filter((item,index)=>{
      return item.id !== id;
    }) 
    setnewdata(filter); 
    
}


  return (
    <>
    <div className='main-body'>
      <Header/>
       <Notes  AddingCard ={addCardData} userNoteData={userInput} cardData = {userData}/>
       <div className='Card-section'>
       {
          newData.map((cardNote,index)=>{
            return(
              <CardNotes 
              title={cardNote.title}
              key = {index}
              content = {cardNote.textarea}
              id = {cardNote.id}
              deleteDataCard={deleteCard}
              editCardNotes={editNotes}
              />
          ) 
          })     
        }
       </div>
       <Footer/>
    </div>
    </>
  );
}

export default App;
