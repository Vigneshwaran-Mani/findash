import {React} from 'react';
import {BsSearch,BsJustify} from 'react-icons/bs';

export default function Header({OpenSidebar}) {
    return(
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar}/>
            </div>
            <div className='header-left'>
                <h3>Hello Vignesh</h3>
            </div>
            <div className='header-right'>
                <BsSearch className='icon' />
            </div>
            {/* <div className='header-right'>
                <BsFillBellFill className='icon' />
                <BsFillEnvelopeFill className='icon' />
                <BsPersonCircle className='icon' />
            </div> */}
        </header>
    )
}