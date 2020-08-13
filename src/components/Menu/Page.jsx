import React from 'react';
import { useParams } from 'react-router';
import GridList from '@material-ui/core/GridList';
import menuData from './tileData';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function Page() {
  const { groupId } = useParams();

  console.log(menuData);

  const classes = useStyles();
  const list = menuData[groupId] || [];
  return (
    <div className={classes.root}>
      <GridList cellHeight={180}>
        {list.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.author}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>);
}
