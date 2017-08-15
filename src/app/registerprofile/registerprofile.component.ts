//https://github.com/kekeh/mydatepicker
import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { NgSemanticModule } from "ng-semantic";
import {DatePickerComponent} from 'ng2-date-picker';
import {IMyDpOptions} from 'mydatepicker/src/my-date-picker';
//import { PasswordValidation } from './password-validation';

import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
 
export interface FormModel {
  captcha?: string;
}


@Component({
  selector: 'app-registerprofile',
  templateUrl: './registerprofile.component.html',
  styles: [`
      .error { color: crimson; }
      .success { color: green; }
  ` ]
})
export class RegisterprofileComponent implements OnInit {
 @ViewChild('dayPicker') datePicker: DatePickerComponent;
@ViewChild('f') form: any;
    open() {
        this.datePicker.api.open();
    }

    close() {
         this.datePicker.api.close();
    }
 
    date = new Date();
    year =  (this.date.getFullYear() - 18);
    month =  (this.date.getMonth() + 1);
    day =  (this.date.getDate());
    maxBirthDate = "Your birth date should be greater then: " +  (this.day+"-"+this.month+"-"+this.year);
    private maxdate: Object = { date: { year: this.year, month: this.month, day: this.day } };

    myDatePickerOptions: IMyDpOptions = {
      todayBtnTxt: 'Today',
      dateFormat: 'yyyy-mm-dd',
      firstDayOfWeek: 'mo',
      sunHighlight: true,
      inline: false,
      //disableDateRanges: { year: this.year, month: this.month, day: this.day },
      disableDateRanges: [{begin: {year: this.year, month: this.month, day: this.day}, end: {year: this.date.getFullYear(), month: this.date.getMonth() + 1, day: this.date.getDate()}}]
  };
    
  public alerts: any = [];
 error = "error";
 // minDate = new Date(2000, 0, 1);
  maxDate = new Date(2000, 0, 1);
  

  genderList = [
  
    {id:100, name:'Male'},
    {id:101, name:'Female'}
   ];

   maritalStatusList = [
    {id:200, name:'Single'},
    {id:201, name:'Divorced'},
    {id:202, name:'Other'}
   ];

      monthlyIncomeList = [
    {id:300, name:'0 - 1,00,000'},
    {id:301, name:'1,00,000 - 3,00,000'},
    {id:302, name:'3,00,000 - 5,00,000'},
    {id:303, name:'5,00,000 - 8,00,000'},
    {id:304, name:'8,00,000 - 10,00,000'},
    {id:305, name:'10,00,000 - 13,00,000'},
    {id:306, name:'13,00,000 - 20,00,000'}
   ];

 smokeStatusList = [
    {id:400, name:'Smoking'},
    {id:401, name:'Non-Smoking'}
   ];

 dietStatusList = [
    {id:500, name:'Veg'},
    {id:501, name:'Non-Veg'}
   ];

    workStatusList = [
    {id:600, name:'Working'},
    {id:601, name:'Non-Working'},
    {id:601, name:'Own Business'}
   ];

    drinkStatusList = [
       {id:1301, name:'Daily'},
    {id:1300, name:'Occational'},
    {id:1301, name:'Never'}
   ];

    religionStatusList = [
    {id:700, name:'Brahimin'}
   ];

    motherToungeList = [
    {id:800, name:'Hindu'}
   
   ];
   subCasteStatusList = [
    {id:900, name:'Joshi'},
    {id:901, name:'Pant'},
    {id:902, name:'Pandey'}
   
   ];
   rashiStatusList = [
     {id:1000, name:'Mesa / Mesh'},
    {id:1001, name:'Vrishabha / Vrushabh'},
    {id:1002, name:'Mithuna / Mithun'},
      {id:1000, name:'Karka'},
    {id:1001, name:'Simha / Sinh'},
    {id:1002, name:'Kanya'},
      {id:1000, name:'Tula'},
    {id:1001, name:'Vrischika / Vrushchik'},
    {id:1002, name:'Dhanu'},
      {id:1000, name:'Makar'},
    {id:1001, name:'Kumbha'},
    {id:1002, name:'Mina / Meen'}
   ];

    countryStatusList = [
    {id:1100, name:'India'}
   
   ];
   cityStatusList = [
    {id:1200, name:'Delhi'}
   
   ];
  //    invalidLogin: boolean; 
//  @ViewChild('f') form: any;
public formModel: FormModel = {};

 myform: FormGroup;
   firstName: FormControl;
    firstName1: FormControl;
   lastName: FormControl;
  phone: FormControl;
   dob: FormControl;
   birthplace: FormControl;
   timeofbirth: FormControl;
   gotra: FormControl;
   email: FormControl; 
   password:  FormControl;
   confirmPassword:  FormControl;
  //@ViewChild('f') form: any;

  constructor(private router: Router, private formBuilder: FormBuilder) {
/*
     this.myform = formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    })
  */ }

  
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
        this.firstName1 = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.required);
    this.dob = new FormControl('', Validators.required);
    this.birthplace = new FormControl('', Validators.required);
    this.timeofbirth = new FormControl('', Validators.required);
    this.gotra =  new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.confirmPassword = new FormControl('', Validators.required);
        
  }


//We then construct the myform model from the form controls we created previously and stored as properties on our component.
  createForm() {
     this.myform = new FormGroup({
        firstName: this.firstName,
      //   firstName1: this.firstName1,
        lastName: this.lastName,
        phone: this.phone,
        dob: this.dob,
        birthplace: this.birthplace,
        timeofbirth: this.timeofbirth,
        gotra: this.gotra,
        email: this.email,
        password: this.password ,
        confirmPassword: this.confirmPassword,

    });
  }
  
   onSubmit() {
        console.log("Form Submitted!" + this.myform);
    if (this.myform.valid) {
      console.log("Form Submitted!" + this.myform);
       this.router.navigate(['/RegistrationOTP']);
      //we cab call the rest api here..
      this.myform.reset();
    }
  }
gotoLogin()
    {
      this.router.navigate(['/login']);

    }
}
