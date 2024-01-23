import { Create, FiberManualRecord } from '@mui/icons-material';
import { 
    InsertComment, 
    Inbox, 
    Drafts,
    BookmarkBorder,
    FileCopy, 
    PeopleAlt, 
    Apps, 
    ExpandLess, 
    ExpandMore 
  } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import SidebarOptions from './SidebarOptions';

function Sidebar() {
  return (
    <SidebarCont>
        <SidebarHeader>
            
        
        <SidebarInfo>
            <h2>Unreal Channel</h2>
            <h3>
                <FiberManualRecord/>
                Jimi Hendrix

                </h3>
        </SidebarInfo>

        <Create/>
        </SidebarHeader>

    <SidebarOptions Icon={InsertComment} title='Threads' />
    <SidebarOptions Icon={Inbox} title='Mentions & reactions' />
    <SidebarOptions Icon={Drafts} title='Saved items' />
    <SidebarOptions Icon={BookmarkBorder} title='Channel browser' />
    <SidebarOptions Icon={PeopleAlt} title='People & user groups' />
    <SidebarOptions Icon={Apps} title='Apps' />
    <SidebarOptions Icon={FileCopy} title='File browser' />
    <SidebarOptions Icon={ExpandLess} title='Show less' />

    <SidebarOptions Icon={ExpandMore} title='Channels' />
    </SidebarCont>
  )
}

export default Sidebar;

const SidebarCont = styled.div`
background-color: var(--slack-color);
flex: 0.3;
border-top: 1px solid #49274b;
max-width: 260px;
margin-top: 60px;
color: white;
`;

const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;

> .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
}
`;

const SidebarInfo = styled.div`
flex: 1;

> h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
}
> h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
}
> h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
}`
;