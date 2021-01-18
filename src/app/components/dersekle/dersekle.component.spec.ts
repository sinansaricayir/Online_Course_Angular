import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DersekleComponent } from './dersekle.component';

describe('DersekleComponent', () => {
  let component: DersekleComponent;
  let fixture: ComponentFixture<DersekleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DersekleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DersekleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
