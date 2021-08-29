import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AboutTabPage } from './about-tab.page';

describe('Tab2Page', () => {
  let component: AboutTabPage;
  let fixture: ComponentFixture<AboutTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
