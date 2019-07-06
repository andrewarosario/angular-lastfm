import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UserProfileResolver } from 'src/app/pages/user-profile/user-profile.resolver';
import { SearchComponent } from 'src/app/pages/search/search.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    {
      path: 'user/:user',
      component: UserProfileComponent,
      resolve: { user: UserProfileResolver }
    },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'search', component: SearchComponent },
    {
      path: 'scrobble',
      loadChildren: '../../pages/scrobble/scrobble.module#ScrobbleModule'
    },
];
