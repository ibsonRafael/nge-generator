/**
 * <%= module.ucfname %> module.
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

<% components.forEach( function(cp){ %>import { <%- cp.name  %>Component } from "./<%= cp.name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>/<%= cp.name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>.component";
<% } ); %>

import { <%= module.ucfname %>ServiceModule }  from "./<%= module.name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>-service.module";
import { <%= module.ucfname %>RoutingModule }  from "./<%= module.name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>-routing.module";

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        <%= module.ucfname %>RoutingModule
    ],

    declarations: [
<% components.forEach( function(cp){ %>        <%- cp.name  %>Component,
<% } ); %>    ],

    providers: [],

    exports:[
<% components.forEach( function(cp){ %>        <%- cp.name  %>Component,
<% } ); %>    ]

})

export class <%= module.ucfname %>Module { }