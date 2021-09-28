import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from "@material-ui/core";

import {
	FacebookShareButton,
	FacebookMessengerShareButton,
	WhatsappShareButton,
	EmailShareButton,
	TwitterShareButton,
	LinkedinShareButton,
	WhatsappIcon,
	FacebookIcon,
	FacebookMessengerIcon,
	EmailIcon,
	TwitterIcon,
	LinkedinIcon,
} from "react-share";

const ShareDialog = ({ open, setOpen }) => {
	const size = "32";
	const shareUrl = "http://localhost:3000/pet";

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
			<DialogContent className="dialog__container">
				<FacebookShareButton
					url={shareUrl}
					quote={"This pet is ready to be adopted"}>
					<FacebookIcon size={size} round={true} />
				</FacebookShareButton>

				<FacebookMessengerShareButton
					url={shareUrl}
					appId={"https://www.facebook.com/magda.sokolovic"}>
					<FacebookMessengerIcon size={size} round={true} />
				</FacebookMessengerShareButton>

				<LinkedinShareButton
					url={shareUrl}
					title={"Adopt this pet"}
					source={"http://localhost:3000/pet"}>
					<LinkedinIcon size={size} round={true} />
				</LinkedinShareButton>

				<WhatsappShareButton
					url={shareUrl}
					quote={"This pet is available for adoption"}>
					<WhatsappIcon size={size} round={true} />
				</WhatsappShareButton>

				<TwitterShareButton url={shareUrl} title={"Adopt me!"}>
					<TwitterIcon size={size} round={true} />
				</TwitterShareButton>

				<EmailShareButton url={shareUrl} subject={"Check out this pet ad"}>
					<EmailIcon size={size} round={true} />
				</EmailShareButton>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={() => {
						setOpen(false);
					}}>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ShareDialog;
