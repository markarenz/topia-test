import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import BroadcastIndicator from "./BroadcastIndicator";
import { useUsersContext } from "../context/UsersContext";
import { DISPLAY_MODES } from "../utils/constants";

const UserList = () => {
  const { displayMode, usersInView } = useUsersContext()

  if (displayMode !== DISPLAY_MODES.USER_LIST) {
    return null
  }

  return (
    <Container maxWidth="md">
      <Box pt={12} mb={5}>
        <Typography variant="h5" component="h1" gutterBottom>
          The following Users are currently visible based on position and screen size.
        </Typography>
      </Box>
      {
        usersInView.length === 0
          ? (
            <Box my={4}>
              <Typography component="p" gutterBottom>
                There are currently no users within view.
              </Typography>
            </Box>
          ) : (
            <Container maxWidth="sm">
              <Table>
                <TableHead color="primary">
                  <TableRow>
                    <TableCell>
                      <Typography variant='h6'>
                        Username
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h6'>
                        Distance
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant='h6'>
                        Is Broadcaster
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    usersInView.map((user) => (
                      <TableRow>
                        <TableCell>
                          {/* Add ellipsis just in case we have long usernames in the future */}
                          <Typography
                            variant='body1'
                            style={{
                              maxWidth: '200px',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {user.username}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant='body1'>
                            {Math.floor(user.distanceToPlayer * 100) / 100}
                          </Typography>
                        </TableCell>
                        <TableCell>
                            {
                              user.is_broadcaster && (
                                <Box
                                  sx={{ display: 'flex', justifyContent: 'end'}}
                                >
                                  <BroadcastIndicator />
                                </Box>
                              )
                            }
                        </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </Container>
          )
      }
    </Container>
  );
};

export default UserList;