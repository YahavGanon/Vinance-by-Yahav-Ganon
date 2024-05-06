import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component'
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component'
import { contactResolver } from './services/contact-resolver'
import { SignupPageComponent } from './pages/signup/signup-page.component'

//A page for edit and add
const routes: Routes = [
    { path: 'contacts', component: ContactPageComponent },
    {
        path: 'contacts/edit',
        component: ContactEditPageComponent,
    },
    {
        path: 'contacts/:id',
        component: ContactDetailsComponent,
        resolve: { contact: contactResolver },
    },
    {
        path: 'contacts/edit/:id',
        component: ContactEditPageComponent,
        resolve: { contact: contactResolver },
    },
    { path: 'statistic', component: StatisticPageComponent },
    { path: '', component: HomePageComponent },
    { path: 'signup', component: SignupPageComponent },
    
]

//With children routes
// const routes: Routes = [
//   {path: 'contacts', component:ContactPageComponent, children: [
//     {path: 'edit/:id', component: ContactEditPageComponent, resolve: {contact: ContactResolverService}},
//     {path: 'edit', component: ContactEditPageComponent, resolve: {contact: ContactResolverService}}
//   ]},
//   {path:'contacts/:id', component: ContactDetailsComponent, resolve: {contact: ContactResolverService}},
//   {path: 'statistic', component:StatisticPageComponent},
//   {path: '', component:HomePageComponent},
// ];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
