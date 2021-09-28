import React, {useState} from 'react'
import {
	Button,
	// FormControl,
	// FormControlLabel,
	// Checkbox,
	// FormGroup,
	// ButtonGroup,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
} from "@material-ui/core";

const ShareDialog = ({open, setOpen}) => {

	

	const handleClose = () => {
		setOpen(false);
	};
    
    return (
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'>
				<DialogTitle id='alert-dialog-title'>
					{"Join Pawfect to favorite pets"}
				</DialogTitle>
				<DialogContent>
					<Button
						variant='contained'
						sx={{ margin: 3 }}
						color='primary'
						href='/registration'>
						Create new Account
					</Button>

					<DialogContentText id='alert-dialog-description'>
						Already have an account?
					</DialogContentText>
					<Button variant='outlined' color='primary' href='/login'>
						Login
					</Button>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							setOpen(false);
						}}>
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		);
}

export default ShareDialog
