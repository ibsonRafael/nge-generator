/**
 * <%= name %> module.
 * @version 1.2.3
 * @since 0.0.0
 * @module <%= name %>
 * @see module:<%= name %>
 *
 * @author <%- author %>
 * @copyright <%- copyright %>
 */
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from "@angular/forms";

<% components.forEach( function(cp){ %>import {<%- cp.name  %>} from "./<%- cp.name.toLowerCase() %>/<%- cp.toLowerCase() %>.component.ts";
<% } ); %>

import { <%= name %>Routing }  from "./<%= name.toLoerCase() %>-routing.module.ts";

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        <%= name %>Routing
    ],

    declarations: [
        <% components.forEach( function(cp){ %><%- cp.name  %>,
<% } ); %>
    ],

    providers: [],

    exports:[
        <% components.forEach( function(cp){ %><%- cp.name  %>,
<% } ); %>
    ]

})

export class <%= name %>Module { }