/**
 * Interface for classes that represent a <%= name %>.
 * @interface <%= name %>
 <% properties.forEach( function(property){ %>
 * @property {<%= property.type %>} <%= property.name %> - <%= property.description %>
 <% } ); %>
 * @author <%= author %>
 * @copyright
 */
interface <%- name %> {

}
//I<%= name %>.prototype.attr = new Date(0);
//I<%= name %>['attr'] = new Date(0);
