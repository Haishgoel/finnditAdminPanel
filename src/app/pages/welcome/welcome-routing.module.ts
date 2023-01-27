import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, children:[
  { path: 'dashboard', component: DashboardComponent},
  { path: 'rewards', component: RewardsComponent},
  { path: 'rewards/edit', component: RewardsEditComponent},
  { path: 'rewards/add', component: RewardsAddComponent},
  { path: 'rewardscategory/edit', component: RewardCategoryEditComponent},
  { path: 'categories', component: DetailCategoryComponent},
  { path: 'categories/edit', component: EditCategoryComponent},
  { path: 'categories/addparent', component: AddParentCategoryComponent},
  { path: 'categories/addsubl1', component: AddSubCategoryL1Component},
  { path: 'categories/addsubl2', component: AddSubCategoryL2Component},
  { path: 'categories/detail/:id', component: SingleCategporyDetailComponent},
  { path: 'user', component: UsersComponent},
  { path: 'listing', component: ListingComponent},
  { path: 'merchantbanner', component: MerchantBannerComponent},
  { path: 'merchantbanner/price/edit', component: EditMerchantBannerComponent},
  { path: 'merchantbanner/media/edit', component: EditmediaMerchantBannerComponent},
  { path: 'team', component: MyTeamComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
