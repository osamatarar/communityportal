import { Routes } from "@angular/router";
import { DropdownDataComponent } from "./components/dropdowndata/dropdowndata.componet";
import { AdminUserComponent } from "./components/adminuser/adminuser.component";
import { ProjectComponent } from "./components/projects/project.component";
import { EventComponent } from "./components/events/event.component";

export default [
   { path: 'dropdowndata', component: DropdownDataComponent },
   { path: 'adminuser', component: AdminUserComponent },
   { path: 'project', component: ProjectComponent },
   { path: 'event', component: EventComponent},
   { path: '**', redirectTo: '/notfound' }
] as Routes;
