//https://github.com/kekeh/mydatepicker
import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { NgSemanticModule } from "ng-semantic";
import {DatePickerComponent} from 'ng2-date-picker';
import {IMyDpOptions} from 'mydatepicker/src/my-date-picker';

// We are going to be making a call to an external API and we’ll use the Angular HTTP library to accomplish this. Here we are importing the API’s we’ll need to work with.
import {Http, Response, Request, RequestMethod} from '@angular/http';

import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder, NG_VALIDATORS
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
    ngOnInit() {
      this.createFormControls();
      this.createForm();
    }
    
    @ViewChild('dayPicker') datePicker: DatePickerComponent;
    @ViewChild('f') form: any;
     pattern="/^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/"

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
      dateFormat: 'dd-mm-yyyy',
      inline: false,
      disableSince: {year: this.year, month: this.month, day: this.day}
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

public formModel: FormModel = {};

    myform: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    phone: FormControl;
    gender: FormControl;
    maritalstatus: FormControl;
    gotra: FormControl;
    dob: FormControl;
    birthplace: FormControl;
    timeofbirth: FormControl;
    email: FormControl; 
    password:  FormControl;
    confirmPassword:  FormControl;
    height:  FormControl;
    weight:  FormControl;
    incomerange:  FormControl;
    smokestatus:  FormControl;
    dietstatus:  FormControl;
    workstatus:  FormControl;
    drinkstatus:  FormControl;
    religion:  FormControl;
    mothertounge:  FormControl;
    rashi:  FormControl;
    education:  FormControl;
    profession:  FormControl;
    address:  FormControl;
    country:  FormControl;
    city:  FormControl;
    place:  FormControl;
    zip:  FormControl;
    about:  FormControl;
    mySubCaste:  FormControl;

  constructor(private router: Router, private formBuilder: FormBuilder) {
/*
     this.myform = formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    })
  */ }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.required);
    this.gender = new FormControl('', Validators.required);
    this.maritalstatus = new FormControl('', Validators.required);
    this.gotra = new FormControl('', Validators.required);
   // this.dob = new FormControl('', Validators.required);
    this.birthplace = new FormControl('', Validators.required);
    //this.timeofbirth = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.confirmPassword = new FormControl('', Validators.required);
    this.height= new FormControl('', Validators.required);
    this.maritalstatus= new FormControl('', Validators.required);
    this.phone= new FormControl('', Validators.required);
    this.birthplace= new FormControl('', Validators.required);
    this.height= new FormControl('', Validators.required);
    this.weight= new FormControl('', Validators.required);
    this.incomerange= new FormControl('', Validators.required);
    this.smokestatus= new FormControl('', Validators.required);
    this.dietstatus= new FormControl('', Validators.required);
    this.workstatus= new FormControl('', Validators.required);
    this.drinkstatus= new FormControl('', Validators.required);
    this.religion= new FormControl('', Validators.required);
    this.mothertounge= new FormControl('', Validators.required);
    this.rashi= new FormControl('', Validators.required);
    this.education= new FormControl('', Validators.required);
    this.profession= new FormControl('', Validators.required);
    this.profession= new FormControl('', Validators.required);
    this.address= new FormControl('', Validators.required);
    this.country= new FormControl('', Validators.required);
    this.city= new FormControl('', Validators.required);
    this.place= new FormControl('', Validators.required);
    this.zip= new FormControl('', Validators.required);
    this.about= new FormControl('', Validators.required);
    this.email= new FormControl('', Validators.required);
    this.password= new FormControl('', Validators.required);
    this.confirmPassword= new FormControl('', Validators.required);
    this.mySubCaste= new FormControl('', Validators.required);
  }

  createForm() {
     this.myform = new FormGroup({
        firstName: this.firstName,
        incomerange: this.incomerange,
        lastName: this.lastName,
        phone: this.phone,
        gender: this.gender,
        maritalstatus:  this.maritalstatus,
        gotra: this.gotra,
      //  dob: this.dob,
        birthplace: this.birthplace,
        //timeofbirth: this.timeofbirth,
        email: this.email,
        password: this.password ,
        confirmPassword: this.confirmPassword,
        height: this.height,
        weight: this.weight,
        smokestatus:this.smokestatus,
        dietstatus:this.dietstatus,
        workstatus:this.workstatus,
        drinkstatus:this.drinkstatus,
        religion:this.religion,
        mothertounge:this.mothertounge,
        rashi:this.rashi,
        education :this.education,
        profession :this.profession,
        address :this.address,
        country :this.country,
        city:this.city,
        place :this.place,
        zip :this.zip,
        about :this.about,
        mySubCaste: this.mySubCaste
    });
  }
  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
          return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
              return passwordConfirmationInput.setErrors({notEquivalent: true})
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
          }
        }

   onSubmit() {
      console.log("Form Submitted!" + this.myform);
    if (this.myform.valid) {
      console.log("Form Submitted!" + this.myform);
      this.router.navigate(['/RegistrationOTP']);
      this.myform.reset();
    }
  }
gotoLogin()
    {
      this.router.navigate(['/login']);
    }
}