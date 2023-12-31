import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/imgs/Logo.svg';
import { Link } from 'react-router-dom';
import { BiSolidUserCircle } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import GoogleButton from '../auth/GoogleLogin';
import { Typography } from 'antd';
import { useSetRecoilState } from 'recoil';
import { IsLoginState, MemberIdState } from '../store/atom';

const HeaderBar = styled.div`
  height: 80px;
  width: 100vw;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 100px;
  position: fixed;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 20px;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 10px;
  color: ${(props) => (props.isActive ? 'white' : '#9f9f9f')};

  &:hover {
    color: white;
  }
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#F0F0F0',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 18px;

  color: #000000;
  font-size: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
    background-color: #ffffff;
  }
`;

export default function Header({ currMenu }) {
  const [menu, setMenu] = useState(currMenu); // [menu, setMenu
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem); // Update the active menu
  };

  useEffect(() => {
    setMenu(currMenu);
  }, [currMenu]);

  return (
    <>
      <HeaderBar>
        <Link to="/">
          <Logo />
        </Link>
        <Buttons>
          <Link to="/">
            <Btn
              onClick={() => handleMenuClick('Home')}
              isActive={menu === 'Home'}
            >
              Home
            </Btn>
          </Link>
          {/* <Link to="/archive">
            <Btn
              onClick={() => handleMenuClick('Archive')}
              isActive={menu === 'Archive'}
            >
              Archive
            </Btn>
          </Link> */}
          <Btn onClick={handleOpen} isActive={menu === 'Login'}>
            Login <BiSolidUserCircle size={24} />
          </Btn>
        </Buttons>
      </HeaderBar>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
          <GoogleButton onClose={() => setOpen(false)} />
        </Box>
      </Modal>
    </>
  );
}
