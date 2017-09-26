/**
 * <%= module.name %> module.
 * @version 1.2.3
 * @since 0.0.0
 * @module <%= module.name %>
 * @see module:<%= module.name %>
 *
 * @author <%- author %>
 * @copyright <%- copyright %>
 */
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from "@angular/forms";

<% components.forEach( function(cp){ %>import { <%- cp.name  %> } from "./<%- cp.name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^[-]/, "") %>/<%- cp.name.replace(/\\.?([A-Z])/g, function (x,y){return \"-\" + y.toLowerCase()}).replace(/^[-]/, \"\") %>.component.ts";
    <% } ); %>

import { <%= module.ucfname %>Routing }  from "./<%= module.name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^[-]/, "") %>-routing.module.ts";

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        <%= module.ucfname %>Routing
    ],

    declarations: [
<% components.forEach( function(cp){ %>        <%- cp.name  %>,
<% } ); %>
],

providers: [],

    exports:[
<% components.forEach( function(cp){ %>        <%- cp.name  %>,
<% } ); %>
]

})

export class <%= module.ucfname %>Module { }