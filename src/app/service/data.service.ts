import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	title: string = "data from service";
	currentNameSubject = new BehaviorSubject(this.title);

	constructor() {}

	setName(name: string) {
  		this.currentNameSubject.next(name);
	}

	getName(): string {
  		return this.currentNameSubject.getValue();
	}

    callHttp(method: string, url: string) {
    	var defer = $q.defer();
        var request = {
            method: method,
            url: url
        };
        var successFn = function ( res ) {
            defer.resolve(res);
        };
        var errorFn = function ( err ) { defer.reject(err); };
        $http( request ).then( successFn, errorFn );
        return defer.promise;
    }

}
