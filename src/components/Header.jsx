
import React from 'react';
import styled from 'styled-components';

import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Header = () => (
    <div className='header'>
        <HeaderCont>
        {/* Header Left */}
        <HeaderLeft>
            <HeaderAvatar />
            <AccessTimeIcon />
        </HeaderLeft>
        
        {/* Header Search */}
        {/* Header Right */}
        </HeaderCont>
        
    </div>
    );

export default Header;

const HeaderCont = styled.div`

display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack-color);
color: white;
`;

const HeaderLeft = styled.div`
flex: 0.3;
display: flex;
align-items: center;
margin-left: 20px;

> .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: auto;
}
`;
const HeaderAvatar = styled(Avatar)`
cursor: pointer;
:hover {
    opacity: 0.8;
}`;
