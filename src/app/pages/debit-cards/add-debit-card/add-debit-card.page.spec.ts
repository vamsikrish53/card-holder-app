import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDebitCardPage } from './add-debit-card.page';

describe('AddDebitCardPage', () => {
  let component: AddDebitCardPage;
  let fixture: ComponentFixture<AddDebitCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDebitCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDebitCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
