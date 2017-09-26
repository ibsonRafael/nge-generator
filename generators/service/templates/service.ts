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
import {Observable} from 'rxjs/Observable';
import {Http, RequestOptions, Headers} from "@angular/http";

import 'rxjs/Rx';

<% interfaces.forEach( function(inter){ %>import {inter} from "../../interfaces/<%= inter.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>.ts";
<% } ); %>
<% classes.forEach( function(cls){ %>import {cls} from "../<%= cls.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>.ts";
<% } ); %>

@Injectable()
export class <%- name %>Service {
    /**
     * Base Url to build a REST Api url
     * @type {string}
     */
    protected base_url: string = "http://localhost.dev";

    /**
     * Api sufix
     * @type {string}
     */
    protected api_sufix: string = '/api/v1/rest/';

    /** @constructs <%- name %> */
    constructor(
        protected http:Http
    ) { }

<% methods.forEach( function(mth){ %>
    /**
     * Description of method...
     * @since 0.0.0
     *
     * @param pName {pType} - Description
     *
     * @returns
     */
    <%- mth.operationId %>():Observable<<%=mth.returnType %>> {
        return this.http.<%=mth.http %>( this.getApiUrl('endpoint', '' )
            .map( response => response.json() )
            .catch( (error: any) => {
                this.handleError(error);
                return Observable.throw( new Error( error.status ) );
            });
        /** @todo Implements <%- mth.operationId %> method body... */
    }
<% } ); %>

    /**
     * Return REST url based on endpoint
     *
     * @param {string} endpoint
     *
     * @returns {string}
     */
    private getApiUrl(endpoint:string=''):string
    {
        return this.base_url + this.api_sufix + endpoint;
    }

    /**
     *
     * @param {Response} error
     *
     */
    public handleError(error: Response)
    {
        /** @todo Implements*/
    }

}