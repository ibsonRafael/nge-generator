/**
 * <%- name %> service.
 * @module my/shirt
 * @memberof ???ModuleName???
 * @exports <%- name %>
 *
 * @author <%- author %>
 * @copyright <%- copyright %>
 */
import { Injectable } from '@angular/core';

<% interfaces.forEach( function(inter){ %>import {inter} from "../../interfaces/" + inter.toLowerCase() + ".ts\n";<% } ); %>
<% classes.forEach( function(cls){ %>import {cls} from "../" + cls.toLowerCase() + ".ts\n";<% } ); %>

@Injectable()
export class <%- name %>Service {
    constructor() { }
}