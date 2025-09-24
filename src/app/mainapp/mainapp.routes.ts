import { Routes } from "@angular/router";
import { DropdownDataComponent } from "./components/dropdowndata/dropdowndata.componet";
import { AdminUserComponent } from "./components/adminuser/adminuser.component";
import { ProjectComponent } from "./components/projects/project.component";
import { EventComponent } from "./components/events/event.component";
import { UserProfileComponent } from "./components/userprofile/userprofile.component";
import { UserEventsComponent } from "./components/userEvents/userevent.component";
import { UserforumsComponent } from "./components/userforums/userforums.component";

export default [
    { path: 'dropdowndata', component: DropdownDataComponent },
    { path: 'adminuser', component: AdminUserComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'event', component: EventComponent },
    { path: 'userprofile', component: UserProfileComponent },
    { path: 'userevent', component: UserEventsComponent },
    { path: 'userforum', component: UserforumsComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
