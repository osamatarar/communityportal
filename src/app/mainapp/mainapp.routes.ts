import { Routes } from "@angular/router";
import { DropdownDataComponent } from "./components/dropdowndata/dropdowndata.componet";
import { AdminUserComponent } from "./components/adminuser/adminuser.component";
import { ProjectComponent } from "./components/projects/project.component";
import { EventComponent } from "./components/events/event.component";
import { VenuesComponent } from "./components/venues/venues.component";
import { HospitalsComponent } from "./components/hospitals/hospitals.component";
import { ProjectDetailComponent } from "./components/projects/project-detail/project-detail.component";
import { UserProfileComponent } from "./components/userprofile/userprofile.component";

export default [
   { path: 'dropdowndata', component: DropdownDataComponent },
   { path: 'adminuser', component: AdminUserComponent },
   { path: 'project', component: ProjectComponent },
   { path: 'project-detail', component: ProjectDetailComponent },
   { path: 'event', component: EventComponent},
   { path: 'venue', component: VenuesComponent},
   { path: 'hospital', component: HospitalsComponent},
   { path: 'userprofile', component :UserProfileComponent },
   { path: '**', redirectTo: '/notfound' }
] as Routes;
