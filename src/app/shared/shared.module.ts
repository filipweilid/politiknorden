import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReadMoreComponent } from './read-more/read-more.component';

@NgModule({
    declarations: [ReadMoreComponent],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        MaterialModule,
        ReadMoreComponent
    ]
})
export class SharedModule { }
