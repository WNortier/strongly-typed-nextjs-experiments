import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { useEffect } from 'react';

interface MyComponentProps {
    myBooleanProp: boolean;
}

const BasicDatePicker = () => {
    function getFutureDate(): string {
        const currentDate = dayjs();
        const futureDate = currentDate.add(3, 'month');

        return futureDate.format('YYYY-MM-DD');
    }

    useEffect(() => {
        (document.querySelector('.MuiPickersCalendarHeader-labelContainer') as HTMLElement).style.display = 'none'
    }, [])

    const customStyles: React.CSSProperties = {
        '& .MuiPickersDay-day:not(.MuiPickersDay-hidden)': {
            color: 'black',
        },
    } as React.CSSProperties;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={customStyles}>
                <DateCalendar />
            </div>
        </LocalizationProvider>
    );
};

export default BasicDatePicker;