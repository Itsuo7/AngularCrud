import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>contact-form works!</p>`,
  styleUrl: './contact-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent { }
