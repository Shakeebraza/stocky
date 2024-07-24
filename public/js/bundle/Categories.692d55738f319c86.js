"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3985],{703:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var s=a(74865),o=a.n(s);const i={metaInfo:{title:"Category"},data:function(){return{isLoading:!0,SubmitProcessing:!1,serverParams:{columnFilters:{},sort:{field:"id",type:"desc"},page:1,perPage:10},selectedIds:[],totalRows:"",search:"",limit:"10",categories:[],editmode:!1,category:{id:"",name:"",code:""}}},computed:{columns:function(){return[{label:this.$t("Codecategorie"),field:"code",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Namecategorie"),field:"name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}},methods:{updateParams:function(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange:function(e){var t=e.currentPage;this.serverParams.page!==t&&(this.updateParams({page:t}),this.Get_Categories(t))},onPerPageChange:function(e){var t=e.currentPerPage;this.limit!==t&&(this.limit=t,this.updateParams({page:1,perPage:t}),this.Get_Categories(1))},selectionChanged:function(e){var t=this,a=e.selectedRows;this.selectedIds=[],a.forEach((function(e,a){t.selectedIds.push(e.id)}))},onSortChange:function(e){this.updateParams({sort:{type:e[0].type,field:e[0].field}}),this.Get_Categories(this.serverParams.page)},onSearch:function(e){this.search=e.searchTerm,this.Get_Categories(this.serverParams.page)},getValidationState:function(e){var t=e.dirty,a=e.validated,s=e.valid;return t||a?void 0===s?null:s:null},Submit_Category:function(){var e=this;this.$refs.Create_Category.validate().then((function(t){t?e.editmode?e.Update_Category():e.Create_Category():e.makeToast("danger",e.$t("Please_fill_the_form_correctly"),e.$t("Failed"))}))},makeToast:function(e,t,a){this.$root.$bvToast.toast(t,{title:a,variant:e,solid:!0})},New_category:function(){this.reset_Form(),this.editmode=!1,this.$bvModal.show("New_Category")},Edit_category:function(e){this.Get_Categories(this.serverParams.page),this.reset_Form(),this.category=e,this.editmode=!0,this.$bvModal.show("New_Category")},Get_Categories:function(e){var t=this;o().start(),o().set(.1),axios.get("categories?page="+e+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(e){t.categories=e.data.categories,t.totalRows=e.data.totalRows,o().done(),t.isLoading=!1})).catch((function(e){o().done(),setTimeout((function(){t.isLoading=!1}),500)}))},Create_Category:function(){var e=this;this.SubmitProcessing=!0,axios.post("categories",{name:this.category.name,code:this.category.code}).then((function(t){e.SubmitProcessing=!1,Fire.$emit("Event_Category"),e.makeToast("success",e.$t("Create.TitleCat"),e.$t("Success"))})).catch((function(t){e.SubmitProcessing=!1,e.makeToast("danger",e.$t("InvalidData"),e.$t("Failed"))}))},Update_Category:function(){var e=this;this.SubmitProcessing=!0,axios.put("categories/"+this.category.id,{name:this.category.name,code:this.category.code}).then((function(t){e.SubmitProcessing=!1,Fire.$emit("Event_Category"),e.makeToast("success",e.$t("Update.TitleCat"),e.$t("Success"))})).catch((function(t){e.SubmitProcessing=!1,e.makeToast("danger",e.$t("InvalidData"),e.$t("Failed"))}))},reset_Form:function(){this.category={id:"",name:"",code:""}},Remove_Category:function(e){var t=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(a){a.value&&axios.delete("categories/"+e).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Delete.CatDeleted"),"success"),Fire.$emit("Delete_Category")})).catch((function(){t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")}))}))},delete_by_selected:function(){var e=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(t){t.value&&(o().start(),o().set(.1),axios.post("categories/delete/by_selection",{selectedIds:e.selectedIds}).then((function(){e.$swal(e.$t("Delete.Deleted"),e.$t("Delete.CatDeleted"),"success"),Fire.$emit("Delete_Category")})).catch((function(){setTimeout((function(){return o().done()}),500),e.$swal(e.$t("Delete.Failed"),e.$t("Delete.Therewassomethingwronge"),"warning")})))}))}},created:function(){var e=this;this.Get_Categories(1),Fire.$on("Event_Category",(function(){setTimeout((function(){e.Get_Categories(e.serverParams.page),e.$bvModal.hide("New_Category")}),500)})),Fire.$on("Delete_Category",(function(){setTimeout((function(){e.Get_Categories(e.serverParams.page)}),500)}))}};const r=(0,a(51900).Z)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-content"},[t("breadcumb",{attrs:{page:e.$t("Categories"),folder:e.$t("Products")}}),e._v(" "),e.isLoading?t("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):e._e(),e._v(" "),e.isLoading?e._e():t("b-card",{staticClass:"wrapper"},[t("vue-good-table",{attrs:{mode:"remote",columns:e.columns,totalRows:e.totalRows,rows:e.categories,"search-options":{enabled:!0,placeholder:e.$t("Search_this_table")},"select-options":{enabled:!0,clearSelectionText:""},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"table-hover tableOne vgt-table"},on:{"on-page-change":e.onPageChange,"on-per-page-change":e.onPerPageChange,"on-sort-change":e.onSortChange,"on-search":e.onSearch,"on-selected-rows-change":e.selectionChanged},scopedSlots:e._u([{key:"table-row",fn:function(a){return["actions"==a.column.field?t("span",[t("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Edit"},on:{click:function(t){return e.Edit_category(a.row)}}},[t("i",{staticClass:"i-Edit text-25 text-success"})]),e._v(" "),t("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Delete"},on:{click:function(t){return e.Remove_Category(a.row.id)}}},[t("i",{staticClass:"i-Close-Window text-25 text-danger"})])]):e._e()]}}],null,!1,4178068922)},[t("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[t("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(t){return e.delete_by_selected()}}},[e._v(e._s(e.$t("Del")))])]),e._v(" "),t("div",{staticClass:"mt-2 mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[t("b-button",{staticClass:"btn-rounded",attrs:{variant:"btn btn-primary btn-icon m-1"},on:{click:function(t){return e.New_category()}}},[t("i",{staticClass:"i-Add"}),e._v("\n          "+e._s(e.$t("Add"))+"\n        ")])],1)])],1),e._v(" "),t("validation-observer",{ref:"Create_Category"},[t("b-modal",{attrs:{"hide-footer":"",size:"md",id:"New_Category",title:e.editmode?e.$t("Edit"):e.$t("Add")}},[t("b-form",{on:{submit:function(t){return t.preventDefault(),e.Submit_Category.apply(null,arguments)}}},[t("b-row",[t("b-col",{attrs:{md:"12"}},[t("validation-provider",{attrs:{name:"Code category",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(a){return[t("b-form-group",{attrs:{label:e.$t("Codecategorie")+" *"}},[t("b-form-input",{attrs:{placeholder:e.$t("Enter_Code_category"),state:e.getValidationState(a),"aria-describedby":"Code-feedback",label:"Code"},model:{value:e.category.code,callback:function(t){e.$set(e.category,"code",t)},expression:"category.code"}}),e._v(" "),t("b-form-invalid-feedback",{attrs:{id:"Code-feedback"}},[e._v(e._s(a.errors[0]))])],1)]}}])})],1),e._v(" "),t("b-col",{attrs:{md:"12"}},[t("validation-provider",{attrs:{name:"Name category",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(a){return[t("b-form-group",{attrs:{label:e.$t("Namecategorie")+" *"}},[t("b-form-input",{attrs:{placeholder:e.$t("Enter_name_category"),state:e.getValidationState(a),"aria-describedby":"Name-feedback",label:"Name"},model:{value:e.category.name,callback:function(t){e.$set(e.category,"name",t)},expression:"category.name"}}),e._v(" "),t("b-form-invalid-feedback",{attrs:{id:"Name-feedback"}},[e._v(e._s(a.errors[0]))])],1)]}}])})],1),e._v(" "),t("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[t("b-button",{attrs:{variant:"primary",type:"submit",disabled:e.SubmitProcessing}},[t("i",{staticClass:"i-Yes me-2 font-weight-bold"}),e._v(" "+e._s(e.$t("submit")))]),e._v(" "),e.SubmitProcessing?e._m(0):e._e()],1)],1)],1)],1)],1)],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);