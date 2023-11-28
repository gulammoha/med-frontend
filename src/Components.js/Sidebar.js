import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import StoreIcon from '@mui/icons-material/Store';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar() {
  return (
    <>
        <div className="sidebar">
            <div className="top">
                <span className="logo">
                    GTtrading
                </span>
            </div >
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <DashboardCustomizeIcon className='icon'/>
                        <span>
                            Dashboard
                        </span>
                    </li>
                     <li>
                        <PeopleIcon className='icon'/>
                        <span>
                            Students
                        </span>
                    </li>
                     <li>
                        <LibraryBooksIcon className='icon'/>
                        <span>
                            Courses
                        </span>
                    </li>
                     <li>
                        <StoreIcon className='icon'/>
                        <span>
                            Shop
                        </span>
                    </li>
                    <li>
                        <MonetizationOnIcon className='icon'/>
                        <span>
                            Trade
                        </span>
                    </li>
                     <li>
                            <QueryStatsIcon className='icon'/>
                        <span>
                            Stats
                        </span>
                    </li>
                     <li>
                        <SettingsIcon className='icon'/>
                        <span>
                            Settings
                        </span>
                    </li>
                     <li>
                        <AccountCircleOutlinedIcon className='icon'/>
                        <span>
                            Profile
                        </span>
                    </li>
                     <li>
                        <LogoutIcon className='icon'/>
                        <span>
                            Logout
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}