import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import ArrowTopRightOnSquareIcon from '@heroicons/react/24/solid/ArrowTopRightOnSquareIcon';
import ChevronUpDownIcon from '@heroicons/react/24/solid/ChevronUpDownIcon';
import EastIcon from '@mui/icons-material/East';
import {
  IconButton,
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
  Fragment,
  Grid
} from '@mui/material';
import { useState } from 'react';
import { Logo } from 'src/components/logo';
import { Scrollbar } from 'src/components/scrollbar';
import { items } from './config';
import { SideNavItem } from './side-nav-item';
import { fontSize } from '@mui/system';

export const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const [collapsedItems, setCollapsedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('Dashboard');
  const handleCollapse = (itemTitle) => {
    console.log(itemTitle);
    if (itemTitle == "Clinician" || itemTitle == "Self Reported" || itemTitle == "3rd Party"){
        setSelectedItem('Medical record');
        return;
      }
    setSelectedItem(itemTitle);
    if (collapsedItems.includes(itemTitle)) {
      setCollapsedItems(collapsedItems.filter((title) => title !== itemTitle));
    } else {
      setCollapsedItems([...collapsedItems, itemTitle]);
    }
  };

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%'
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400'
        },

      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // height: '100%',
          backgroundColor: 'rgba(20, 27, 34, 1)',
          color: 'white',

        }}
      >
        <Box sx={{ p: 3, marginBottom: '0px', paddingTop: '0px' }}>

          <Box
            component={NextLink}
            href="/"
            sx={{
              marginTop: '5px',
              paddingTop: '0px',
              display: 'inline-flex',
              height: 45,

              // width: 32
            }}
          >

          </Box>
          <Stack direction="row" alignItems='center'>
            <Grid sx={{ width: "46px", height: '46px' }}><img sx={{ width: "46px", height: '46px' }} src="/logo.svg"></img></Grid>
            <Grid sx={{ marginLeft: '10px', background: "linear-gradient(105deg, #C292EB -10.78%, #607BCC 47.43%, #99EDF9 146.27%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: 'Poppins-Bold' }}><h2>QuanMed AI</h2></Grid>
          </Stack>

        </Box>

        <Box
          component="nav"
          sx={{
            flexGrow: 5,
            px: 2,
            py: 3
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0
            }}
          >
            <p style={{ paddingLeft: '4px', marginBlockStart: "auto", color: "#6E7481", fontSize: "18px", fontWeight: "700" }}>My DeMed</p>
            {items.map((item) => {
              const active = item.path ? pathname === item.path : false;
              const isCollapsed = collapsedItems.includes(item.title);
              return (
                <>
                  <li onClick={() => handleCollapse(item.title)}
                    style={selectedItem === item.title ? { background: "linear-gradient(105deg, #C292EB -10.78%, #607BCC 47.43%, #99EDF9 146.27%)", borderRadius: "7px" } : {}}>
                    <SideNavItem
                      active={active}
                      disabled={item.disabled}
                      external={item.external}
                      icon={item.icon}
                      path={item.path}
                      title={item.title}

                    />
                  </li>
                  {item.submenu && !isCollapsed && (
                    <ul style={{ listStyleType: 'none', }}>
                      {item.submenu.map((submenuItem) => {
                        const submenuActive = submenuItem.path ? pathname === submenuItem.path : false;

                        return (
                          <li key={submenuItem.title} onClick={() => handleCollapse(submenuItem.title)}>
                            <SideNavItem
                              active={submenuActive}
                              disabled={submenuItem.disabled}
                              external={submenuItem.external}
                              icon={submenuItem.icon}
                              path={submenuItem.path}
                              title={submenuItem.title}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              );
            })}
          </Stack>
        </Box>
        <Box
          sx={{
            px: 4,
            py: 5,
            background: "rgba(20, 27, 34, 1)"
          }}
        >
          <Typography
            variant="h6"
            sx={{ opacity: '0.7', marginBottom: '20px', letterSpacing: '2.52px' }}
          >
            Support
          </Typography>

          <SideNavItem
            active={0}
            disabled={0}
            external={0}
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M8.84901 11.304C10.0268 11.304 10.9816 10.3492 10.9816 9.17143C10.9816 7.99365 10.0268 7.03887 8.84901 7.03887C7.67123 7.03887 6.71645 7.99365 6.71645 9.17143C6.71645 10.3492 7.67123 11.304 8.84901 11.304Z" stroke="#FAFBFC" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.1096 11.3039C14.015 11.5184 13.9868 11.7562 14.0286 11.9868C14.0704 12.2174 14.1803 12.4302 14.3442 12.5977L14.3868 12.6404C14.519 12.7724 14.6239 12.9292 14.6954 13.1018C14.767 13.2744 14.8038 13.4594 14.8038 13.6462C14.8038 13.833 14.767 14.018 14.6954 14.1906C14.6239 14.3632 14.519 14.52 14.3868 14.6521C14.2548 14.7843 14.098 14.8891 13.9254 14.9607C13.7528 15.0322 13.5678 15.069 13.381 15.069C13.1942 15.069 13.0091 15.0322 12.8366 14.9607C12.664 14.8891 12.5072 14.7843 12.3751 14.6521L12.3325 14.6094C12.1649 14.4455 11.9522 14.3356 11.7216 14.2938C11.491 14.252 11.2531 14.2802 11.0387 14.3748C10.8285 14.4649 10.6492 14.6146 10.5229 14.8053C10.3966 14.996 10.3288 15.2195 10.3279 15.4482V15.5691C10.3279 15.9461 10.1781 16.3077 9.91146 16.5744C9.64484 16.841 9.28322 16.9908 8.90616 16.9908C8.5291 16.9908 8.16749 16.841 7.90086 16.5744C7.63424 16.3077 7.48446 15.9461 7.48446 15.5691V15.5051C7.47895 15.2698 7.40279 15.0416 7.26588 14.8502C7.12896 14.6588 6.93762 14.5129 6.71673 14.4317C6.50233 14.3371 6.26449 14.3089 6.0339 14.3507C5.8033 14.3925 5.59051 14.5024 5.42298 14.6663L5.38033 14.7089C5.24829 14.8411 5.09149 14.946 4.9189 15.0175C4.74631 15.0891 4.56131 15.1259 4.37447 15.1259C4.18764 15.1259 4.00264 15.0891 3.83004 15.0175C3.65745 14.946 3.50065 14.8411 3.36861 14.7089C3.23643 14.5769 3.13157 14.4201 3.06002 14.2475C2.98847 14.0749 2.95165 13.8899 2.95165 13.7031C2.95165 13.5162 2.98847 13.3312 3.06002 13.1586C3.13157 12.9861 3.23643 12.8293 3.36861 12.6972L3.41127 12.6546C3.57514 12.487 3.68508 12.2743 3.72689 12.0437C3.7687 11.8131 3.74047 11.5752 3.64585 11.3608C3.55574 11.1506 3.40612 10.9713 3.2154 10.845C3.02469 10.7187 2.8012 10.6509 2.57246 10.65H2.45161C2.07455 10.65 1.71294 10.5002 1.44632 10.2336C1.17969 9.96693 1.02991 9.60532 1.02991 9.22826C1.02991 8.8512 1.17969 8.48958 1.44632 8.22296C1.71294 7.95634 2.07455 7.80655 2.45161 7.80655H2.51559C2.75088 7.80105 2.97907 7.72489 3.1705 7.58797C3.36193 7.45105 3.50774 7.25972 3.58898 7.03883C3.6836 6.82442 3.71183 6.58659 3.67002 6.35599C3.62821 6.12539 3.51828 5.91261 3.3544 5.74507L3.31175 5.70242C3.17956 5.57039 3.0747 5.41359 3.00315 5.24099C2.9316 5.0684 2.89478 4.8834 2.89478 4.69657C2.89478 4.50973 2.9316 4.32473 3.00315 4.15214C3.0747 3.97954 3.17956 3.82275 3.31175 3.69071C3.44378 3.55852 3.60058 3.45366 3.77318 3.38211C3.94577 3.31057 4.13077 3.27374 4.3176 3.27374C4.50444 3.27374 4.68944 3.31057 4.86203 3.38211C5.03463 3.45366 5.19142 3.55852 5.32346 3.69071L5.36611 3.73336C5.53365 3.89724 5.74643 4.00717 5.97703 4.04898C6.20763 4.09079 6.44546 4.06257 6.65987 3.96794H6.71673C6.92698 3.87783 7.10629 3.72821 7.23259 3.5375C7.3589 3.34678 7.42668 3.1233 7.42759 2.89455V2.77371C7.42759 2.39665 7.57737 2.03503 7.844 1.76841C8.11062 1.50179 8.47223 1.352 8.84929 1.352C9.22635 1.352 9.58797 1.50179 9.85459 1.76841C10.1212 2.03503 10.271 2.39665 10.271 2.77371V2.83768C10.2719 3.06643 10.3397 3.28991 10.466 3.48063C10.5923 3.67134 10.7716 3.82096 10.9819 3.91107C11.1963 4.0057 11.4341 4.03393 11.6647 3.99211C11.8953 3.9503 12.1081 3.84037 12.2756 3.67649L12.3183 3.63384C12.4503 3.50166 12.6071 3.39679 12.7797 3.32525C12.9523 3.2537 13.1373 3.21687 13.3241 3.21687C13.511 3.21687 13.696 3.2537 13.8685 3.32525C14.0411 3.39679 14.1979 3.50166 14.33 3.63384C14.4622 3.76588 14.567 3.92268 14.6386 4.09527C14.7101 4.26786 14.7469 4.45286 14.7469 4.6397C14.7469 4.82653 14.7101 5.01153 14.6386 5.18413C14.567 5.35672 14.4622 5.51352 14.33 5.64556L14.2873 5.68821C14.1234 5.85574 14.0135 6.06852 13.9717 6.29912C13.9299 6.52972 13.9581 6.76756 14.0527 6.98196V7.03883C14.1428 7.24908 14.2925 7.42839 14.4832 7.55469C14.6739 7.68099 14.8974 7.74877 15.1261 7.74968H15.247C15.624 7.74968 15.9857 7.89947 16.2523 8.16609C16.5189 8.43271 16.6687 8.79433 16.6687 9.17139C16.6687 9.54845 16.5189 9.91006 16.2523 10.1767C15.9857 10.4433 15.624 10.5931 15.247 10.5931H15.183C14.9543 10.594 14.7308 10.6618 14.5401 10.7881C14.3493 10.9144 14.1997 11.0937 14.1096 11.3039Z" stroke="#FAFBFC" stroke-linecap="round" stroke-linejoin="round" />
            </svg>}
            path={''}
            title={'Setting'}
          />
        </Box>
        <Divider sx={{ py: 5 }} />
        <Box sx={{
          px: 8,
          py: 9,
          background: "rgba(20, 27, 34, 1)"
        }}>
          <Button style={{ color: 'white' }}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M7.73684 6.31578C8.06316 2.52631 10.0105 0.978943 14.2737 0.978943H14.4105C19.1158 0.978943 21 2.86315 21 7.56842V14.4316C21 19.1368 19.1158 21.021 14.4105 21.021H14.2737C10.0421 21.021 8.09474 19.4947 7.74737 15.7684M14.1579 10.9895H2.17895M4.52632 7.46315L1 10.9895L4.52632 14.5158" stroke="#E92323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg><h2 style={{ marginBottom: '0px', marginTop: '0px', marginLeft: '10px', color: '#E92323' }}>Logout</h2></Button>
        </Box>
        <Stack
          alignItems="center"
          justifyItems="space-between"
          direction="row"
          spacing={2}
          sx={{marginBottom:'30px',marginLeft:'30px'}}
        >
          <IconButton sx={{ paddingLeft: '5px', width: '40px', height: '40px', background: 'linear-gradient(105deg, #C292EB -10.78%, #607BCC 47.43%, #99EDF9 146.27%)', borderRadius: '50%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5091 2.42212C9.80739 3.14133 6.40641 4.62993 1.30615 6.8879C0.477948 7.22256 0.0440986 7.54996 0.00460288 7.87009C-0.0621447 8.41112 0.604615 8.62416 1.51257 8.91427C1.63607 8.95373 1.76404 8.99462 1.89523 9.03795C2.78851 9.33301 3.99014 9.6782 4.61481 9.69191C5.18146 9.70435 5.81389 9.46697 6.51212 8.97978C11.2775 5.71112 13.7373 4.05898 13.8918 4.02337C14.0007 3.99824 14.1517 3.96664 14.254 4.05904C14.3563 4.15143 14.3463 4.32641 14.3354 4.37335C14.2694 4.65948 11.6521 7.132 10.2977 8.41153C9.87542 8.81043 9.5759 9.09338 9.51468 9.15799C9.37752 9.30275 9.23774 9.43968 9.10339 9.57128C8.27351 10.3842 7.65118 10.9938 9.13785 11.9893C9.85227 12.4677 10.424 12.8633 10.9943 13.258C11.6172 13.689 12.2384 14.1189 13.0422 14.6543C13.247 14.7907 13.4426 14.9324 13.6331 15.0704C14.358 15.5955 15.0092 16.0673 15.8138 15.9921C16.2813 15.9484 16.7642 15.5017 17.0094 14.1694C17.589 11.021 18.7283 4.1992 18.9916 1.38811C19.0146 1.14182 18.9856 0.826626 18.9623 0.688261C18.939 0.549896 18.8903 0.352754 18.7133 0.206815C18.5037 0.0339817 18.1801 -0.00246502 18.0354 0.000125586C17.3773 0.0119045 16.3677 0.368619 11.5091 2.42212Z" fill="#171923" />
            </svg>
          </IconButton>
          <IconButton sx={{ paddingLeft: '5px', width: '40px', height: '40px', background: 'linear-gradient(105deg, #C292EB -10.78%, #607BCC 47.43%, #99EDF9 146.27%)', borderRadius: '50%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path d="M2.13338 4.26677C3.31162 4.26677 4.26678 3.31162 4.26678 2.13338C4.26678 0.955146 3.31162 0 2.13338 0C0.955146 0 0 0.955146 0 2.13338C0 3.31162 0.955146 4.26677 2.13338 4.26677Z" fill="#171923" />
              <path d="M3.75241 16.3552H0.514399C0.426863 16.3552 0.355164 16.2843 0.355164 16.1959V5.84747C0.355164 5.75993 0.426029 5.68823 0.514399 5.68823H3.75241C3.83994 5.68823 3.91164 5.7591 3.91164 5.84747V16.1959C3.91081 16.2835 3.83994 16.3552 3.75241 16.3552Z" fill="#171923" />
              <path d="M16 9.5999V15.6441C16 16.0351 15.6799 16.3552 15.2889 16.3552H13.1555C12.7645 16.3552 12.4444 16.0351 12.4444 15.6441V10.6662C12.4444 9.68493 11.6482 8.88877 10.667 8.88877C9.68574 8.88877 8.88957 9.68493 8.88957 10.6662V15.6441C8.88957 16.0351 8.56943 16.3552 8.17844 16.3552H6.04505C5.65406 16.3552 5.33392 16.0351 5.33392 15.6441V6.3994C5.33392 6.0084 5.65406 5.68827 6.04505 5.68827H8.17844C8.56943 5.68827 8.88957 6.0084 8.88957 6.3994V6.8546C9.6007 5.93338 10.7779 5.33313 12.0892 5.33313C14.0517 5.33313 16 6.75538 16 9.5999Z" fill="#171923" />
            </svg>
          </IconButton>
          <IconButton sx={{ paddingLeft: '5px', width: '40px', height: '40px', background: 'linear-gradient(105deg, #C292EB -10.78%, #607BCC 47.43%, #99EDF9 146.27%)', borderRadius: '50%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
              <path d="M11.5363 6.83807L17.9296 0H15.5018L10.4838 5.368L6.64079 0H0L6.72193 9.39001L0 16.5805H2.42785L7.77516 10.8609L11.8696 16.5805H18.5104L11.5363 6.83807ZM3.42142 1.75884H5.73631L15.0881 14.8216H12.7733L3.42142 1.75884Z" fill="#171923" />
            </svg>
          </IconButton>
          <IconButton sx={{ paddingLeft: '5px', width: '40px', height: '40px', background: 'linear-gradient(105deg, #C292EB -10.78%, #607BCC 47.43%, #99EDF9 146.27%)', borderRadius: '50%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
              <path d="M10.1843 8.51252L9.93989 10.4753C9.89854 10.8031 9.6209 11.0497 9.29156 11.0497H6.11265V19.2558C5.77741 19.2861 5.43774 19.3016 5.09437 19.3016C4.32641 19.3016 3.57691 19.2248 2.85252 19.0786V11.0497H0.40761C0.18313 11.0497 0 10.8659 0 10.6407V8.18466C0 7.95945 0.18313 7.77558 0.40761 7.77558H2.85252V4.09233C2.85252 1.83202 4.67716 0 6.92861 0H9.78113C10.0056 0 10.1887 0.183865 10.1887 0.409084V2.86507C10.1887 3.09029 10.0056 3.27416 9.78113 3.27416H7.74309C6.84295 3.27416 6.11339 4.00667 6.11339 4.91124V7.77632H9.53672C9.92882 7.77632 10.2323 8.1219 10.1843 8.51252Z" fill="#171923" />
            </svg>
          </IconButton>
        </Stack>

      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: 280,
            borderRight: '0px solid'
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: 280,

        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100, borderRight: '0px solid' }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
