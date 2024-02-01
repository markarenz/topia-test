import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useUsersContext } from "../context/UsersContext";
import { DISPLAY_MODES } from '../utils/constants';
import BroadcastIndicator from './BroadcastIndicator';

const CanvasPreview = () => {
  const { displayMode, usersInView, position, windowSize } = useUsersContext()
  if (displayMode !== DISPLAY_MODES.CANVAS) {
    return null
  }

  const offset = {
    x: Math.floor(windowSize.w / 2) - position.x,
    y: Math.floor(windowSize.h / 2) - position.y
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#444',
        position: 'relative',
      }}
    >
      {
        usersInView.map((user) => (
          <Box
            key={user.id}
            sx={{
              position: 'absolute',
              width: '50px',
              height: '125px',
              backgroundColor: '#bbb',
              left: `${user.x - 25 + offset.x}px`,
              top: `${user.y - 62 + offset.y}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box>
              <Box>
                <Box>
                  <Typography variant='body2'>
                    ID: {user.id}<br />
                    x: {user.x}<br />
                    y: {user.y}<br />
                  </Typography>
                </Box>
                {
                  user.is_broadcaster && (
                    <Box
                      sx={{
                        mt: 1,
                      }}
                    >
                      <BroadcastIndicator />
                    </Box>
                  )
                }
              </Box>
            </Box>
          </Box>
        ))
      }
    </div>
  )
}

export default CanvasPreview
