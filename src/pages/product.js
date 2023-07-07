import React, { useRef, useState, useEffect } from "react"

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

import { getDatabase, set, ref, update, get, onValue, remove } from "firebase/database";
import { database } from "../firebase";

import { useAuth } from "../authContext.js"

export default function Product({itemKey, item}){

  const { getCurrentUser } = useAuth();
  const user = getCurrentUser();

  const { deleteItem } = useAuth();

    //console.log("ItemKey: ", itemKey)
    //console.log("item: ", item)
    console.log(item.url);
    const urlReg = item.url.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/igm);

    console.log("urlReg: ", urlReg);
    function handleDelete(itemID) {
      
       deleteItem(itemID);
    }

    function openUrlTab() {
      chrome.tabs.create({url:item.url});
    }
    return(
        <div>
    <Paper
        sx={{
          p: 1,
          margin: 'auto',
          maxWidth: 300,
          maxHeight:128,
          flexGrow:1,
          borderRadius:5,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid 
        sx={{maxWidth:'auto', flexGrow:1}}
        container spacing={2} 
        direction = "row"
        justifyContent="space-evenly"
        alignItems="center"
        >
          

          <Grid item xs={10}sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs={8} sx={{maxWidth:'90%'}}>
                
                <Typography gutterBottom variant="subtitle2" component="div">
                  {item.title}
                </Typography>
              
              
                <Link style ={{cursor:'pointer'}} onClick={()=> openUrlTab()} gutterBottom variant="caption">
                  {urlReg[0]}
                </Link>
              
              
                <Typography  variant="body2" color="text.secondary">
                  {item.notes}
                </Typography>

                
              </Grid>

             

            </Grid>
            
            
           
          </Grid>
         
        </Grid>
        <Box sx={{height:'auto',width:'auto',display:'flex', justifyContent:'flex-end', alignItems:'flex-end', height:'min-content'}}>
                  <IconButton  onClick={() => handleDelete(itemKey)}>
                    <DeleteIcon style={{fontSize: '20px'}} />
                  </IconButton>
                </Box>
      </Paper>
      </div>
    )
}
