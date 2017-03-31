import  { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusPipe } from './pipe/status.pipe';
import { SeverityPipe } from './pipe/severity.pipe';

@NgModule({
	imports: [ CommonModule ],
	declarations: [
		SeverityPipe,
		StatusPipe
	],
	exports: [
		CommonModule,
		SeverityPipe,
		StatusPipe
	]
})
export class SharedModule {

}