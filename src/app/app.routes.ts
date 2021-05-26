import {RouterModule,Routes} from '@angular/router';
import {HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeoroeComponent } from './components/heroe/heoroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const APP_ROUTES:Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeoroeComponent },
    { path: 'busqueda/:texto', component: BusquedaComponent },
    { path: '**', pathMatch:'full', redirectTo: '' }
];
//useHash sirve para manejar los parametros en la url con el simbolo # (hash)
//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{ useHash:true });
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);