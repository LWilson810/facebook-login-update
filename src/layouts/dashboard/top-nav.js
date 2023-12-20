import PropTypes from 'prop-types';
import BellIcon from '@heroicons/react/24/solid/BellIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  useMediaQuery

} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { usePopover } from 'src/hooks/use-popover';
import { AccountPopover } from './account-popover';

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 70;

export const TopNav = (props) => {
  const { onNavOpen } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const accountPopover = usePopover();

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: 'black',
          position: 'sticky',

          left: {
            lg: `${SIDE_NAV_WIDTH}px`
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
          },
          zIndex: (theme) => theme.zIndex.appBar
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 6,
            marginLeft: '10px',
            paddingLeft:'10px'
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            {!lgUp && (
              <IconButton background="white" onClick={onNavOpen}>
                <SvgIcon fontSize="small">
                  <Bars3Icon />
                </SvgIcon>
              </IconButton>
            )}
            {/* <Tooltip title="Search">
              <IconButton>
                <SvgIcon fontSize="small">
                  <MagnifyingGlassIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip> */}
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={3}
          >
            <Tooltip title="scan">
              <IconButton sx={{ width: '40px', height: '40px', background: 'rgba(20, 27, 34, 0.70)', borderRadius: '14.3px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "40px", height: "40px" }} viewBox="0 0 16 14" fill="none">
                  <path d="M15.1676 7.41676H1.08096" stroke="white" stroke-opacity="0.87" stroke-width="1.34028" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M13.9132 4.59235V3.57744C13.9132 2.19493 12.7923 1.07404 11.4091 1.07404H10.6008" stroke="white" stroke-opacity="0.87" stroke-width="1.34028" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.33542 4.59235V3.57744C2.33542 2.19493 3.45631 1.07404 4.83949 1.07404H5.66859" stroke="white" stroke-opacity="0.87" stroke-width="1.34028" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M13.9132 7.41608V10.1489C13.9132 11.5321 12.7923 12.653 11.4091 12.653H10.6008" stroke="white" stroke-opacity="0.87" stroke-width="1.34028" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.33542 7.41608V10.1489C2.33542 11.5321 3.45631 12.653 4.83949 12.653H5.66859" stroke="white" stroke-opacity="0.87" stroke-width="1.34028" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </IconButton>
            </Tooltip>    
            <Tooltip title="Notifications">
              <IconButton sx={{ width: '40px', height: '40px', background: 'rgba(20, 27, 34,0.7)', borderRadius: '14.3px' }}>
                <Badge
                  badgeContent={4}
                  color="success"
                  variant="dot"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "13", height: "16" }} viewBox="0 0 13 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.37188 11.7988C10.1546 11.7988 11.9046 11.3136 12.0736 9.36577C12.0736 7.41932 10.8535 7.54449 10.8535 5.15627C10.8535 3.29082 9.08539 1.16833 6.37188 1.16833C3.65837 1.16833 1.89021 3.29082 1.89021 5.15627C1.89021 7.54449 0.670135 7.41932 0.670135 9.36577C0.839814 11.3209 2.58979 11.7988 6.37188 11.7988Z" stroke="white" stroke-opacity="0.87" stroke-width="1.34028" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.97426 13.8176C7.05921 14.8337 5.63175 14.8457 4.70795 13.8176" stroke="white" stroke-opacity="0.87" stroke-width="1.34028" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="info">
              <IconButton sx={{ width: '40px', height: '40px', background: 'rgba(20, 27, 34, 0.70)', borderRadius: '14.3px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "16px", height: "16px" }} viewBox="0 0 17 17" fill="none">
                  <g clip-path="url(#clip0_528_1949)">
                    <path d="M8.61983 15.5848C9.5009 15.586 10.3735 15.413 11.1875 15.0758C12.0015 14.7386 12.7408 14.2439 13.363 13.6201C13.9868 12.9979 14.4816 12.2585 14.8187 11.4445C15.1559 10.6306 15.3289 9.75795 15.3278 8.87688C15.3289 7.99582 15.1559 7.12322 14.8187 6.30923C14.4815 5.49524 13.9868 4.7559 13.363 4.1337C12.7408 3.50988 12.0015 3.01516 11.1875 2.67798C10.3735 2.3408 9.5009 2.16781 8.61983 2.16895C7.73877 2.16783 6.86617 2.34083 6.05218 2.678C5.23819 3.01518 4.49885 3.50989 3.87665 4.1337C3.25284 4.7559 2.75813 5.49524 2.42095 6.30923C2.08378 7.12322 1.91078 7.99582 1.9119 8.87688C1.91076 9.75795 2.08375 10.6306 2.42093 11.4445C2.75811 12.2585 3.25283 12.9979 3.87665 13.6201C4.49885 14.2439 5.23819 14.7386 6.05218 15.0758C6.86617 15.4129 7.73877 15.5859 8.61983 15.5848V15.5848Z" stroke="white" stroke-opacity="0.87" stroke-width="1.34028" stroke-linejoin="round" />
                    <path d="M8.62032 10.4282V9.08665C9.01833 9.08665 9.4074 8.96863 9.73834 8.7475C10.0693 8.52638 10.3272 8.21209 10.4795 7.84437C10.6318 7.47666 10.6717 7.07204 10.594 6.68167C10.5164 6.29131 10.3247 5.93274 10.0433 5.6513C9.76185 5.36987 9.40328 5.17821 9.01292 5.10056C8.62255 5.02291 8.21793 5.06276 7.85022 5.21507C7.4825 5.36739 7.16821 5.62532 6.94709 5.95625C6.72596 6.28719 6.60794 6.67626 6.60794 7.07427" stroke="white" stroke-opacity="0.87" stroke-width="1.34028" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.61907 13.1112C8.79697 13.1112 8.96759 13.0406 9.09339 12.9148C9.21919 12.789 9.28986 12.6184 9.28986 12.4404C9.28986 12.2625 9.21919 12.0919 9.09339 11.9661C8.96759 11.8403 8.79697 11.7697 8.61907 11.7697C8.44116 11.7697 8.27054 11.8403 8.14474 11.9661C8.01895 12.0919 7.94827 12.2625 7.94827 12.4404C7.94827 12.6184 8.01895 12.789 8.14474 12.9148C8.27054 13.0406 8.44116 13.1112 8.61907 13.1112Z" fill="white" fill-opacity="0.87" />
                  </g>
                  <defs>
                    <clipPath id="clip0_528_1949">
                      <rect width="16.099" height="16.099" fill="white" transform="translate(0.56958 0.826782)" />
                    </clipPath>
                  </defs>
                </svg>
              </IconButton>
            </Tooltip>
            <Avatar
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              sx={{
                cursor: 'pointer',
                height: 40,
                width: 40
              }}
              src="/assets/avatars/avatar-anika-visser.png"
            />
          </Stack>
        </Stack>
      </Box>
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func
};
