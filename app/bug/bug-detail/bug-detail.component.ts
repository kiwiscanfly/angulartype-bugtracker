import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { forbiddenStringValidator } from '../../shared/validation/forbidden-string.validator';

import { BugService } from '../service/bug.service';

import { Bug } from '../model/bug';

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
	@Input() currentBug: Bug = null;

	constructor(private formBuilder: FormBuilder, private bugService: BugService) {
		this.cleanBug();
	}

	ngOnInit() {
		this.configureForm();
	}

	configureForm(bug?: Bug) {

		if (bug) {
			this.currentBug = bug;
		}

		this.bugForm = this.formBuilder.group({
			title: [this.currentBug.title, [Validators.required, forbiddenStringValidator(this.forbiddenStrings)]],
			status: [this.currentBug.status, Validators.required],
			severity: [this.currentBug.severity, Validators.required],
			description: [this.currentBug.description, [Validators.required, forbiddenStringValidator(this.forbiddenStrings)]],
		});
	}

	submitForm() {
		this.addBug();
		jQuery('#'+this.modalId).modal('hide');
		this.clearForm();
	}

	addBug() {
		this.currentBug.title = this.bugForm.value['title'];
		this.currentBug.status = this.bugForm.value['status'];
		this.currentBug.severity = this.bugForm.value['severity'];
		this.currentBug.description = this.bugForm.value['description'];
		this.bugService.addBug(this.currentBug);
	}

	clearForm() {
		this.bugForm.reset({title: null, status: 1, severity: 4, description: null});
		this.cleanBug();
	}

	cleanBug() {
		this.currentBug = new Bug(
			null, // id
			null, // title
			1, // status
			4, // severity
			null, // description
			null, // createdBy
			null, // createdDate
			null // updateBy
		);
	}
}