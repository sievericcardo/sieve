import React from 'react';

import { Link } from 'react-router-dom';

// Import element from the core
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';

// Import icons
import {
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon,
  PermMedia as PermMediaIcon,
  AccountTree,
  Description as DescriptionIcon,
  Book,
} from '@mui/icons-material';

export const mainListItems = (
  <div>
    <Link className="linkStyle" to='/cms-dashboard'>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link className="linkStyle" to='/cms-dashboard/manage-medias'>
      <ListItem button>
        <ListItemIcon>
          <PermMediaIcon />
        </ListItemIcon>
        <ListItemText primary="Media" />
      </ListItem>
    </Link>
    <Link className="linkStyle" to='/cms-dashboard/manage-articles'>
      <ListItem button>
        <ListItemIcon>
         <Book />
        </ListItemIcon>
        <ListItemText primary="Articles" />
      </ListItem>
    </Link>
    <Link className="linkStyle" to='/cms-dashboard/manage-projects'>
      <ListItem button>
        <ListItemIcon>
          <AccountTree />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
    </Link>
    <Link className="linkStyle" to='/cms-dashboard/manage-writeups'>
      <ListItem button>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Writeups" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
)
