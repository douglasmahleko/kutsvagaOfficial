import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonIcon from '@mui/icons-material/Person';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

export const NavBarLists = [
    {
        id : 0,
        icon : <HomeIcon />,
        label : "Home",
        route : "/"
    },
    {
        id : 1,
        icon : <PersonAddIcon />,
        label : "Add Agent",
        route : "addAgent"
    },
    {
        id : 2,
        icon : <GroupAddIcon />,
        label : "Add Client",
        route : "addClient"
    },
    {
        id :3,
        icon : <SupportAgentIcon />,
        label : "Show Agents",
        route : "showAgents"
    },
    
    {
        id : 4,
        icon : <SwapHorizIcon />,
        label : "Show Clients",
        route : "showClients"
    },
    {
        id : 5,
        icon : <AddHomeWorkIcon />,
        label : "Add House",
        route : "addHouse"
    },
    {
        id : 6,
        icon : <MapsHomeWorkIcon />,
        label : "Show Houses",
        route : "showHouses"
    },
    {
        id : 7,
        icon : <PlaylistAddCircleIcon />,
        label : "Add Short List",
        route : "addShortList"
    },
    {
        id : 8,
        icon : <FormatListNumberedRtlIcon />,
        label : "View Short Lists",
        route : "viewShortLists"
    },
    {
        id : 9,
        icon : <ManageAccountsIcon />,
        label : "Edit Profile",
        route : "editProfile"
    },
    {
        id : 10,
        icon : <PersonIcon />,
        label : "Show Profile",
        route : "showProfile"
    }    
]