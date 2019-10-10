import React, { useState } from 'react';

import { StyledMain } from './Main.styled';
import { Header } from '../Header';
import { Content } from '../Content'

const Main =  () => {

    const [open, setOpen] = useState(false)

   return (
    <StyledMain>
        <div className="bgContainer"></div>
        <Header open = {open} setOpen = {setOpen}/>
        <Content />
    </StyledMain>
   )
}

export default Main