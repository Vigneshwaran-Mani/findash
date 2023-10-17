import { React } from 'react';
import {BsFillArchiveFill, BsGrid1X2Fill, BsListCheck, BsMenuButtonWideFill, BsPeopleFill } from 'react-icons/bs';
import {MdOutlineLiveHelp} from 'react-icons/md';
import {TbSettings2} from 'react-icons/tb';

export default function Sidebar({openSidebarToggle,OpenSidebar}) {
    return (
        <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive": ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <TbSettings2 className='icon_header' /> Dashboard
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href=''>
                        <BsGrid1X2Fill className='icon' />Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href=''>
                        <BsFillArchiveFill className='icon' />Product
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href=''>
                        <BsPeopleFill className='icon' />Customers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href=''>
                        <BsListCheck className='icon' />Income
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href=''>
                        <BsMenuButtonWideFill className='icon' />Promote
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href=''>
                        <MdOutlineLiveHelp className='icon' />Help
                    </a>
                </li>
            </ul>
        </aside>
    )
}