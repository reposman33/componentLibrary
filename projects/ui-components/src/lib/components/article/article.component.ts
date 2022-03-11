import { Component, Input, OnInit } from '@angular/core';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
@Component({
  selector: 'lib-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() subTitle: string = '';
  @Input() title: string = '';
  @Input() toggle: boolean = false;

  public drawerOpen: boolean = false;

  ngOnInit(): void {}
}
