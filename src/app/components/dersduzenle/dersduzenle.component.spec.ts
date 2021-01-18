import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DersduzenleComponent } from './dersduzenle.component';

describe('DersduzenleComponent', () => {
  let component: DersduzenleComponent;
  let fixture: ComponentFixture<DersduzenleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DersduzenleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DersduzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
