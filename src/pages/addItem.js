import { React, useEffect, useState, useRef } from "react"


import { Form } from "react-bootstrap";
import { Card } from '@mui/material';
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

import { defaultButton, StyledTextField } from "../styles/MUIstyles";
import { ThemeProvider } from '@mui/material/styles';

import { database } from "../firebase";
import { getDatabase, set, ref, update, onValue, orderByChild,push } from "firebase/database";

import { useAuth } from "../authContext";

export default function AddItem(){

    const { getCurrentUser } = useAuth();
    const [pageData, setPageData] = useState({});
    const [isSaving, setIsSaving] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const notesRef = useRef();
    const tagsRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault()
        setIsSaving(true)

        const user = getCurrentUser();

        try{
            push(ref(database,`users/${user.uid}/items`), {
                url: pageData.url,
                title: pageData.title,
                tags: tagsRef.current.value,
                notes: notesRef.current.value
            })
            .then(() => {
                alert("Item Saved Successfully");
            })
            .catch((error) => {
                alert(error);
            })

        } catch {}


      }

      useEffect(() => {
  
        chrome.tabs &&
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            
            const url = tabs[0].url
            const title = tabs[0].title
            
            setPageData({ url, title })
          })
      }, [])


    return(

        <Card sx={{ display:'flex',alignItems:'center', justifyContent:'center'}}>

        <CardContent sx={{width:'100%', height:'100%', textAlign:'center', borderRadius:5}}>
   
    
    
        <Form onSubmit={handleSubmit} justifyContent="center" alignItems="center" >
          
            <Typography sx={{align:'center'}}>Title</Typography>
            <TextField id="outlined-basic" label={pageData.title} defaultValue={pageData.title}   />
          
          
            <Typography sx={{align:'center'}}>URL</Typography>
            <TextField id="outlined-basic" label={pageData.url} defaultValue={pageData.url}    />
          
          
            <Typography sx={{align:'center'}}>Tags</Typography>
            <TextField id="outlined-basic" label="Tags" variant="outlined"inputRef={tagsRef}/>
            
          
          
            <Typography sx={{align:'center'}}>Notes</Typography>
            <TextField id="outlined-basic" label="Notes" variant="outlined" inputRef={notesRef}/>
          
            <ThemeProvider theme={defaultButton}>
            <Button sx={{justifyContent:'center'}}variant="contained" type="submit" disabled={isSaving}>
              {/*isSaving ? <span>Saving</span> : <span>Save</span>*/} Save
            </Button>
            </ThemeProvider>
        </Form>
      
      </CardContent>
      </Card>
    )
}