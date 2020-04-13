import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '../../user'

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {

  @Input()
  users!: User[];
}
