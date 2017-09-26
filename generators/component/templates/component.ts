/**
 * <%- name %> component classe to manage those templates view—inside a class. The class interacts with the view through an API of properties and methods...
 *
 * @memberof ???ModuleName???
 * @exports <%- name %>Component
 *
 <% services.forEach( function(srv){ %> * @property {<%= srv %>} <%= srv.toLowerCase() %> - <%= srv %> Injected by dependency injection.
<% } ); %> *
 * @version 1.2.3
 * @since 0.0.0
 *
 * @author <%- author %>
 * @copyright <%- copyright %>
 */

import { Component, OnInit, OnDestroy } from '@angular/core';

<% interfaces.forEach( function(inter){ %>import {<%- inter %>} from "../../interfaces/<%- inter.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>.ts";
<% } ); %>
<% classes.forEach( function(cls){ %>import {<%- cls %>} from "../<%- cls.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>.ts";
<% } ); %>

@Component({
    selector: 'app-<%= name.toLowerCase() %>',
    templateUrl: './<%= name.toLowerCase() %>.component.html',
    styleUrls: ['./<%= name.toLowerCase() %>.component.css']
})
export class <%= name %>Component implements OnInit, OnDestroy {

    /** @constructs <%- name %> */
    constructor(
<% services.forEach( function(srv){ %>        protected <%= srv.toLowerCase() %>: <%= srv %>,
<% } ); %>) { }


    /**
     * Initialize the <%= name.toLowerCase() %> component after Angular first displays the data-bound properties and sets the <%= name.toLowerCase() %> 's input properties.
     */
    ngOnInit( ) {
        /** @todo */
    }

<% methods.forEach( function(mth){ %>
    /**
     * Description of method...
     * @since 0.0.0
     *
     * @param pName {pType} - Description
     *
     * @returns
     */
    <%- mth.operationId %> () {
        /** @todo Implements <%- mth.operationId %> method body... */
    }
<% } ); %>

    /**
     * Cleanup just before destroys the <%= name.toLowerCase() %> component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
     */
    ngOnDestroy( ) {
        /** @todo */
    }

}
