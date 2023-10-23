import React, { useState } from 'react';
import './certificate.css';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';


const CustomCertificateCard = styled(Card)(({ theme }) => ({
    '&.MuiCard-root': {
      background: 'rgb(27, 24, 24)',
      maxWidth: 308,
      boxShadow: 'none',
      margin: 12,
      border: '1px solid #d7dddc',
      
      '& .MuiCardMedia-root': {
        objectFit: 'fill',
      },
      '&.MuiCard-root:hover': {
       
       background: '#595a5c',
      },
      '& .MuiTypography-h5': {
        color: 'white',
        fontSize: 18,
      },
      '& .MuiTypography-h6': {
        color: 'white',
        fontSize: 12,
      },
      '& .MuiButton-root': {
        width: '100%',
        fontSize: 12,
        fontWeight: 'bold',
        color:'blue'
      },
    },
  }));
  
  const CertificationView = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
    '& .MuiDialog-paper': {
      height: 'auto',
      maxWidth: 700,
      width: 700,
      display: 'block',
    },
    '& .MuiDialogContent-root': {
      padding: 10,
      // paddingTop: 10,
      // paddingLeft: 0,
      // paddingRight: 0,
      // paddingBottom: 0,
      borderTop: 0,
      borderBottom: 0,
    },
  
    '& .MuiTypography-root': {
      marginTop: 6,
      color: '#0f2e66',
      fontSize: 16,
      fontWeight: 'bold',
    },
    '& .MuiSvgIcon-root': {
      color: '#0f2e66',
      marginTop: 2,
      fontSize: 18,
    },
  }));
  
  const modelDialogContent = [
    {
      key: 'first',
      title: "Microfrontends with React: A complete Developer's Guide",
      imageUrl: require('../../assets/cert1.jpg'),
    },
    {
      key: 'two',
      title: 'The Ultimate Redux Course 2023 - [LATEST Redux-toolkit]',
      imageUrl: require('../../assets/cert1.jpg'),
    },
    {
      key: 'three',
      title: 'Web Development',
      imageUrl: require('../../assets/cert1.jpg'),
    },
   
  ];
  

const Certificate = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const handleClickOpen = (item) => {
      setOpen(true);
      switch (item) {
        case 'first':
          setName(item);
          break;
        case 'two':
          setName(item);
          break;
        case 'three':
          setName(item);
          break;
       
        default:
      }
    };
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    
    <div className='work-container'>
        <h1 className='project-heading'>Certification</h1>
        <div className="certificateCards">
        <CustomCertificateCard sx={{ maxWidth: 345, margin: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={require('../../assets/cert1.jpg')}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Python Developer
              </Typography>
            
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => handleClickOpen('first')}>
              View
            </Button>
          </CardActions>
        </CustomCertificateCard>
        <CustomCertificateCard sx={{ maxWidth: 345, margin: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={require('../../assets/cert1.jpg')}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                The Ultimate Redux Course 2023 - [LATEST Redux-toolkit]
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {/* Proficient in Redux and Redux Toolkit for streamlined state management in React
                applications. Demonstrated through practical projects in my portfolio. */}
                {/* Proficient in implementing Redux and Redux Toolkit for state management in React
                applications, enabling efficient data handling and seamless user experiences. */}
                Utilized Redux and Redux Toolkit for effective state management in React
                applications, ensuring smooth data flow and user interactions.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => handleClickOpen('two')}>
              View
            </Button>
          </CardActions>
        </CustomCertificateCard>
        <CustomCertificateCard sx={{ maxWidth: 345, margin: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={require('../../assets/cert1.jpg')}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Web Development (NEURA 2020)
              </Typography>
              <Typography variant="h6" color="text.secondary">
                In 2020, I secured first place in my college's Neura web development competition.
                This win showcases my strong skills and commitment in crafting web solutions,
                marking a significant milestone in my journey as a web developer.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => handleClickOpen('three')}>
              View
            </Button>
          </CardActions>
        </CustomCertificateCard>
       <br/>
      </div>
      {modelDialogContent?.map((item) =>
        item?.key === name ? (
          <>
            <div className="certification">
              <CertificationView
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <Typography variant="h5" style={{ margin: '10px' }}>
                  {item?.title}
                </Typography>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    right: 6,
                    top: 11,
                    fontSize: 108,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Divider style={{ width: '85%', margin: 'auto' }} />
                <DialogContent dividers>
                  <img src={item?.imageUrl} alt="" style={{ width: '80%', height: '80%' }} />
                </DialogContent>
              </CertificationView>
            </div>
          </>
        ) : null,
      )}
        
    </div>
  )
}

export default Certificate