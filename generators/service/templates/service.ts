/**
 * <%- name %> service.  This Service is aligned wit SRP, It should do something specific and do it well.
 * @memberof ???ModuleName???
 * @exports <%- name %>Service
 *
 * @author <%- author %>
 * @copyright <%- copyright %>
 */
import { Injectable } from '@angular/core';

<% interfaces.forEach( function(inter){ %>import {inter} from "../../interfaces/<%- inter.toLowerCase() %>.ts\n";<% } ); %>
<% classes.forEach( function(cls){ %>import {cls} from "../<%- cls.toLowerCase() %>.ts\n";<% } ); %>

@Injectable()
export class <%- name %>Service {

    /** @constructs <%- name %> */
    constructor() { }

}