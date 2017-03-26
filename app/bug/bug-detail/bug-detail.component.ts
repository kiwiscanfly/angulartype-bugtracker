import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenStringValidator } from '../../shared/validation/forbidden-string.validator';

@Component({
	moduleId: module.id,
	selector: 'bug-detail',
	templateUrl: 'bug-detail.component.html',
	styleUrls: [ 'bug-detail.component.css' ]
})
export class BugDetailComponent implements OnInit {
	private modalId = "bugModal"
	private bugForm: FormGroup;
	private forbiddenStrings = /(shit |fuck |cunt )/;

	ngOnInit() {
		this.configureForm()
	}

	configureForm() {
		this.bugForm = new FormGroup({
			title: new FormControl(null, [Validators.required, forbiddenStringValidator(this.forbiddenStrings) ]),
			status: new FormControl(1, Validators.required),
			severity: new FormControl(4, Validators.required),
			description: new FormControl(null, Validators.required)
		});
	}

	submitForm() {
		console.log(this.bugForm)
		alert(this.bugForm.valid)
		jQuery('#'+this.modalId).modal('hide')
	}
}