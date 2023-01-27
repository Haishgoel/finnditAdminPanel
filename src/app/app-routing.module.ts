import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { AddParentCategoryComponent } from './pages/category/add-parent-category/add-parent-category.component';
import { AddSubCategoryL1Component } from './pages/category/add-sub-category-l1/add-sub-category-l1.component';
import { AddSubCategoryL2Component } from './pages/category/add-sub-category-l2/add-sub-category-l2.component';
import { DetailCategoryComponent } from './pages/category/detail-category/detail-category.component';
import { EditCategoryComponent } from './pages/category/edit-category/edit-category.component';
import { SingleCategporyDetailComponent } from './pages/category/single-categpory-detail/single-categpory-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListingComponent } from './pages/listing/listing/listing.component';
import { EditMerchantBannerComponent } from './pages/merchantBanner/edit-merchant-banner/edit-merchant-banner.component';
import { EditmediaMerchantBannerComponent } from './pages/merchantBanner/editmedia-merchant-banner/editmedia-merchant-banner.component';
import { MerchantBannerComponent } from './pages/merchantBanner/merchant-banner/merchant-banner.component';
// import { MyTeamComponent } from './pages/myTeam/my-team/my-team.component';
import { RewardCategoryEditComponent } from './pages/reward-category-edit/reward-category-edit.component';
import { RewardsAddComponent } from './pages/rewards-add/rewards-add.component';
import { RewardsEditComponent } from './pages/rewards-edit/rewards-edit.component';
import { RewardsComponent } from './pages/rewards/rewards.component';
import { UsersComponent } from './pages/users/users/users.component';


const routes: Routes = [
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },

  // { path: '', pathMatch: 'full', redirectTo: '/' },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)}


 
 
  { path: '', component: DashboardComponent},
  { path: 'rewards', component: RewardsComponent},
  { path: 'rewards/edit', component: RewardsEditComponent},
  { path: 'rewards/add', component: RewardsAddComponent},
  { path: 'rewardscategory/edit/:id', component: RewardCategoryEditComponent},
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
  // { path: 'team', component: MyTeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
