import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PartierComponent } from './partier.component';

describe('PartierComponent', () => {
    let component: PartierComponent;
    let fixture: ComponentFixture<PartierComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PartierComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PartierComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
