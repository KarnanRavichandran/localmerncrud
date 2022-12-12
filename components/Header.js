import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [value ,setValue] = useState()

    return (
        <div>
            <AppBar position='sticky'>
                <Toolbar>
                    <Typography>
                        <CollectionsBookmarkOutlinedIcon />
                    </Typography>
                    <Tabs   textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)} sx={{ml:'auto'}}>
                    <Tab  LinkComponent={NavLink} to="/add"  label = 'Add product' />
                    <Tab LinkComponent={NavLink} to="/books"label = 'Books' />
                    <Tab LinkComponent={NavLink} to="/about"label = 'About Us' />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header

