import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

export default function Popup() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handlelogout = () => {
        return (
            sessionStorage.clear(),
            navigate("/")
        )
    }
    return (
        <div>
            <div onClick={handleClickOpen} id="logoutbutton">
                Logout
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title" className="bg-slate-700 text-white">
                    {"Are you sure you want to Logout?"}
                </DialogTitle>
                <DialogActions className="bg-slate-700">
                    <Button onClick={handleClose} className="text-white">Cancel</Button>
                    <Button onClick={handlelogout} autoFocus className="text-white" id="confirmbutton">
                        Confirm!
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
