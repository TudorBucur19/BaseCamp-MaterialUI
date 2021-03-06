import WifiIcon from '@mui/icons-material/Wifi';
import ShowerIcon from '@mui/icons-material/Shower';
import WcIcon from '@mui/icons-material/Wc';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import PetsIcon from '@mui/icons-material/Pets';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import BungalowIcon from '@mui/icons-material/Bungalow';
import DetailsIcon from '@mui/icons-material/Details';
import RvHookupIcon from '@mui/icons-material/RvHookup';
import HikingIcon from '@mui/icons-material/Hiking';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export const ratingLabels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

export const campgroundFacilities = [
    { name: "water / spring", icon: LocalDrinkIcon },
    { name: "shower", icon: ShowerIcon },
    { name: "toilet", icon: WcIcon },
    { name: "internet", icon: WifiIcon },
    { name: "electricity", icon: ElectricalServicesIcon },
    { name: "pet friendly", icon: PetsIcon },
    { name: "video security", icon: VideocamIcon },
    { name: "parking", icon: LocalParkingIcon },
];

export const landscapeType = [     
    "mountain campsite",
    "beach campsite",
    "countryside campsite",
    "mountain hut",
    "mountain refuge",
];

export const accomodationType = [
    {name: "tent", icon: DetailsIcon},
    {name: "hut", icon: BungalowIcon},
    {name: "camper van", icon: RvHookupIcon}
];

export const locationAccess = [
    {name: "only walk", icon: HikingIcon},
    {name: "car", icon: DirectionsCarIcon},
    {name: "caravan", icon: RvHookupIcon},
];