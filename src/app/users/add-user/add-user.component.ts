import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/adress.model';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm : FormGroup | any;
  constructor(private formBuilder : FormBuilder,
              private userService : UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.initUserFrom();
  }
  initUserFrom(){
    this.userForm = this.formBuilder.group({
      firstname: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      lastname: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control("", [Validators.required, Validators.minLength(5), Validators.email]),
      decription: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      dateBrith: this.formBuilder.control("", Validators.required),
      address: this.formBuilder.group({
        street: this.formBuilder.control("", Validators.required),
        city: this.formBuilder.control("", Validators.required),
        state: this.formBuilder.control("", Validators.required),
        zip: this.formBuilder.control("", Validators.required),
      }),
      aliases: this.formBuilder.array([])
    });

  }
  getAliases(): FormArray{
    return this.userForm.get("aliases") as FormArray;
  }
  addAliases(): void{
    this.getAliases().push(this.formBuilder.control("", Validators.required))
  }
  onSubmit() :void{
    const dataUser = this.userForm.value;
    const Addresse : string | any = new Address(dataUser.street,dataUser.city,dataUser.state,dataUser.zip);
    const alias = dataUser.aliases ? dataUser.aliases : [];
    const user = new User(
      dataUser.firstname,
      dataUser.lastname,
      dataUser.email,
      dataUser.description,
      dataUser.dateBrith,
      Addresse,
      alias);
      this.userService.addUser(user)
      this.router.navigate(["users"])
  }
}
