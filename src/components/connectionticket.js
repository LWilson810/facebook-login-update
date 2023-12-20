import {
    Box,
    Button,
    Grid,
    Paper,
    styled,
    Stack,
    useTheme,
    Input,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    Select
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: "#141B22",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    fontFamily: 'Poppins-Regular',
    // textAlign: 'center',
    color: "white",
    width: "auto",
    // height: "140px",
    fontSize: 20,
}));

const ConnectionTicket = ({ contactName, subject, taskNumber, rating, reviewNumber, text='', flag=false}) => {
//   const fillColor = theme.palette.primary.main;

  return (
    <Item>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <div style={{ color: '#607BCC', height: '50px', display: 'flex' }}>
            <img src="/user.svg" />
            <div style={{marginLeft: '10px'}}>
                <span style={{display: 'block', color: '#F5F5F7'}}>{contactName}</span>
                <span style={{display: 'block', color: '#F5F5F7', fontSize: '12px'}}>{subject}</span>                          
            </div>
        </div>
        <div style={{ marginRight: 2, marginTop: 6 }}><a style={{color: '#607BCC', textDecoration: 'none'}}
href="#">{flag == false ? 'Connected': 'Chat'}</a></div>
          </div>
    <div style={{fontSize:'12px', color: '#F5F5F7', margin: '20px 0px'}}>
    {text}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '37px'}} >
        <div style={{ display: 'flex'}} >
            <div>
            <img src="/note-2.svg" />
            </div>
            <div style={{marginLeft: '10px', marginTop: '5px'}}>
                <span style={{display: 'block', color: '#F5F5F7', fontSize: '12px'}}>{taskNumber} Task</span>
            </div> 
        </div>
        <div style={{ display: 'flex'}} >      
                  <div>
                      <img src="/Star 1.png" />
                  </div>         

            <div style={{marginLeft: '10px', marginTop: '5px'}}>
                <span style={{display: 'block', color: '#F5F5F7', fontSize: '12px'}}>{rating} ({reviewNumber} Reviews)</span>
            </div>       
        </div>
 
    </div>
    </Item>
  );
};
export default ConnectionTicket;
