import { TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AppService} from './app.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {HighlightDirective} from './highlight.directive';
import {UserModule} from './user/user.module';
import {HomeComponent} from './home/home.component';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let comp: AppComponent;
  let service: AppService;
  let router: Router ;

  const mockRouter = {
    navigate: jasmine.createSpy('navigate');
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HighlightDirective, HomeComponent],
      imports: [RouterTestingModule, HttpClientModule, UserModule],
      providers: [AppService, {provide: Router, useValue: mockRouter}]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.debugElement.componentInstance;
    service = TestBed.get(AppService) ;
    router =  TestBed.get(Router) ;
  });
  it('be defined', () => {
    expect(comp).toBeDefined();
  });

  it('be able to get data', () => {
    spyOn(service, 'getData').and.returnValue(Observable.of({message: 'success'})) ;
    //spyOn(console, 'log') ;
    comp.getData() ;
    expect(router.navigate).toHaveBeenCalled();
    expect(comp.data).toEqual({message: 'success'}) ;
  });

  it('be able to get error', () => {
    spyOn(service, 'getData').and.returnValue(Observable.throw({message: 'failure'})) ;
    spyOn(console, 'log') ;
    comp.getData() ;
    expect(console.log).toHaveBeenCalled();
    expect(comp.wrong).toEqual({message: 'failure'}) ;
  });
});

// async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));
//   it(`should have as title 'app'`, async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('app');
//   }));
//   it('should render title in a h1 tag', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
//   }));
// }) ;
