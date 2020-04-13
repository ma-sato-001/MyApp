import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '../../user'

@Component({
  selector: 'user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {

  @Input()
  user!: User;
}
