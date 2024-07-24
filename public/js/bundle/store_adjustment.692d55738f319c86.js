"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6739],{40750:(t,e,a)=>{a.d(e,{Z:()=>n});var s=a(23645),i=a.n(s)()((function(t){return t[1]}));i.push([t.id,".input-with-icon{align-items:center;display:flex}.scan-icon{cursor:pointer;height:50px;margin-right:8px;width:50px}",""]);const n=i},72205:(t,e,a)=>{a.r(e),a.d(e,{default:()=>c});var s=a(74865),i=a.n(s);const n={metaInfo:{title:"Create Adjustment"},data:function(){return{focused:!1,timer:null,search_input:"",product_filter:[],isLoading:!0,SubmitProcessing:!1,warehouses:[],products:[],details:[],adjustment:{id:"",notes:"",warehouse_id:"",date:(new Date).toISOString().slice(0,10)},product:{id:"",code:"",current:"",quantity:1,name:"",product_id:"",detail_id:"",product_variant_id:"",unit:""},symbol:""}},methods:{handleFocus:function(){this.focused=!0},handleBlur:function(){this.focused=!1},showModal:function(){this.$bvModal.show("open_scan")},onScan:function(t,e){var a=t;this.search_input=a,this.search(),this.$bvModal.hide("open_scan")},search:function(){var t=this;if(this.timer&&(clearTimeout(this.timer),this.timer=null),this.search_input.length<2)return this.product_filter=[];""!=this.adjustment.warehouse_id&&null!=this.adjustment.warehouse_id?this.timer=setTimeout((function(){var e=t.products.filter((function(e){return e.code===t.search_input||e.barcode.includes(t.search_input)}));1===e.length?t.SearchProduct(e[0]):(t.product_filter=t.products.filter((function(e){return e.name.toLowerCase().includes(t.search_input.toLowerCase())||e.code.toLowerCase().includes(t.search_input.toLowerCase())||e.barcode.toLowerCase().includes(t.search_input.toLowerCase())})),t.product_filter.length<=0&&t.makeToast("warning","Product Not Found","Warning"))}),800):this.makeToast("warning",this.$t("SelectWarehouse"),this.$t("Warning"))},SearchProduct:function(t){this.product={},this.details.length>0&&this.details.some((function(e){return e.code===t.code}))?this.makeToast("warning",this.$t("AlreadyAdd"),this.$t("Warning")):(this.product.code=t.code,this.product.current=t.qte,t.qte<1?this.product.quantity=t.qte:this.product.quantity=1,this.product.product_variant_id=t.product_variant_id,this.Get_Product_Details(t.id,t.product_variant_id)),this.search_input="",this.$refs.product_autocomplete.value="",this.product_filter=[]},getResultValue:function(t){return t.code+" ("+t.name+")"},Submit_Adjustment:function(){var t=this;this.$refs.Create_adjustment.validate().then((function(e){e?t.Create_Adjustment():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},getValidationState:function(t){var e=t.dirty,a=t.validated,s=t.valid;return e||a?void 0===s?null:s:null},makeToast:function(t,e,a){this.$root.$bvToast.toast(e,{title:a,variant:t,solid:!0})},Selected_Warehouse:function(t){this.search_input="",this.product_filter=[],this.Get_Products_By_Warehouse(t)},Get_Products_By_Warehouse:function(t){var e=this;i().start(),i().set(.1),axios.get("get_Products_by_warehouse/"+t+"?stock=0&product_service=0").then((function(t){e.products=t.data,i().done()})).catch((function(t){}))},add_product:function(){this.details.length>0?this.detail_order_id():0===this.details.length&&(this.product.detail_id=1),this.details.push(this.product)},Verified_Qty:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id===e&&(isNaN(t.quantity)&&(this.details[a].quantity=t.current),"sub"==t.type&&t.quantity>t.current?(this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")),this.details[a].quantity=t.current):this.details[a].quantity=t.quantity);this.$forceUpdate()},increment:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id==e&&("sub"==t.type&&t.quantity+1>t.current?this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")):this.formatNumber(this.details[a].quantity++,2));this.$forceUpdate()},decrement:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id==e&&t.quantity-1>0&&("sub"==t.type&&t.quantity-1>t.current?this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")):this.formatNumber(this.details[a].quantity--,2));this.$forceUpdate()},formatNumber:function(t,e){var a=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return a[0];var s=a[1]||"";if(s.length>e)return"".concat(a[0],".").concat(s.substr(0,e));for(;s.length<e;)s+="0";return"".concat(a[0],".").concat(s)},Remove_Product:function(t){for(var e=0;e<this.details.length;e++)t===this.details[e].detail_id&&this.details.splice(e,1)},verifiedForm:function(){if(this.details.length<=0)return this.makeToast("warning",this.$t("AddProductToList"),this.$t("Warning")),!1;for(var t=0,e=0;e<this.details.length;e++)""!=this.details[e].quantity&&0!==this.details[e].quantity||(t+=1);return!(t>0)||(this.makeToast("warning",this.$t("AddQuantity"),this.$t("Warning")),!1)},Create_Adjustment:function(){var t=this;this.verifiedForm()&&(this.SubmitProcessing=!0,i().start(),i().set(.1),axios.post("adjustments",{warehouse_id:this.adjustment.warehouse_id,date:this.adjustment.date,notes:this.adjustment.notes,details:this.details}).then((function(e){i().done(),t.SubmitProcessing=!1,t.$router.push({name:"index_adjustment"}),t.makeToast("success",t.$t("Create.TitleAdjust"),t.$t("Success"))})).catch((function(e){i().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),t.SubmitProcessing=!1})))},detail_order_id:function(){this.product.detail_id=0;var t=this.details.length;this.product.detail_id=this.details[t-1].detail_id+1},Get_Product_Details:function(t,e){var a=this;axios.get("/show_product_data/"+t+"/"+e).then((function(t){a.product.product_id=t.data.id,a.product.name=t.data.name,a.product.type="add",a.product.unit=t.data.unit,a.add_product()}))},Get_Elements:function(){var t=this;axios.get("adjustments/create").then((function(e){t.warehouses=e.data.warehouses,t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))}},created:function(){this.Get_Elements()}};var r=a(93379),o=a.n(r),u=a(40750),d={insert:"head",singleton:!1};o()(u.Z,d);u.Z.locals;const c=(0,a(51900).Z)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("CreateAdjustment"),folder:t.$t("ListAdjustments")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"Create_adjustment"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Adjustment.apply(null,arguments)}}},[e("b-row",[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",[e("b-row",[e("b-modal",{attrs:{"hide-footer":"",id:"open_scan",size:"md",title:"Barcode Scanner"}},[e("qrcode-scanner",{staticStyle:{width:"100%",height:"calc(100vh - 56px)"},attrs:{qrbox:250,fps:10},on:{result:t.onScan}})],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[e("validation-provider",{attrs:{name:"warehouse",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.valid,i=a.errors;return e("b-form-group",{attrs:{label:t.$t("warehouse")+" *"}},[e("v-select",{class:{"is-invalid":!!i.length},attrs:{state:!i[0]&&(!!s||null),disabled:t.details.length>0,reduce:function(t){return t.value},placeholder:t.$t("Choose_Warehouse"),options:t.warehouses.map((function(t){return{label:t.name,value:t.id}}))},on:{input:t.Selected_Warehouse},model:{value:t.adjustment.warehouse_id,callback:function(e){t.$set(t.adjustment,"warehouse_id",e)},expression:"adjustment.warehouse_id"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}],null,!1,935377333)})],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"date",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(a){return[e("b-form-group",{attrs:{label:t.$t("date")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(a),"aria-describedby":"date-feedback",type:"date"},model:{value:t.adjustment.date,callback:function(e){t.$set(t.adjustment,"date",e)},expression:"adjustment.date"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(a.errors[0]))])],1)]}}],null,!1,2238917526)})],1),t._v(" "),e("b-col",{staticClass:"mb-5",attrs:{md:"12"}},[e("h6",[t._v(t._s(t.$t("ProductName")))]),t._v(" "),e("div",{staticClass:"autocomplete",attrs:{id:"autocomplete"}},[e("div",{staticClass:"input-with-icon"},[e("img",{staticClass:"scan-icon",attrs:{src:"/assets_setup/scan.png",alt:"Scan"},on:{click:t.showModal}}),t._v(" "),e("input",{ref:"product_autocomplete",staticClass:"autocomplete-input",attrs:{placeholder:t.$t("Scan_Search_Product_by_Code_Name")},on:{input:function(e){return t.search_input=e.target.value},keyup:function(e){return t.search(t.search_input)},focus:t.handleFocus,blur:t.handleBlur}})]),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.focused,expression:"focused"}],staticClass:"autocomplete-result-list"},t._l(t.product_filter,(function(a){return e("li",{staticClass:"autocomplete-result",on:{mousedown:function(e){return t.SearchProduct(a)}}},[t._v(t._s(t.getResultValue(a)))])})),0)])]),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover"},[e("thead",{staticClass:"bg-gray-300"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("CodeProduct")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("ProductName")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("CurrentStock")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Qty")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("type")))]),t._v(" "),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[e("i",{staticClass:"fa fa-trash"})])])]),t._v(" "),e("tbody",[t.details.length<=0?e("tr",[e("td",{attrs:{colspan:"7"}},[t._v(t._s(t.$t("NodataAvailable")))])]):t._e(),t._v(" "),t._l(t.details,(function(a){return e("tr",{key:a.detail_id},[e("td",[t._v(t._s(a.detail_id))]),t._v(" "),e("td",[t._v(t._s(a.code))]),t._v(" "),e("td",[t._v("("+t._s(a.name)+")")]),t._v(" "),e("td",[e("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(a.current)+" "+t._s(a.unit))])]),t._v(" "),e("td",[e("div",{staticClass:"quantity"},[e("b-input-group",[e("b-input-group-prepend",[e("span",{staticClass:"btn btn-primary btn-sm",on:{click:function(e){return t.decrement(a,a.detail_id)}}},[t._v("-")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:a.quantity,expression:"detail.quantity",modifiers:{number:!0}}],staticClass:"form-control",attrs:{min:0,max:a.current},domProps:{value:a.quantity},on:{keyup:function(e){return t.Verified_Qty(a,a.detail_id)},input:function(e){e.target.composing||t.$set(a,"quantity",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("b-input-group-append",[e("span",{staticClass:"btn btn-primary btn-sm",on:{click:function(e){return t.increment(a,a.detail_id)}}},[t._v("+")])])],1)],1)]),t._v(" "),e("td",[e("select",{directives:[{name:"model",rawName:"v-model",value:a.type,expression:"detail.type"}],staticClass:"form-control",attrs:{type:"text",required:""},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(a,"type",e.target.multiple?s:s[0])},function(e){return t.Verified_Qty(a,a.detail_id)}]}},[e("option",{attrs:{value:"add"}},[t._v(t._s(t.$t("Addition")))]),t._v(" "),e("option",{attrs:{value:"sub"}},[t._v(t._s(t.$t("Subtraction")))])])]),t._v(" "),e("td",[e("a",{staticClass:"btn btn-icon btn-sm",attrs:{title:"Delete"},on:{click:function(e){return t.Remove_Product(a.detail_id)}}},[e("i",{staticClass:"i-Close-Window text-25 text-danger"})])])])}))],2)])])]),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{staticClass:"mt-4",attrs:{label:t.$t("Note")}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.adjustment.notes,expression:"adjustment.notes"}],staticClass:"form-control",attrs:{rows:"4",placeholder:t.$t("Afewwords")},domProps:{value:t.adjustment.notes},on:{input:function(e){e.target.composing||t.$set(t.adjustment,"notes",e.target.value)}}})])],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",disabled:t.SubmitProcessing},on:{click:t.Submit_Adjustment}},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);