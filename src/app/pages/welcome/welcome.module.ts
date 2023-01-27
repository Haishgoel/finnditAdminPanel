import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddParentCategoryComponent } from '../category/add-parent-category/add-parent-category.component';
import { AddSubCategoryL1Component } from '../category/add-sub-category-l1/add-sub-category-l1.component';
import { AddSubCategoryL2Component } from '../category/add-sub-category-l2/add-sub-category-l2.component';
import { DetailCategoryComponent } from '../category/detail-category/detail-category.component';
import { EditCategoryComponent } from '../category/edit-category/edit-category.component';
import { SingleCategporyDetailComponent } from '../category/single-categpory-detail/single-categpory-detail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ListingComponent } from '../listing/listing/listing.component';
import { EditMerchantBannerComponent } from '../merchantBanner/edit-merchant-banner/edit-merchant-banner.component';
import { EditmediaMerchantBannerComponent } from '../merchantBanner/editmedia-merchant-banner/editmedia-merchant-banner.component';
import { MerchantBannerComponent } from '../merchantBanner/merchant-banner/merchant-banner.component';
import { MyTeamComponent } from '../myTeam/my-team/my-team.component';
import { RewardCategoryEditComponent } from '../reward-category-edit/reward-category-edit.component';
import { RewardsAddComponent } from '../rewards-add/rewards-add.component';
import { RewardsEditComponent } from '../rewards-edit/rewards-edit.component';
import { RewardsComponent } from '../rewards/rewards.component';
import { UsersComponent } from '../users/users/users.component';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [
    WelcomeRoutingModule, 
    ReactiveFormsModule,
    FormsModule, 
    NgModule,
    RouterModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    WelcomeComponent,
    DashboardComponent,
    RewardsComponent,
    RewardsEditComponent,
    RewardsAddComponent,
    RewardCategoryEditComponent,
    DetailCategoryComponent,
    EditCategoryComponent,
    AddParentCategoryComponent,
    AddSubCategoryL1Component,
    AddSubCategoryL2Component,
    SingleCategporyDetailComponent,
    UsersComponent,
    ListingComponent,
    MerchantBannerComponent,
    EditMerchantBannerComponent,
    EditmediaMerchantBannerComponent,
    MyTeamComponent
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
