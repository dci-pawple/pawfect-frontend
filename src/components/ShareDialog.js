import React, {useContext} from "react";
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
import MyContext from "../context/MyContext";

const ShareDialog = ({ open, setOpen, pet }) => {
	const { petId } = useContext(MyContext);

	const size = "32";
	const shareUrl = `https://pawfect.netlify.app/pet/${petId}`;

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
			className="dialog__container">
			<DialogTitle id='alert-dialog-title'>
				{`Share ${pet && pet.name}`}
			</DialogTitle>
			<DialogContent className="dialog__icons">
				<FacebookShareButton
					url={shareUrl}
					quote={`This pet ${pet && pet.name} is available for adoption`}>
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
					quote={`This pet ${pet && pet.name} is available for adoption`}>
					<WhatsappIcon size={size} round={true} />
				</WhatsappShareButton>

				<TwitterShareButton url={shareUrl} title={`This pet ${pet && pet.name} is available for adoption`}>
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
