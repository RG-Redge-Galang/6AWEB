import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOMFORMComponent } from './custom-form.component';

describe('CUSTOMFORMComponent', () => {
  let component: CUSTOMFORMComponent;
  let fixture: ComponentFixture<CUSTOMFORMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CUSTOMFORMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CUSTOMFORMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
