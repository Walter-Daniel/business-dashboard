"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import FullCalendar from '@fullcalendar/react';
import multiMonthPlugin from '@fullcalendar/multimonth';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { DateSelectArg, EventContentArg } from '@fullcalendar/core/index.js';

import axios from 'axios';
import { Company, Event } from '@prisma/client';
import { formatDate } from '@/lib/formatDate';
import { ModalAddEvent } from '../modalEventAdd';
import { toast } from '@/hooks/use-toast';

interface CalendarProps {
  companies: Company[];
  events: Event[]
}

export const Calendar = ({ companies, events }: CalendarProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [onSaveNewEvent, setOnSaveNewEvent] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DateSelectArg>();
  const [newEvent, setNewEvent] = useState({
    eventName: "",
    companiesSelected: {
      name: "",
      id: ""
    }
  });

  const handleDateClick = async (selected: DateSelectArg) => {
    setOpen(true);
    setSelectedItem(selected);
  }

  useEffect(() => {
    if(onSaveNewEvent && selectedItem?.view.calendar){
      const calendarApi = selectedItem.view.calendar;
      calendarApi.unselect();

      const newEventPrisma = {
        companyId: newEvent.companiesSelected.id,
        title: newEvent.eventName,
        start: new Date(selectedItem.start),
        allDay: false,
        timeFormat: 'H(:mm)'
      }

      try {
        axios.post(`/api/company/${newEvent.companiesSelected.id}/event`, newEventPrisma)
        toast({
          title: "Event created!"
        });
        router.refresh();
      } catch (error) {
        toast({
          title: "Something went wrong.",
          variant: "destructive"
        })
      }
      setNewEvent({
        eventName: "",
        companiesSelected: {
          name: "",
          id: ""
        }
      });

      setOnSaveNewEvent(false);
      
    }
  }, [onSaveNewEvent, selectedItem, router, toast, newEvent])
  

  const HandleEventClick = async(selectd:any) => {
    if(window.confirm(
        `Are you sure you want to delete this event? ${selectd.event.title}`
    )){
      try {
        axios.delete(`/api/event/${selectd.event._def.publicId}`)
        toast({
          title: "Event deleted!"
        });
        return router.refresh();
      } catch (error) {
        console.log(error);
        toast({
          title: "Something went wrong.",
          variant: "destructive"
        })
      }
    }
  };

  return (
    <div>
      <div className='md:flex gap-x-3'>
        <div className='w-[200px] relative'>
          <div className='absolute top-0 left-0  h-full w-full overflow-auto'>
            <p className='mb-3 text-xl'>Task list</p>
            {events.map((currentEvent) => (
              <div key={currentEvent.id} className='p-4 mb-2 rounded-lg shadow-md bg-slate-200 dark:bg-background'>
                <p className='font-bold'>{currentEvent.title}</p>
                <p>{formatDate(currentEvent.start)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex-1 calendar-container'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, multiMonthPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "timeGridDay,timeGridWeek,dayGridMonth,multiMonthYear,listMonth"
            }}
            height="80vh"
            initialView="dayGridMonth"
            weekends={false}
            events={events}
            eventContent={renderEventContent}
            editable={true}
            selectable={true}
            selectMirror={true}
            select={handleDateClick}
            eventClick={HandleEventClick}
          />
        </div>
      </div>
      <ModalAddEvent
        open={open}
        setOpen={setOpen}
        companies={companies}
        setNewEvent={setNewEvent}
        setOnSaveNewEvent={setOnSaveNewEvent}
      />
    </div>
  )
}

function renderEventContent(eventInfo: EventContentArg) {
  return (
    <div className='text-black w-full p-1'>
      <i>{eventInfo.event.title}</i>
    </div>
  )
}
