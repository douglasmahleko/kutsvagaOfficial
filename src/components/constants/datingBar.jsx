import * as React from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';

export default function DatingBar({value, setValue, title,sx}) {

  return (
    <Box sx={{marginLeft:'1%'}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker error={value.length===0} required sx={sx} label={title} value={value} onChange={(newValue) => setValue(newValue)} />
            </DemoContainer>
        </LocalizationProvider>
    </Box>
  );
}