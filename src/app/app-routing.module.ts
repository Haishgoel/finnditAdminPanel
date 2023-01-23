import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddParentCategoryComponent } from './pages/category/add-parent-category/add-parent-category.component';
import { AddSubCategoryL1Component } from './pages/category/add-sub-category-l1/add-sub-category-l1.component';
import { AddSubCategoryL2Component } from './pages/category/add-sub-category-l2/add-sub-category-l2.component';
import { DetailCategoryComponent } from './pages/category/detail-category/detail-category.component';
import { EditCategoryComponent } from './pages/category/edit-category/edit-category.component';
// import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RewardCategoryEditComponent } from './pages/reward-category-edit/reward-category-edit.component';
import { RewardsAddComponent } from './pages/rewards-add/rewards-add.component';
import { RewardsEditComponent } from './pages/rewards-edit/rewards-edit.component';
import { RewardsComponent } from './pages/rewards/rewards.component';

const routes: Routes = [
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },

  // { path: '', pathMatch: 'full', redirectTo: '/' },
  // { path: 'login', component: LoginComponent},
  { path: '', component: DashboardComponent},
  { path: 'rewards', component: RewardsComponent},
  { path: 'rewards/edit', component: RewardsEditComponent},
  { path: 'rewards/add', component: RewardsAddComponent},
  { path: 'rewardscategory/edit', component: RewardCategoryEditComponent},
  { path: 'categories', component: DetailCategoryComponent},
  { path: 'categories/edit', component: EditCategoryComponent},
  { path: 'categories/addparent', component: AddParentCategoryComponent},
  { path: 'categories/addsubl1', component: AddSubCategoryL1Component},
  { path: 'categories/addsubl2', component: AddSubCategoryL2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
