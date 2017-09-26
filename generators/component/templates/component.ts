/**
 * <%- name %> component classe to manage those templates view—inside a class. The class interacts with the view through an API of properties and methods...
 *
 * @memberof ???ModuleName???
 * @exports <%- name %>Component
 *
<% services.forEach( function(srv){ %> * @property {<%= srv %>} <%= srv.replace(/\.?([A-Z])/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "") %> - <%= srv %> Injected by dependency injection.
<% } ); %><% classes.forEach( function(cls){ %> * @property {<%= cls %>} <%= cls.replace(/\.?([A-Z])/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "") %> - <%= cls %> object;
<% } ); %> *
 * @version 1.2.3
 * @since 0.0.0
 *
 * @author <%- author %>
 * @copyright <%- copyright %>
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
<% if (hasForm) { %>import {NgForm} from '@angular/forms';<% } %>

<% interfaces.forEach( function(inter){ %>import {<%- inter %>} from "../../interfaces/<%- inter.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>";
<% } ); %>
<% classes.forEach( function(cls){ %>import {<%- cls %>} from "../<%- cls.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>";
<% } ); %>

@Component({
    selector: 'app-<%= name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>',
    templateUrl: './<%= name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>.component.html',
    styleUrls: [ './<%= name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>.component.css']
})
export class <%= name %>Component implements OnInit, OnDestroy {

<% classes.forEach( function(cls){ %>    public <%- cls.replace(/\.?([A-Z])/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "") %> = null;
<% } ); %>

    /** @constructs <%- name %> */
    constructor(
<% services.forEach( function(srv){ %>        protected <%= srv.replace(/\.?([A-Z])/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "") %>:<%= srv %>Service,
<% } ); %>
        private router: Router,
        private route: ActivatedRoute
    ) { }


    /**
     * Initialize the <%= name.toLowerCase() %> component after Angular first displays the data-bound properties and sets the <%= name.toLowerCase() %> 's input properties.
     */
    ngOnInit( ) {
        this.route.queryParams.subscribe(queryParams => {
            console.log(queryParams);
        });

        /** @todo */
    }

<% methods.forEach( function(mth){ %>
    /**
     * Description of method...
     * @since 0.0.0
     * <% if (hasForm) { %>
     * @param form {NgForm} - Agular formulary abstraction <% } %>
     *
     * @returns
     */
    <%- mth.operationId %> (<% if (hasForm) { %>form:NgForm<% } %>) {
        <% if (hasForm) { %>
            if( form.valid ) {
<% classes.forEach( function(cls){ %>                this.<%- cls.replace(/\.?([A-Z])/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "") %> = {};
<% } ); %>
            }
        <% } %>

        /** @todo Implements <%- mth.operationId %> method body... */

        this.router.navigate(['/somewhere/']);
    }
<% } ); %>

    /**
     * Cleanup just before destroys the <%= name.toLowerCase() %> component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
     */
    ngOnDestroy( ) {
        /** @todo */
    }

}
