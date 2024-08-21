import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { Routes } from '@angular/router';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ContactComponent } from './Components/contact/contact.component';

export const routes: Routes = [
    // {path:'', redirectTo: 'home' , pathMatch:'full'},
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent },
    {path:'portfolio',component:PortfolioComponent},
    {path:'**',component:NotfoundComponent}
];
