import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaHomeComponent } from './ruta-home.component';

describe('RutaHomeComponent', () => {
  let component: RutaHomeComponent;
  let fixture: ComponentFixture<RutaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutaHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaHomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
