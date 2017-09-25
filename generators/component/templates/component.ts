/**
 * <%- name %> component classe to manage those templates view—inside a class. The class interacts with the view through an API of properties and methods...
 * @memberof ???ModuleName???
 * @exports <%- name %>Component
 *
 * @author <%- author %>
 * @copyright <%- copyright %>
 */

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-<%= name.toLowerCase() %>',
    templateUrl: './<%= name.toLowerCase() %>.component.html',
    styleUrls: ['./<%= name.toLowerCase() %>.component.css']
})
export class <%= name %>Component implements OnInit {

    /** @constructs <%- name %> */
    constructor( ) { }


    /**
     * Initialize the <%= name.toLowerCase() %> component after Angular first displays the data-bound properties and sets the <%= name.toLowerCase() %> 's input properties.
     */
    ngOnInit( ) {
        /** @todo */
    }


    /**
     * Cleanup just before destroys the <%= name.toLowerCase() %> component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
     */
    ngOnDestroy( ) {
        /** @todo */
    }
}
