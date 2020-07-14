import React from 'react'
import {AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box} from '@material-ui/core'
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail} from '@material-ui/icons'


const Nav = () => {
    return(
        <Box component="nav">
            <AppBar position="static" style={{}}>
                <Toolbar>
                    <IconButton>
                        <ArrowBack></ArrowBack>
                    </IconButton>
                    <Typography variant="h4" style={{color: "white"}}>
                        PetHotel
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Nav