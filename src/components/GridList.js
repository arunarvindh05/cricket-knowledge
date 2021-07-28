import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const teams = {
    "1":{
        name:"India",
        img:"https://www.wallpapertip.com/wmimgs/5-51022_india-flag-uhd-4k-wallpaper-india-flag-image.jpg"
    },
    "2":{
        name:"Australia",
        img:"https://www.wallpapertip.com/wmimgs/52-529744_australia-wallpaper-new-zealand-flag-grunge.jpg"
    },
    "3":{
        name:"England",
        img:"https://www.wallpapertip.com/wmimgs/50-505549_uk-flag-wallpaper-cross.jpg"
      
    },
    "4":{
        name:"Pakistan",
        img:"https://www.wallpapertip.com/wmimgs/7-78011_flag-image-hd-wallpapers-2017-data-src-3d.jpg"
    },
    "5":{
        name:"Bangladesh",
        img:"https://www.wallpapertip.com/wmimgs/16-162294_photograph.jpg"
    },
    "6":{
        name:"New Zealand",
        img:"https://www.wallpapertip.com/wmimgs/52-529744_australia-wallpaper-new-zealand-flag-grunge.jpg"

    }
};

export default function TitlebarGridList() {
  const classes = useStyles();

  const navigator = useNavigate();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {Object.entries(teams).map(([TeamID,{name,img,price,desc}]) => (
          <GridListTile key={TeamID}>
            <img src={img} alt={name} />
            <GridListTileBar
              title={name}
              subtitle={desc}
              actionIcon={
                <IconButton aria-label={`info about ${name}`} className={classes.icon} onClick={()=> navigator(TeamID)}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
