import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubrutaComponent } from './subruta.component';

describe('SubrutaComponent', () => {
  let component: SubrutaComponent;
  let fixture: ComponentFixture<SubrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubrutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubrutaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
