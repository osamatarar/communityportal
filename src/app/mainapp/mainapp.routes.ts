import { Routes } from "@angular/router";
import { DropdownDataComponent } from "./components/dropdowndata/dropdowndata.componet";
import { AdminUserComponent } from "./components/adminuser/adminuser.component";
import { ProjectComponent } from "./components/projects/project.component";
import { EventComponent } from "./components/events/event.component";
import { VenuesComponent } from "./components/venues/venues.component";
import { HospitalsComponent } from "./components/hospitals/hospitals.component";
import { ProjectDetailComponent } from "./components/projects/project-detail/project-detail.component";
import { UserProfileComponent } from "./components/userprofile/userprofile.component";
import { UserEventsComponent } from "./components/userEvents/userevent.component";
import { UserforumsComponent } from "./components/userforums/userforums.component";
import { DetailpageComponent } from "./components/userforums/detailpage/detailpage.component";
import { ForumsComponent } from "./components/forums/forums.component";
import { DetailPageComponent } from "./components/venues/DetailPage/DetailPage.component";

export default [
    { path: 'dropdowndata', component: DropdownDataComponent },
    { path: 'adminuser', component: AdminUserComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'project-detail', component: ProjectDetailComponent },
    { path: 'event', component: EventComponent },
    { path: 'venue', component: VenuesComponent },
    { path: 'venue/detail', component: DetailPageComponent },
    { path: 'hospital', component: HospitalsComponent },
    { path: 'forums', component: ForumsComponent },
    { path: 'userprofile', component: UserProfileComponent },
    { path: 'userevent', component: UserEventsComponent },
    { path: 'userforum', component: UserforumsComponent },
    { path: 'userforum/detail', component: DetailpageComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
