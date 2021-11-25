import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

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
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @ViewChild('header', { read: ElementRef, static: true }) header!: ElementRef;
  @ViewChild('footer', { read: ElementRef, static: true }) footer!: ElementRef;

  public drawerOpen: boolean = false;
  public hasHeader: boolean = false;
  public hasFooter: boolean = false;

  ngOnInit(): void {
    this.hasHeader = this.header.nativeElement.hasChildNodes();
    this.hasFooter = this.footer.nativeElement.hasChildNodes();
  }
}
