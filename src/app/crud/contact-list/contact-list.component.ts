import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>contact-list works!</p>`,
  styleUrl: './contact-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListComponent { }
