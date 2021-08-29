import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DashboardTabPage } from './dashboard-tab.page';

describe('Tab1Page', () => {
  let component: DashboardTabPage;
  let fixture: ComponentFixture<DashboardTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
