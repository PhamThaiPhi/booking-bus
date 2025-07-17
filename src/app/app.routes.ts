import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search'; // Corrected import path
import { BookTicket } from './pages/book-ticket/book-ticket';
import { MyBookings } from './pages/my-bookings/my-bookings';
import { SearchResult } from './pages/search-result/search-result';
import { RouterModule } from '@angular/router';
import { ListSchedule } from '../dashboard/scheduleadmin/list-schedule/list-schedule';
import { CreateScheduleComponent } from '../dashboard/scheduleadmin/create-schedule/create-schedule';
import { DeleteSchedule } from '../dashboard/scheduleadmin/delete-schedule/delete-schedule';
import { EditSchedule } from '../dashboard/scheduleadmin/edit-schedule/edit-schedule';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full',
    },
    {
        path: 'search',
        component: SearchComponent,
    },
    {
        path: 'search-result/:from/:to/:date',
        component: SearchResult, // Assuming you want to use the same component for search-result
    },
    {
        path: 'book-ticket/:scheduleId',
        component: BookTicket, // Assuming you want to use the same component for book-tick
    },
    {
        path: 'my-bookings',
        component: MyBookings, // Assuming you want to use the same component for my-bookings
    },
    {
        path: 'dashboard/scheduleadmin/list-schedule',
        component: ListSchedule,
    },
    {
        path: 'dashboard/scheduleadmin/create-schedule',
        component: CreateScheduleComponent,

    }, {
        path: 'dashboard/scheduleadmin/delete-schedule/:id',
        component: DeleteSchedule,
    },
    {
        path: 'dashboard/scheduleadmin/edit-schedule/:id',
        component: EditSchedule,
    }

];
