import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [MessagesComponent],
  exports: [MessagesComponent, CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, NgZorroAntdModule],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class SharedModule { }