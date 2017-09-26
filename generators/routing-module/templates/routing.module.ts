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
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<% components.forEach( function(cp){ %>import { <%- cp.name  %>Component } from "./<%= cp.name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>/<%= cp.name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>.component";
<% } ); %>

const <%= module.name %>Routes: Routes = [
<% components.forEach( function(cp){ %>    {path:'somewhere', component:<%- cp.name  %>Component },
<% } ); %>];


@NgModule({
    imports: [
        RouterModule.forChild( <%= module.name %>Routes )
    ],
    exports: [
        RouterModule
    ]
})

export class <%= module.ucfname %>RoutingModule { }