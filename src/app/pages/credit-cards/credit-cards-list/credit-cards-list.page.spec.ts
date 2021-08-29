import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreditCardsListPage } from './credit-cards-list.page';

describe('CreditCardsListPage', () => {
  let component: CreditCardsListPage;
  let fixture: ComponentFixture<CreditCardsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreditCardsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
