import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/admin/icons/icons.component';
import { MapsComponent } from '../../pages/admin/maps/maps.component';
import { UserProfileComponent } from '../../pages/admin/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/admin/tables/tables.component';
import { DtableComponent } from 'src/app/pages/admin/dtable/dtable.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'datatables',          component: DtableComponent },
    { path: 'maps',           component: MapsComponent }
];
