import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AppRoutingModule } from './app-routing.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AdvanceSerchComponent } from './components/Advance-Search/advance-serch.component';
import { AddEditCustomerComponent } from './components/add-edit-customer/add-edit-customer.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MainLayoutComponent } from './components/Main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    AdvanceSerchComponent,
    AddEditCustomerComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    ToastModule,
    InputNumberModule,
    ConfirmDialogModule,
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
