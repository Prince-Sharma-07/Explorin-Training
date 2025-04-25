import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { buttonBaseClasses } from '@mui/material';

export default function ArrowTooltips() {
  return (
    <Tooltip title={<button className='bg-amber-700 p-2 cursor-pointer'>hello</button>} arrow>
      <Button>Arrow</Button>
    </Tooltip>
  );
}