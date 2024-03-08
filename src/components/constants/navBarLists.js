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
        level : "both",
        route : "/"
    },
    {
        id : 1,
        icon : <PersonAddIcon />,
        label : "Register as Agent",
        level : "agents",
        route : "addAgent"
    },
    {
        id : 2,
        icon : <GroupAddIcon />,
        label : "Register as Client",
        level : "agents",
        route : "addClient"
    },
    {
        id :3,
        icon : <SupportAgentIcon />,
        label : "Show Agents",
        level : "clients",
        route : "showAgents"
    },
    
    {
        id : 4,
        icon : <SwapHorizIcon />,
        label : "Show Clients",
        level : "agents",
        route : "showClients"
    },
    {
        id : 5,
        icon : <AddHomeWorkIcon />,
        label : "Add House",
        level : "agents",
        route : "addHouse"
    },
    {
        id : 6,
        icon : <MapsHomeWorkIcon />,
        label : "Show Houses",
        level : "both",
        route : "showHouses"
    },
    {
        id : 7,
        icon : <PlaylistAddCircleIcon />,
        label : "Add Prerequisites",
        level : "both",
        route : "myPrerequisites"
    },
    {
        id : 8,
        icon : <PlaylistAddCircleIcon />,
        label : "Preview Prerequisites",
        level : "both",
        route : "previewPrerequisites"
    },
    {
        id : 9,
        icon : <FormatListNumberedRtlIcon />,
        label : "View Short Lists",
        level : "both",
        route : "viewShortLists"
    },
    {
        id : 10,
        icon : <ManageAccountsIcon />,
        label : "Edit Contact",
        level : "both",
        route : "editProfile"
    },
    {
        id : 11,
        icon : <PersonIcon />,
        label : "Show Profile",
        level : "both",
        route : "showProfile"
    }    
]