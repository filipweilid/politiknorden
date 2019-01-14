import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartiDetailComponent } from './views/parti-detail/parti-detail.component';
import { FavoritedComponent } from './views/favorited/favorited.component';
import { TweetsSidebarComponent } from './views/tweets-sidebar/tweets-sidebar.component';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';

const routes: Routes = [
    { path: 'bookmarked', component: FavoritedComponent },
    { path: 'party/:id', component: PartiDetailComponent },
    { path: ':tweet', component: TweetsSidebarComponent, outlet: 'tweets' },
    { path: '**', pathMatch: 'full', redirectTo: 'bookmarked' }
];

@NgModule({
    declarations: [
        PartiDetailComponent,
        FavoritedComponent,
        TweetsSidebarComponent
    ],
    imports: [RouterModule.forRoot(routes), SharedModule, FlexLayoutModule, CommonModule, NgxLinkifyjsModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
