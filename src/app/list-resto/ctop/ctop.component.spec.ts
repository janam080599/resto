import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtopComponent } from './ctop.component';

describe('CtopComponent', () => {
  let component: CtopComponent;
  let fixture: ComponentFixture<CtopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
