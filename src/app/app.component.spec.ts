import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent} from './app.component';
import { RouterTestingModule} from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core'; 
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

describe("App Component", ()=>{
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [RouterTestingModule.withRoutes([])],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })
    it(
        'should have a router outlet',
        async(() => {
          const element = fixture.debugElement.query(By.directive(RouterOutlet));
          expect(element).not.toBeNull();
        })
      );
      it('should have div with class "main-container"',
        async(() => {            
        const element = fixture.debugElement.query(By.css('.main-container'));
          expect(element).not.toBeNull();
        })
      );
      
      
})