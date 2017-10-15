import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor(private sanitizer: DomSanitizer) {
  }

  widgets = [
    {_id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO'},
    {_id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
    {
      _id: '345', widgetType: 'IMAGE', pageId: '321', width: '100%',
      url: 'http://lorempixel.com/1200/600/'
    },
    {_id: '456', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>'},
    {_id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
    {
      _id: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%',
      url: 'https://youtu.be/AM2Ivdi9c4E'
    },
    {_id: '789', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>'}
  ];

  api = {
    'createWidget': this.createWidget,
    'findWidgetByPageId': this.findWidgetsByPageId,
    'findWidgetById': this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget
  };

  createWidget(pageId: string, widget: any) {
    widget._id = Math.random().toString();
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }

  findWidgetsByPageId(pageId: string) {
    const wdgts = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        wdgts.push(this.widgets[x]);
      }
    }
    return wdgts;
  }

  findWidgetById(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        return this.widgets[x];
      }
    }
  }

  updateWidget(widgetId: string, widget: any) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets[x] = widget;
      }
    }
  }

  deleteWidget(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets.splice(x);
      }
    }
  }
}
