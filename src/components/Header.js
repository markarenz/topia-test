import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import Switch from '@material-ui/core/Switch';
import { useUsersContext } from "../context/UsersContext";
import { DISPLAY_MODES } from '../utils/constants';

const Header = () => {
  const isXs = useMediaQuery('(max-width:599px)');

  const { setIsPositionModalOpen, displayMode, setDisplayMode } = useUsersContext()
  const handleDisplayModeToggle = () => {
    setDisplayMode(
      displayMode === DISPLAY_MODES.CANVAS
        ? DISPLAY_MODES.USER_LIST
        : DISPLAY_MODES.CANVAS
    )
  }
  const switchLabelProps = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Box sx={{ flexGrow: 1}} data-testid='app-header'>
      <AppBar color='secondary' position="fixed">
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: 'left',
            }}
          >
            <Button
              variant='contained'
              onClick={() => setIsPositionModalOpen(true)}
            >
              {isXs ? 'Users' : 'Create User List'}
            </Button>
          </Box>
          <Box
            sx={{
              whiteSpace: 'nowrap',
            }}
          >
            <Typography variant='h4'>
              User List
            </Typography>
            <Switch
              color='primary'
              value={displayMode === DISPLAY_MODES.CANVAS}
              onChange={handleDisplayModeToggle}
              {...switchLabelProps}
              // aria-label='Toggle User List and Canvas Preview'
            />
            <Typography variant='h4'>
              Canvas Preview
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header