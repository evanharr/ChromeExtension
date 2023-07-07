
import { React, useEffect, useState, useRef } from "react"

import { useAuth } from "../authContext.js"
import { getDatabase, set, ref, update, get, onValue } from "firebase/database";
import { database } from "../firebase";

import { Form } from "react-bootstrap";
import { Card } from '@mui/material';
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { InputAdornment } from '@mui/material';

import { defaultButton, StyledTextField, SearchTextField } from '../styles/MUIstyles.js'
import { StyledTypography } from "../styles/MUIstyles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

import IconButton from '@mui/material/IconButton';
import ListIcon from '@mui/icons-material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

import "../styles/Home.module.css";

import Product from './product';
import AddItem from './addItem';
import Login from './login';
import { StaticGenerationAsyncStorageWrapper } from "next/dist/server/async-storage/static-generation-async-storage-wrapper.js";


export default function Home() {
  
  const [pageData, setPageData] = useState({});
  const [showList, setShowList] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { getCurrentUser } = useAuth();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const user = getCurrentUser();

  localStorage.removeItem("firebase:previous_websocket_failure")

function handleShowList() {
  if(!showList){
    setShowList(true);
    
    if(showAddItem)
    {
      setShowAddItem(false);
    }
    if(showLogin)
    {
      setShowLogin(false);
    }
    if(showSearch){
      setShowSearch(false);
    }
  }
 
  else{
    setShowList(false);
  }
  
}

function handleShowAddItem() {
  if(!showAddItem){
    setShowAddItem(true);

    if(showList)
    {
      setShowList(false);
    }
    if(showLogin)
    {
      setShowLogin(false);
    }
    if(showSearch){
      setShowSearch(false);
    }
  }

  else{
    setShowAddItem(false);
  }
}

function handleShowLogin() {
  if(!showLogin){
    setShowLogin(true);

    if (showList)
    {
      setShowList(false);
    }
    if (showAddItem)
    {
      setShowAddItem(false);
    }
    if(showSearch){
      setShowSearch(false);
    }
  }
 
  else{
    setShowLogin(false);
  }
}

function handleSearch(event) {
  if(!showSearch){
    setShowSearch(true);

    if (showList)
    {
      setShowList(false);
    }
    if (showAddItem)
    {
      setShowAddItem(false);
    }
    if(showLogin)
    {
      setShowLogin(false);
    }
  }
  

  const searchTerm = event.target.value;
  setSearch(searchTerm);

  //var res = items.filter(i => search.includes(i.title))
  console.log("inside handleSearch");
  console.log("searchRef: ", search)
  
  const result = {};
  Object.keys(items).forEach((key)=> {
    console.log("key:", key)
    if(items[key].title.toLowerCase().includes(search.toLowerCase())) {
      result[key] = items[key];
      console.log("result: ", result)
    }
  }
  
  //key.title.toLowerCase().includes(search.toLowerCase())  
  );
  /*
  const result = Object.keys(items).find((key) => 
    items[key].title.toLowerCase().includes(search.toLowerCase())
    
  );
  */
  if(result) {
    console.log("result: ", result)
    const objResult = items[result];
    console.log("Found result: ", objResult);
    setSearchResults(result);
  }
  else {
    console.log("No matching result found");
  } 
  
  

}



useEffect(() => {
  
  
    const itemRef = ref(database, `users/${user.uid}/items`);
    onValue(itemRef, (snapshot) => {
      const fetchedData = snapshot.val();
      console.log(fetchedData);
      
      if(fetchedData) {
        console.log("here");
        setItems(fetchedData);
      }
      
    });
  
  
},[]); 




const PaperItem = styled(Paper)(({ theme }) => ({
  
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor: 'inherit'

}));
 

  return (
    

      <Box sx={{width:300, height:450, backgroundColor:'#282c34'}} >

        <Grid container rowSpacing={2} justifyContent="center">
          <Grid item>
            <StyledTypography> Shop-List </StyledTypography>
          </Grid>

          <Grid item>
            <StyledTypography> Save Your Items From Anywhere </StyledTypography>
          </Grid>
        </Grid>
       
       {user && (
        <Grid container justifyContent="space-evenly" rowSpacing={1} columnSpacing={{xs:1}} sx={{flexGrow:1}} direction="row" alignItems="center"  >

          <Grid item xs={3}>
              
                <SearchTextField  variant="standard" placeholder="Search" id="searchBar" type="searchBar" value={search} onChange={handleSearch}
                  InputProps={{
                    disableUnderline:true,
                    style:{fontSize:15},
                    startAdornment: (
                      <InputAdornment sx={{marginLeft:1, marginRight:1}} position="start">
                        <SearchIcon
                          sx={{color: '#282c34'}}
                          aria-label="searchBarIcon"
                          
                        />
                        
                      </InputAdornment>
                    )
                    
                  }}
                />
    
          </Grid>

          <Grid item xs={2}>
              <IconButton
                onClick={handleShowList}
                > 
                <ListIcon style={{color:'white'}}/>
              </IconButton> 
          </Grid>

          <Grid item xs={2}>
            <IconButton
              onClick={handleShowAddItem}
              > 
              <PlaylistAddIcon style={{color:'white'}} />
            </IconButton> 
          </Grid>

         
          

        </Grid>
       )}

      {!user && (
        <Grid container justifyContent="space-evenly" rowSpacing={1} columnSpacing={{xs:1}} sx={{flexGrow:1}} direction="row" alignItems="center"  >

        <Grid item xs={2}>
          <IconButton
          onClick={handleShowLogin}
          >
            <AccountCircleIcon style={{color:'white'}} />
          </IconButton>
        </Grid>

      </Grid>     
      )}


    <div>

    
        <Box>
        {showList && ( 
            <div>
          <PaperItem>
              {Object.keys(items).map((key) => (
              

                       
                <Product key={key} itemKey={key} item={items[key]}  
                /> 
             
              ))}  
                            
          </PaperItem>
          </div> 
        )}
        </Box>
    

        <Box>
          {showAddItem && (
            <PaperItem>
              <AddItem />
            </PaperItem>
          )}

        </Box>

        <Box>
          <Grid container justifyContent="space-evenly" rowSpacing={1} columnSpacing={{xs:1}} sx={{flexGrow:1}} direction="row" alignItems="center">
            
              {showLogin && (
                <Login setShowLogin={setShowLogin}/>
              )}
            

          </Grid>
        </Box>
        
        <Box>
          {showSearch && (
            <PaperItem>
               {Object.keys(searchResults).map((key) => (
              

                       
              <Product key={key} itemKey={key} item={searchResults[key]}  
              /> 
           
            ))}
            </PaperItem>
          )}
        </Box>

    </div>  
      </Box>
      
  )
}