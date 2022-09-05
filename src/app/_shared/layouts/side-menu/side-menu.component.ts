import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu, Menus } from '@shared/navigation/menu.model';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    MatListModule,
    CommonModule,
  ],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements OnInit {

  public menus: Menu[] = Menus;
  public expanded = true;

  constructor(private readonly cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  public toggle(): void {
    this.expanded = !this.expanded;
    this.cd.detectChanges();
  }
}
