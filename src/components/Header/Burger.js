import React, {useState} from 'react'
import { StyledBurger } from './BurgerStyle';

function Burger() {
    const [ open, setOpen ] = useState(false);

    const handleClickHamburger = (open) => {
      setOpen(!open);
    };


    return (
        <div>
            
        </div>
    )
}

export default Burger
