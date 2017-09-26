/**
 * Class representing a <%= name %> objects.
 * @class
 * @implements <%= interface %>
 * @classdesc This is a description of the MyClass class.
 *
 <% properties.forEach( function(property){ %> * @property {<%= property.type %>} <%= property.name %> - <%= property.description %>
 <% } ); %>*
 * @author <%- author %>
 * @copyright <%- copyright %>
 */

import <%= interface %> from "../interfaces/<%= interface.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "") %>.ts";

class <%= name %> implements <%= interface %> {
<% properties.forEach( function(property){ %>
    /** <%= property.description %> */
    <%= property.name %>:<%= property.type %> = null;
<% } ); %>
}
