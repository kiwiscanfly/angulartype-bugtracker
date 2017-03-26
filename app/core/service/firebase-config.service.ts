import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
require('firebase/auth')
require('firebase/database');

import { FIREBASE_CONFIG } from '../constant/constants';

@Injectable()
export class FirebaseConfigService {

	private _database: firebase.database.Database;
	private _fb_app: firebase.app.App;

	constructor() {
		this.configureApp();
		this.configureDatabase();
	}

	public get database() {
		return this._database;
	}

	configureApp() {
		this._fb_app = firebase.initializeApp(FIREBASE_CONFIG);
	}

	configureDatabase() {
		this._database = this._fb_app.database();
	}
}