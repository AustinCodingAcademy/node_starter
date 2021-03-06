import React from 'react'
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const Navigation = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                        </IconButton>
                    <Typography variant="h6">
                        My Starter Application
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navigation