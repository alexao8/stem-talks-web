import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  contactForm: FormGroup;

  constructor() {
    // Initialize the contact form with form controls
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  // Submit function
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
    } else {
      console.log('Form is not valid!');
    }
  }
}