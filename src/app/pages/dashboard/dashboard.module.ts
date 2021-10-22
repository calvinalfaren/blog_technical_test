import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DashboardComponent } from './dashboard.component';
import { UserService } from '../../services/user.service';
import { FileService } from '../../file.service';
import { SharedModule } from '../../shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


export const routes = [
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      DirectivesModule,
      PipesModule,
      RouterModule.forChild(routes),
      SharedModule,
      NgxSkeletonLoaderModule
   ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
    UserService,
    FileService,
  ]
})

export class DashboardModule {
}
