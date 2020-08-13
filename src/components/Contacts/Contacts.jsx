import React from 'react';
import GoogleMapReact from 'google-map-react';
import {makeStyles} from '@material-ui/core/styles';

import { ReactComponent as Storage } from '../../assets/coffee-cup.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Typography} from '@material-ui/core';
import {useTranslation} from 'react-i18next';

const withSvgIcon = Component => props => <SvgIcon {...props} component={Component} />;
const StorageIcon = withSvgIcon(Storage);

const useStyles = makeStyles(() => ({
  marker: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '36px',
    height: '36px',
    transform: 'translate(-50%, -50%)'
  }
}));

function Marker() {
  const classes = useStyles();
  return (<StorageIcon className={classes.marker}/>);
}

export default function Contacts() {
  const { t } = useTranslation();
  const defaultProps = {
    center: {
      lat: 49.839208,
      lng: 24.008990
    },
    zoom: 18
  };
  
  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <Typography>{t('info.address')}</Typography>
      <Typography>{t('info.phone')}</Typography>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDc-AYScDvqbOdcS9eTM7UJTfsIqK1fHs0' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text='My Marker'
        />
      </GoogleMapReact>
    </div>);
}
