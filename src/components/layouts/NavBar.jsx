import { Link } from "react-router-dom";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function NavBar(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="NavBar"
      hidden={value !== index}
      id={`vertical-NavBar-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

NavBar.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-NavBar-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <NavBar value={value} index={0}>
        <Link class="nav-link active" aria-current="page" to="/play">
          Play
        </Link>
      </NavBar>
      <NavBar value={value} index={1}>
        Item
      </NavBar>
      <NavBar value={value} index={2}>
        Item Three
      </NavBar>
      <NavBar value={value} index={3}>
        Item Four
      </NavBar>
      <NavBar value={value} index={4}>
        Item Five
      </NavBar>
      <NavBar value={value} index={5}>
        Item Six
      </NavBar>
      <NavBar value={value} index={6}>
        Item Seven
      </NavBar>
    </Box>
  );
}
// function NavBar() {
//     return (
// <nav class="Vertical-navbar navbar-expand-lg navbar-light bg-light fixed-left nav flex-column">
//   <div class="container-fluid">
//     <Link class="navbar-brand" to="/">
//         LOGO
//     </Link>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//             <Link class="nav-link active" aria-current="page" to="/play">
//               Play
//             </Link>
//         </li>
//       </ul>
//       <form class="d-flex">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//     );
// };

// export default NavBar;