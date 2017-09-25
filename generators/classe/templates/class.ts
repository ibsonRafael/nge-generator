/**
 * Class representing a <%= name %> objects.
 * @class
 * @implements <%= interface %>
 * @classdesc This is a description of the MyClass class.
 * <% properties.forEach( function(property){ %>
 * @property {<%= property.type %>} <%= property.name %> - <%= property.description %>
 <% } ); %>*
 * @author <%- author %>
 * @copyright <%- copyright %>
 */
class <%= name %> implements <%= interface %> {
<% properties.forEach( function(property){ %>
    /** <%= property.description %> */
    <%= property.name %>:<%= property.type %>,
<% } ); %>
}
