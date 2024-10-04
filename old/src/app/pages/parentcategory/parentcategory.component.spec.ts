import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcategoryComponent } from './parentcategory.component';

describe('ParentcategoryComponent', () => {
  let component: ParentcategoryComponent;
  let fixture: ComponentFixture<ParentcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
