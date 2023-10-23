import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FullWidthGrid from '../grid/FullWidthGrid';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <FullWidthGrid></FullWidthGrid>
      </Container>
    </React.Fragment>
  );
}
