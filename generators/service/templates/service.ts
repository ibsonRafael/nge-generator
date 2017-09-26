/**
 * <%- name %> service.  This Service is aligned wit SRP, It should do something specific and do it well.
 * @memberof ???ModuleName???
 * @exports <%- name %>Service
 * @version 1.2.3
 * @since 0.0.0
 *
 * @author <%- author %>
 * @copyright <%- copyright %>
 */
import { Injectable } from '@angular/core';

<% interfaces.forEach( function(inter){ %>import {inter} from "../../interfaces/<%- inter.toLowerCase() %>.ts";
<% } ); %>
<% classes.forEach( function(cls){ %>import {cls} from "../<%- cls.toLowerCase() %>.ts";
<% } ); %>

@Injectable()
export class <%- name %>Service {

    /** @constructs <%- name %> */
    constructor() { }

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

}