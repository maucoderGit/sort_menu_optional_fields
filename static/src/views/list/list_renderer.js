/** @odoo-module **/
import { patch } from "@web/core/utils/patch";
import { ListRenderer } from "@web/views/list/list_renderer";

patch(ListRenderer.prototype, "sort_menu_optional_fields_sort_values", {
    setup(){
       this._super(...arguments);
       this._super.bind(this);
    },
    get getOptionalFields() {
        console.log(this.allColumns);

        return this.allColumns
            .filter((col) => col.optional)
            .map((col) => ({
                label: col.label,
                name: col.name,
                value: this.optionalActiveFields[col.name],
            }))
            .sort((a, b) => a.label.localeCompare(b.label));;
    },
});
