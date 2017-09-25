/**
 * Class representing a <%= name %>.
 * @implements <%= interface %>
 *
 <% properties.forEach( function(property){ %>
 * @property {<%= property.type %>} <%= property.name %> - <%= property.description %>
 <% } ); %>
 *
 * @author <%- author %>
 * @copyright
 */
class <%= name %> implements <%= interface %> {

}
