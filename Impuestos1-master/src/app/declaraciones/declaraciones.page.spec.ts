import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeclaracionesPage } from './declaraciones.page';

describe('DeclaracionesPage', () => {
  let component: DeclaracionesPage;
  let fixture: ComponentFixture<DeclaracionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclaracionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeclaracionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
