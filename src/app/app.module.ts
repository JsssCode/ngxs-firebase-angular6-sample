import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ProductState } from './shared';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, 
  MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './shared/services/product.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule, AngularFireStorage} from 'angularfire2/storage';
import { ReactiveFormsModule }   from '@angular/forms';
import { ProductImageComponent } from './product-image/product-image.component';
import { SafePipe } from './shared';
import { ProductRemainComponent } from './product-remain/product-remain.component';
​
@Injectable()
export class MyErrorHandler implements ErrorHandler {
  handleError(error: any) {
    console.log('ERROR! ', error);
    // Make sure to rethrow the error so Angular can pick it up
    throw error;
  }
}
​

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ProductListComponent,
    ProductComponent,
    ProductImageComponent,
    SafePipe,
    ProductRemainComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgxsModule.forRoot([
      ProductState
    ]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatCardModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  providers: [ProductService, AngularFirestore, AngularFireStorage,
    {
      provide: ErrorHandler, 
      useClass: MyErrorHandler
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
