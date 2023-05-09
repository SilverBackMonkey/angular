import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/admin/icons/icons.component';
import { MapsComponent } from '../../pages/admin/maps/maps.component';
import { UserProfileComponent } from '../../pages/admin/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/admin/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';
import { DtableComponent } from 'src/app/pages/admin/dtable/dtable.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    DtableComponent,
  ]
})

export class AdminLayoutModule {}
