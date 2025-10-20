import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalInfo, ContactMessage } from '../../models/portfolio.model';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  personalInfo$!: Observable<PersonalInfo>;
  isSubmitting = false;
  isSubmitted = false;
  isVisible = false;

  constructor(
    private fb: FormBuilder,
    private portfolioService: PortfolioDataService
  ) {}

  ngOnInit(): void {
    this.personalInfo$ = this.portfolioService.getPersonalInfo();

    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Trigger animation after component loads
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      const formData: ContactMessage = this.contactForm.value;

      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.contactForm.reset();

        // Reset success message after 5 seconds
        setTimeout(() => {
          this.isSubmitted = false;
        }, 5000);
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${this.capitalize(fieldName)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        const minLength = field.errors['minlength'].requiredLength;
        return `${this.capitalize(fieldName)} must be at least ${minLength} characters`;
      }
    }
    return '';
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  openEmailClient(email: string): void {
    window.location.href = `mailto:${email}`;
  }

  openLinkedIn(url: string): void {
    window.open(url, '_blank');
  }
}

