import React from 'react';
import { useParams } from 'react-router';

export default function Details() {
  const { groupId } = useParams();

  return (<div>{'Display page for ' + groupId}</div>);
}
