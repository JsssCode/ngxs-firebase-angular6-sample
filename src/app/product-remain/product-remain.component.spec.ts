import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRemainComponent } from './product-remain.component';

describe('ProductRemainComponent', () => {
  let component: ProductRemainComponent;
  let fixture: ComponentFixture<ProductRemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRemainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
