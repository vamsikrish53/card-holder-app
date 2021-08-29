import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DebitCardsListPage } from './debit-cards-list.page';

describe('DebitCardsListPage', () => {
  let component: DebitCardsListPage;
  let fixture: ComponentFixture<DebitCardsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitCardsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DebitCardsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
