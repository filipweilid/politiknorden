import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReadMoreComponent } from './read-more/read-more.component';
import { MomentModule } from 'angular2-moment';

@NgModule({
    declarations: [ReadMoreComponent],
    imports: [
        CommonModule,
        MaterialModule,
        MomentModule
    ],
    exports: [
        MaterialModule,
        ReadMoreComponent,
        MomentModule
    ]
})
export class SharedModule { }
