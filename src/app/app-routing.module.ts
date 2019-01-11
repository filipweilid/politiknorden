import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartiDetailComponent } from './views/parti-detail/parti-detail.component';
import { FavoritedComponent } from './views/favorited/favorited.component';

const routes: Routes = [
    { path: 'bookmarked', component: FavoritedComponent },
    {
        path: 'party', children: [
            { path: ':id', component: PartiDetailComponent }
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'bookmarked' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
