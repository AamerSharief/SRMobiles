import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackberryComponent } from './blackberry/blackberry.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { IphoneComponent } from './iphone/iphone.component';
import { LoginComponent } from './login/login.component';
import { OneplusComponent } from './oneplus/oneplus.component';
import { OppoComponent } from './oppo/oppo.component';
import { VivoComponent } from './vivo/vivo.component';
import { XiaomiComponent } from './xiaomi/xiaomi.component';

const routes: Routes = [
  {path:'blackberry',component:BlackberryComponent},
  {path:'iphone',component:IphoneComponent},
  {path:'oneplus',component:OneplusComponent},
  {path:'home',component:HomeComponent},
  {path:'oppo',component:OppoComponent},
  {path:'vivo',component:VivoComponent},
  {path:'xiaomi',component:XiaomiComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
