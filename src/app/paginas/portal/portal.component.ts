import { Component } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular'; // Import FullCalendar


@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css'
})

export default class PortalComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
}
