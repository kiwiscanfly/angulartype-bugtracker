import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { forbiddenStringValidator } from '../../shared/validation/forbidden-string.validator';

import { BugService } from '../service/bug.service';

import { Bug } from '../model/bug';
import { STATUS, SEVERITY } from '../../shared/constant/constants';

@Component({
	moduleId: module.id,
	selector: 'bug-detail',
	templateUrl: 'bug-detail.component.html',
	styleUrls: [ 'bug-detail.component.css' ]
})
export class BugDetailComponent implements OnInit {
	private forbiddenStrings = /(shit |fuck |cunt )/;
	private modalId = "bugModal"
	private bugForm: FormGroup;
	private statuses = STATUS;
	private severities = SEVERITY;
	private statusArr: string[] = [];
	private severityArr: string[] = [];
	
	@Input() currentBug: Bug = null;

	constructor(private formBuilder: FormBuilder, private bugService: BugService) {
		this.cleanBug();
	}

	ngOnInit() {
		this.statusArr = Object.keys(this.statuses).filter(Number);
		this.severityArr = Object.keys(this.severities).filter(Number);

		this.configureForm();
	}

	configureForm(bug?: Bug) {

		if (bug) {
			this.currentBug = new Bug(
				bug.id,
				bug.title,
				bug.status,
				bug.severity,
				bug.description,
				bug.createdBy,
				bug.createdDate,
				bug.updatedBy,
				bug.updatedDate
			);
		}

		this.bugForm = this.formBuilder.group({
			title: [this.currentBug.title, [Validators.required, forbiddenStringValidator(this.forbiddenStrings)]],
			status: [this.currentBug.status, Validators.required],
			severity: [this.currentBug.severity, Validators.required],
			description: [this.currentBug.description, [Validators.required, forbiddenStringValidator(this.forbiddenStrings)]],
		});
	}

	submitForm() {
		this.currentBug.title = this.bugForm.value['title'];
		this.currentBug.status = this.bugForm.value['status'];
		this.currentBug.severity = this.bugForm.value['severity'];
		this.currentBug.description = this.bugForm.value['description'];

		if ( this.currentBug.id == null ) {
			this.bugService.addBug(this.currentBug);
		} else {
			this.bugService.updateBug(this.currentBug);
		}
		
		jQuery('#'+this.modalId).modal('hide');
		this.clearForm();
	}

	clearForm() {
		this.bugForm.reset({title: null, status: this.statuses.Logged, severity: this.severities.Medium, description: null});
		this.cleanBug();
	}

	cleanBug() {
		this.currentBug = new Bug(
			null, // id
			null, // title
			this.statuses.Logged, // status
			this.severities.Medium, // severity
			null, // description
			null, // createdBy
			null, // createdDate
			null // updateBy
		);
	}
}