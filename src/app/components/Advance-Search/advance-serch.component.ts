import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-advance-serch',
  templateUrl: './advance-serch.component.html',
  styleUrls: ['./advance-serch.component.css']
})
export class AdvanceSerchComponent implements OnInit {

  constructor() { }
  @ViewChild('search') searchElement: ElementRef;
  SearchDialog: boolean = true;
  @Output() OnSearchResult: EventEmitter<any> = new EventEmitter();
  @Output() OnCloseDialog: EventEmitter<any> = new EventEmitter();

  SearchValue: FormGroup = new FormGroup({
    BankAccountNumber: new FormControl('', Validators.required),
  });
  ngOnInit() {
    this.SearchValue.controls['BankAccountNumber'].reset(null);
    
  }
  ngAfterViewInit() {
    debugger
    this.searchElement.nativeElement.focus();
  }
  SearchCustomer() {

    let parseLocalStorage = JSON.parse(localStorage.getItem('CustomerList'));
    let searchResult = parseLocalStorage.filter((x) => {
      return x.BankAccountNumber == this.SearchValue.controls['BankAccountNumber'].value;
    });
    this.closeDialog();
    this.OnSearchResult.emit(searchResult);

  }

  closeDialog() {
    this.OnCloseDialog.emit();
  }
  
}
