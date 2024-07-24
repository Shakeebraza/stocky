"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6289],{35393:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var a=s(74865),o=s.n(a);const i={metaInfo:{title:"Warehouse"},data:function(){return{isLoading:!0,SubmitProcessing:!1,serverParams:{columnFilters:{},sort:{field:"id",type:"desc"},page:1,perPage:10},selectedIds:[],totalRows:"",search:"",limit:"10",warehouses:[],editmode:!1,warehouse:{id:"",name:"",mobile:"",email:"",zip:"",country:"",city:""}}},computed:{columns:function(){return[{label:this.$t("Name"),field:"name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Phone"),field:"mobile",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Country"),field:"country",tdClass:"text-left",thClass:"text-left"},{label:this.$t("City"),field:"city",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Email"),field:"email",tdClass:"text-left",thClass:"text-left"},{label:this.$t("ZipCode"),field:"zip",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}},methods:{updateParams:function(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange:function(e){var t=e.currentPage;this.serverParams.page!==t&&(this.updateParams({page:t}),this.Get_Warehouses(t))},onPerPageChange:function(e){var t=e.currentPerPage;this.limit!==t&&(this.limit=t,this.updateParams({page:1,perPage:t}),this.Get_Warehouses(1))},selectionChanged:function(e){var t=this,s=e.selectedRows;this.selectedIds=[],s.forEach((function(e,s){t.selectedIds.push(e.id)}))},onSortChange:function(e){this.updateParams({sort:{type:e[0].type,field:e[0].field}}),this.Get_Warehouses(this.serverParams.page)},onSearch:function(e){this.search=e.searchTerm,this.Get_Warehouses(this.serverParams.page)},getValidationState:function(e){var t=e.dirty,s=e.validated,a=e.valid;return t||s?void 0===a?null:a:null},Submit_Warehouse:function(){var e=this;this.$refs.Create_Warehouse.validate().then((function(t){t?e.editmode?e.Update_Warehouse():e.Create_Warehouse():e.makeToast("danger",e.$t("Please_fill_the_form_correctly"),e.$t("Failed"))}))},makeToast:function(e,t,s){this.$root.$bvToast.toast(t,{title:s,variant:e,solid:!0})},New_Warehouse:function(){this.reset_Form(),this.editmode=!1,this.$bvModal.show("New_Warehouse")},Edit_Warehouse:function(e){this.Get_Warehouses(this.serverParams.page),this.reset_Form(),this.warehouse=e,this.editmode=!0,this.$bvModal.show("New_Warehouse")},Get_Warehouses:function(e){var t=this;o().start(),o().set(.1),axios.get("warehouses?page="+e+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(e){t.warehouses=e.data.warehouses,t.totalRows=e.data.totalRows,o().done(),t.isLoading=!1})).catch((function(e){o().done(),setTimeout((function(){t.isLoading=!1}),500)}))},Create_Warehouse:function(){var e=this;this.SubmitProcessing=!0,axios.post("warehouses",{name:this.warehouse.name,mobile:this.warehouse.mobile,email:this.warehouse.email,zip:this.warehouse.zip,country:this.warehouse.country,city:this.warehouse.city}).then((function(t){e.SubmitProcessing=!1,Fire.$emit("Event_Warehouse"),e.makeToast("success",e.$t("Create.TitleWarhouse"),e.$t("Success"))})).catch((function(t){e.SubmitProcessing=!1,e.makeToast("danger",e.$t("InvalidData"),e.$t("Failed"))}))},Update_Warehouse:function(){var e=this;this.SubmitProcessing=!0,axios.put("warehouses/"+this.warehouse.id,{name:this.warehouse.name,mobile:this.warehouse.mobile,email:this.warehouse.email,zip:this.warehouse.zip,country:this.warehouse.country,city:this.warehouse.city}).then((function(t){e.SubmitProcessing=!1,Fire.$emit("Event_Warehouse"),e.makeToast("success",e.$t("Update.TitleWarhouse"),e.$t("Success"))})).catch((function(t){e.SubmitProcessing=!1,e.makeToast("danger",e.$t("InvalidData"),e.$t("Failed"))}))},reset_Form:function(){this.warehouse={id:"",name:"",mobile:"",email:"",zip:"",country:"",city:""}},Remove_Warehouse:function(e){var t=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(s){s.value&&axios.delete("warehouses/"+e).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Delete.WarehouseDeleted"),"success"),Fire.$emit("Delete_Warehouse")})).catch((function(){t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")}))}))},delete_by_selected:function(){var e=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(t){t.value&&(o().start(),o().set(.1),axios.post("warehouses/delete/by_selection",{selectedIds:e.selectedIds}).then((function(){e.$swal(e.$t("Delete.Deleted"),e.$t("Delete.WarehouseDeleted"),"success"),Fire.$emit("Delete_Warehouse")})).catch((function(){setTimeout((function(){return o().done()}),500),e.$swal(e.$t("Delete.Failed"),e.$t("Delete.Therewassomethingwronge"),"warning")})))}))}},created:function(){var e=this;this.Get_Warehouses(1),Fire.$on("Event_Warehouse",(function(){setTimeout((function(){e.Get_Warehouses(e.serverParams.page),e.$bvModal.hide("New_Warehouse")}),500)})),Fire.$on("Delete_Warehouse",(function(){setTimeout((function(){e.Get_Warehouses(e.serverParams.page)}),500)}))}};const r=(0,s(51900).Z)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-content"},[t("breadcumb",{attrs:{page:e.$t("Warehouses"),folder:e.$t("Settings")}}),e._v(" "),e.isLoading?t("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):e._e(),e._v(" "),e.isLoading?e._e():t("b-card",{staticClass:"wrapper"},[t("vue-good-table",{attrs:{mode:"remote",columns:e.columns,totalRows:e.totalRows,rows:e.warehouses,"search-options":{enabled:!0,placeholder:e.$t("Search_this_table")},"select-options":{enabled:!0,clearSelectionText:""},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"table-hover tableOne vgt-table"},on:{"on-page-change":e.onPageChange,"on-per-page-change":e.onPerPageChange,"on-sort-change":e.onSortChange,"on-search":e.onSearch,"on-selected-rows-change":e.selectionChanged},scopedSlots:e._u([{key:"table-row",fn:function(s){return["actions"==s.column.field?t("span",[t("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Edit"},on:{click:function(t){return e.Edit_Warehouse(s.row)}}},[t("i",{staticClass:"i-Edit text-25 text-success"})]),e._v(" "),t("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Delete"},on:{click:function(t){return e.Remove_Warehouse(s.row.id)}}},[t("i",{staticClass:"i-Close-Window text-25 text-danger"})])]):e._e()]}}],null,!1,546015706)},[t("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[t("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(t){return e.delete_by_selected()}}},[e._v(e._s(e.$t("Del")))])]),e._v(" "),t("div",{staticClass:"mt-2 mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[t("b-button",{staticClass:"btn-rounded",attrs:{variant:"btn btn-primary btn-icon m-1"},on:{click:function(t){return e.New_Warehouse()}}},[t("i",{staticClass:"i-Add"}),e._v("\n          "+e._s(e.$t("Add"))+"\n        ")])],1)])],1),e._v(" "),t("validation-observer",{ref:"Create_Warehouse"},[t("b-modal",{attrs:{"hide-footer":"",size:"lg",id:"New_Warehouse",title:e.editmode?e.$t("Edit"):e.$t("Add")}},[t("b-form",{on:{submit:function(t){return t.preventDefault(),e.Submit_Warehouse.apply(null,arguments)}}},[t("b-row",[t("b-col",{attrs:{md:"6"}},[t("validation-provider",{attrs:{name:"Name",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(s){return[t("b-form-group",{attrs:{label:e.$t("Name")+" *"}},[t("b-form-input",{attrs:{placeholder:e.$t("Enter_Name_Warehouse"),state:e.getValidationState(s),"aria-describedby":"Name-feedback",label:"Name"},model:{value:e.warehouse.name,callback:function(t){e.$set(e.warehouse,"name",t)},expression:"warehouse.name"}}),e._v(" "),t("b-form-invalid-feedback",{attrs:{id:"Name-feedback"}},[e._v(e._s(s.errors[0]))])],1)]}}])})],1),e._v(" "),t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:e.$t("Phone")}},[t("b-form-input",{attrs:{placeholder:e.$t("Enter_Phone_Warehouse"),label:"Phone"},model:{value:e.warehouse.mobile,callback:function(t){e.$set(e.warehouse,"mobile",t)},expression:"warehouse.mobile"}})],1)],1),e._v(" "),t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:e.$t("Country")}},[t("b-form-input",{attrs:{placeholder:e.$t("Enter_Country_Warehouse"),label:"Country"},model:{value:e.warehouse.country,callback:function(t){e.$set(e.warehouse,"country",t)},expression:"warehouse.country"}})],1)],1),e._v(" "),t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:e.$t("City")}},[t("b-form-input",{attrs:{placeholder:e.$t("Enter_City_Warehouse"),label:"City"},model:{value:e.warehouse.city,callback:function(t){e.$set(e.warehouse,"city",t)},expression:"warehouse.city"}})],1)],1),e._v(" "),t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:e.$t("Email")}},[t("b-form-input",{attrs:{placeholder:e.$t("Enter_Email_Warehouse"),label:"Email"},model:{value:e.warehouse.email,callback:function(t){e.$set(e.warehouse,"email",t)},expression:"warehouse.email"}})],1)],1),e._v(" "),t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:e.$t("ZipCode")}},[t("b-form-input",{attrs:{placeholder:e.$t("Enter_ZipCode_Warehouse"),label:"ZipCode"},model:{value:e.warehouse.zip,callback:function(t){e.$set(e.warehouse,"zip",t)},expression:"warehouse.zip"}})],1)],1),e._v(" "),t("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[t("b-button",{attrs:{variant:"primary",type:"submit",disabled:e.SubmitProcessing}},[t("i",{staticClass:"i-Yes me-2 font-weight-bold"}),e._v(" "+e._s(e.$t("submit")))]),e._v(" "),e.SubmitProcessing?e._m(0):e._e()],1)],1)],1)],1)],1)],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);