// here i am creating a reusable component where i am passing in an icon and a title
import React from 'react';
import styled from 'styled-components';

function SidebarOptions({Icon, title}) {
  return (
  <SidebarOptionsCont>
    {Icon && <Icon fontsize="13px" style={{padding: 10}} />}
    {Icon ? (<h3>{title}</h3>): ( 
    <SidebarOptionsChannel>
        <span>#</span>{title}
        </SidebarOptionsChannel>
        )}
  </SidebarOptionsCont>
  );
}

export default SidebarOptions;

const SidebarOptionsCont = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;
:hover {
    opacity: 0.9;
    background-color: #340e36;
}
> h3 {
    font-weight: 500;
}
> h3 > span {
    padding: 15px;
}
`;
const SidebarOptionsChannel = styled.div`
`;