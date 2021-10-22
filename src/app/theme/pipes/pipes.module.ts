import {NumberForPipe} from './numberFor/numberFor.pipe';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppPicturePipe} from './appPicture/appPicture.pipe';
import {ProfilePicturePipe} from './profilePicture/profilePicture.pipe';
import {MailSearchPipe} from './search/mail-search.pipe';
import {SearchPipe} from './search/search.pipe';
import {TruncatePipe} from './truncate/truncate.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppPicturePipe,
    ProfilePicturePipe,
    MailSearchPipe,
    SearchPipe,
    NumberForPipe,
    TruncatePipe
  ],
  exports: [
    AppPicturePipe,
    ProfilePicturePipe,
    MailSearchPipe,
    NumberForPipe,
    TruncatePipe,
    SearchPipe
  ]
})
export class PipesModule {
}
