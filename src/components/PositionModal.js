import React, { useState } from 'react'
import { useUsersContext } from '../context/UsersContext';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import { DEFAULT_PLAYER_POSITION } from '../utils/constants';
import { Typography } from '@material-ui/core';

const PositionModal = () => {
  const {
    isPositionModalOpen,
    setIsPositionModalOpen,
    position,
    setPosition,
    setIsInitialized
  } = useUsersContext()

  const [localPosition, setLocalPosition] = useState({
    x: position.x || DEFAULT_PLAYER_POSITION.x,
    y: position.y || DEFAULT_PLAYER_POSITION.y
  })

  const handleClose = () => {
    setIsPositionModalOpen(false)
  }

  const handleInputChange = (e) => {
    setLocalPosition((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleDialogSubmit = () => {
    setPosition(localPosition)
    setIsInitialized(true)
    handleClose()
  }

  return (
    <Dialog
      onClose={handleClose}
      open={isPositionModalOpen}
      sx={{
        p: 2,
        maxWidth: '400px',
        pointerEvents: 'all',
      }}
    >
      <DialogTitle
        id="position-dialog-title"
      >
        <Typography
          variant='h5'
        >
          Select Position
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} style={{ marginBottom: '-8px'}}>
          <Grid item xs={12} sm={6}>
            <TextField
              name='x'
              type='number'
              variant='outlined'
              label='X Position'
              value={localPosition.x}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name='y'
              label='Y Position'
              type='number'
              variant='outlined'
              value={localPosition.y}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          variant='outlined'
          onClick={handleClose}
          style={{
            marginRight: 12,
          }}
        >
          CANCEL
        </Button>

        <Button
          variant='contained'
          onClick={handleDialogSubmit}
          type="submit"
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PositionModal