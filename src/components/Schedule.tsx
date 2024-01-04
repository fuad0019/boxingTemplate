import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
    Scheduler,
    WeekView,
    Appointments,
    AppointmentForm,
    AppointmentTooltip,
    ConfirmationDialog,
    EditRecurrenceMenu,
    AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';

import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';

import { Box } from '@mui/material';

export interface Appointment {

    title: string,
    time: string,
    description: string,
    startDate: string

}


interface ScheduleProps {
    appointments: Appointment[],
}

export default function Schedule({ appointments }: ScheduleProps) {


    const changeAddedAppointment = (addedAppointment: any) =>{
      }
    
      const changeAppointmentChanges= (addedAppointment: any) =>{
    }
    
    const  changeEditingAppointment= (addedAppointment: any) =>{
    }
    
    const  commitChanges = ({ added, changed, deleted }: any) =>{

        const h = added
    }
       
    return (

        <Box height={'auto'} width={{xs: '90%', sm: '90%' ,md: '60%'}} sx={{ overflow: 'hidden' }}>
            <Paper sx={{ overflow: 'hidden' }}>
                <Scheduler data={appointments} >
                    <EditingState
                        onCommitChanges={commitChanges}
                        addedAppointment={{}}
                        onAddedAppointmentChange={changeAddedAppointment}
                        appointmentChanges={{}}
                        onAppointmentChangesChange={changeAppointmentChanges}
                        editingAppointment={{}}
                        onEditingAppointmentChange={changeEditingAppointment}
                    />
                    <WeekView startDayHour={9} endDayHour={19} />
                    <AllDayPanel />
                    <EditRecurrenceMenu />
                    <ConfirmationDialog />
                    <Appointments />
                    <AppointmentTooltip

                    />
                    <AppointmentForm />


                </Scheduler>
            </Paper>
        </Box>

    )

}


