import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>contact-details works!</p>`,
  styleUrl: './contact-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailsComponent { }
