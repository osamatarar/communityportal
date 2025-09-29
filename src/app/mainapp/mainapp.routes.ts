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
import { UserVenuesComponent } from "./components/uservenues/uservenues.component";
import { UserCompaingComponent } from "./components/usercompaigns/usercompaings.component";
import { ForumsComponent } from "./components/forums/forums.component";
import { DetailPageComponent } from "./components/venues/DetailPage/DetailPage.component";
import { RequestComponent } from "./components/request/request.component";
import { CommitteeComponent } from "./components/committee/committee.component";

export default [
    { path: 'dropdowndata', component: DropdownDataComponent },
    { path: 'adminuser', component: AdminUserComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'project-detail', component: ProjectDetailComponent },
    { path: 'event', component: EventComponent },
    { path: 'request', component: RequestComponent },
    { path: 'venue', component: VenuesComponent },
    { path: 'venue/detail', component: DetailPageComponent },
    { path: 'hospital', component: HospitalsComponent },
    { path: 'forums', component: ForumsComponent },
    { path: 'userprofile', component: UserProfileComponent },
    { path: 'userevent', component: UserEventsComponent },
    { path: 'userforums', component: UserforumsComponent },
    { path: 'userforum/detail', component: DetailpageComponent },
    { path: 'uservenues', component: UserVenuesComponent },
    { path: 'usercompaings', component: UserCompaingComponent },
    { path: 'usercompaings', component: UserCompaingComponent},
    { path: 'committee', component: CommitteeComponent},
    { path: '**', redirectTo: '/notfound' }
] as Routes;
