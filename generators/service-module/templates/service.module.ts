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

<% services.forEach( function(item){ %>import { <%- item.name  %>Service } from "./services/<%= item.name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>.service";
<% } ); %>

@NgModule({

    imports: [
        CommonModule
    ],

    declarations: [],

    providers: [
<% services.forEach( function(svr){ %>        <%- svr.name  %>Service,
<% } ); %>    ],

    exports:[]

})

export class <%= module.ucfname %>ServiceModule { }