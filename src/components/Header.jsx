
import React from 'react';
import styled from 'styled-components';

import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const Header = () => (
    <div className='header'>
        <HeaderCont>
        {/* Header Left */}
        <HeaderLeft>
            <HeaderAvatar />
            <AccessTimeIcon />
        </HeaderLeft>
        
        {/* Header Search */}

        <HeaderSearch>
            {/* Search Icon */}
            <SearchIcon />
            
            {/* Input */}
            <input placeholder='Search Slack' />
        </HeaderSearch>
        {/* Header Right */}
        
        <HeaderRight>
        <HelpOutlineIcon />
        </HeaderRight >
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

const HeaderSearch = styled.div`

flex: 0.4;
opacity: 1;
border-radius: 6px;
background-color: #421f44;
text-align: center;
color:gray;
padding: 0 50px;
border: 1px solid gray;

> input{
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
}
`;

const HeaderRight = styled.div`
flex: 0.3;
display: flex;
align-items: flex-end;

> .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
}
`;