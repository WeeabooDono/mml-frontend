import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable()
export class AppTitleStrategyService extends TitleStrategy {

  constructor(private title: Title) {
    super();
  }

  public updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title) {
      this.title.setTitle(`MyMangaList - ${ title }`);
    }
  }
}
