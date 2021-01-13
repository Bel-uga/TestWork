(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductsTable.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductsTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalNewProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalNewProduct */ "./resources/js/components/modalNewProduct.vue");
/* harmony import */ var _modalEditProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalEditProduct */ "./resources/js/components/modalEditProduct.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    modalNewProduct: _modalNewProduct__WEBPACK_IMPORTED_MODULE_0__["default"],
    modalEditProduct: _modalEditProduct__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      showAlert: false,
      message: '',
      fields: [{
        key: 'index',
        label: '№',
        thClass: 'price-column',
        tdClass: 'align-middle'
      }, {
        key: 'name',
        label: 'Название',
        tdClass: 'align-middle'
      }, {
        key: 'price',
        label: 'Стоимость',
        thClass: 'price-column',
        tdClass: 'align-middle'
      }, {
        key: 'id',
        label: ' ',
        thClass: 'edit-column'
      }],
      items: [{
        name: 'Услуга',
        price: 100,
        id: 1
      }, {
        name: 'Услуга',
        price: 100,
        id: 2
      }],
      lastPage: 1,
      currentPage: 1
    };
  },
  mounted: function mounted() {
    this.getProducts(1);
  },
  methods: {
    showMessage: function showMessage(message) {
      this.message = message;
      this.showAlert = true;
      this.getProducts(1);
    },
    getProducts: function getProducts(page) {
      var _this = this;

      axios.get('/product', {
        params: {
          page: page
        }
      }).then(function (response) {
        _this.items = response.data.products.data;
        _this.lastPage = response.data.products.last_page;
      })["catch"](function (error) {});
      this.currentPage = page;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalEditProduct.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modalEditProduct.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id'],
  data: function data() {
    return {
      name: '',
      price: 0,
      show: false,
      showAlert: false,
      showSpinner: false,
      message: ''
    };
  },
  methods: {
    deleteProduct: function deleteProduct() {
      var _this = this;

      axios["delete"]("/product/".concat(this.id)).then(function (response) {
        _this.$emit('showAlert', 'Услуга успешно удалена!');
      })["catch"](function (error) {
        _this.$emit('showAlert', 'Произошла ошибка при удалении услуги!');
      });
    },
    resetModal: function resetModal() {
      this.name = '';
      this.price = 0;
      this.showAlert = false;
      this.showSpinner = false;
      this.getProduct();
    },
    getProduct: function getProduct() {
      var _this2 = this;

      axios.get("/product/".concat(this.id)).then(function (response) {
        _this2.name = response.data.product.name;
        _this2.price = response.data.product.price;
      })["catch"](function (error) {
        _this2.message = 'Не удалось получить данные услуги!';
        _this2.showAlert = true;
      });
    },
    saveProduct: function saveProduct() {
      var _this3 = this;

      this.showSpinner = true;
      axios.put("/product/".concat(this.id), {
        name: this.name,
        price: this.price
      }).then(function (response) {
        _this3.show = false;
        _this3.showSpinner = false;

        _this3.$emit('showAlert', 'Изменения успешно сохранены!');
      })["catch"](function (error) {
        _this3.message = 'Не удалось сохранить изменения!';
        _this3.showAlert = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalNewProduct.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modalNewProduct.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      name: '',
      price: 0,
      showAlert: false,
      showSpinner: false,
      message: 'Не удалось создать новую услугу!'
    };
  },
  methods: {
    addProduct: function addProduct() {
      var _this = this;

      this.showSpinner = true;
      axios.post('/product', {
        name: this.name,
        price: this.price
      }).then(function (response) {
        _this.$emit('showAlert', 'Услуга успешно создана!');

        _this.$bvModal.hide('modalNewProduct');

        _this.showSpinner = false;
      })["catch"](function (error) {
        _this.showAlert = true;
        _this.showSpinner = false;
      });
    },
    resetModal: function resetModal() {
      this.name = '';
      this.price = 0;
      this.showAlert = false;
      this.showSpinner = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductsTable.vue?vue&type=template&id=0fd55f6f&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductsTable.vue?vue&type=template&id=0fd55f6f& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid pt-3" },
    [
      _c(
        "div",
        {
          staticClass:
            "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        },
        [
          _c("h1", { staticClass: "h2" }, [_vm._v("Услуги")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "btn-toolbar mb-2 mb-md-0" },
            [_c("modalNewProduct", { on: { showAlert: _vm.showMessage } })],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-alert",
        {
          attrs: { dismissible: "", fade: "", show: _vm.showAlert },
          on: {
            dismissed: function($event) {
              _vm.showAlert = false
            }
          }
        },
        [_vm._v("\n        " + _vm._s(_vm.message) + "\n    ")]
      ),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          small: "",
          fields: _vm.fields,
          items: _vm.items,
          responsive: "sm",
          bordered: ""
        },
        scopedSlots: _vm._u([
          {
            key: "cell(index)",
            fn: function(data) {
              return [
                _vm._v("\n            " + _vm._s(data.index + 1) + "\n        ")
              ]
            }
          },
          {
            key: "cell(name)",
            fn: function(data) {
              return [
                _vm._v("\n            " + _vm._s(data.item.name) + "\n        ")
              ]
            }
          },
          {
            key: "cell(price)",
            fn: function(data) {
              return [
                _vm._v(
                  "\n            " + _vm._s(data.item.price) + "\n        "
                )
              ]
            }
          },
          {
            key: "cell(id)",
            fn: function(data) {
              return [
                _c("modalEditProduct", {
                  attrs: { id: data.item.id },
                  on: { showAlert: _vm.showMessage }
                })
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("nav", [
        _c(
          "ul",
          { staticClass: "pagination" },
          [
            _vm._l(_vm.lastPage, function(numberPage) {
              return [
                _vm.currentPage == numberPage
                  ? _c("li", { staticClass: "page-item active" }, [
                      _c(
                        "a",
                        {
                          staticClass: "page-link",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              return _vm.getProducts(numberPage)
                            }
                          }
                        },
                        [_vm._v(_vm._s(numberPage))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentPage != numberPage
                  ? _c("li", { staticClass: "page-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "page-link",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              return _vm.getProducts(numberPage)
                            }
                          }
                        },
                        [_vm._v(_vm._s(numberPage))]
                      )
                    ])
                  : _vm._e()
              ]
            })
          ],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalEditProduct.vue?vue&type=template&id=527f78e3&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modalEditProduct.vue?vue&type=template&id=527f78e3& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "text-center" },
    [
      _c(
        "b-button",
        {
          attrs: { size: "sm", title: "Редактировать" },
          on: {
            click: function($event) {
              _vm.show = true
            }
          }
        },
        [
          _c("b-icon", {
            attrs: { icon: "box-arrow-in-down-left", scale: "1" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-button",
        {
          attrs: { size: "sm", title: "Удалить" },
          on: {
            click: function($event) {
              return _vm.deleteProduct()
            }
          }
        },
        [_c("b-icon", { attrs: { icon: "trash", scale: "1" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { title: "Редактирование услуги" },
          on: { show: _vm.resetModal },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                var cancel = ref.cancel
                return [
                  _c(
                    "b-button",
                    {
                      attrs: { disabled: _vm.showSpinner, variant: "success" },
                      on: {
                        click: function($event) {
                          return _vm.saveProduct()
                        }
                      }
                    },
                    [
                      _vm.showSpinner
                        ? _c("b-spinner", { attrs: { small: "" } })
                        : _vm._e(),
                      _vm._v("\n                Сохранить\n            ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "secondary" } }, [
                    _vm._v("\n                Отмена\n            ")
                  ])
                ]
              }
            }
          ]),
          model: {
            value: _vm.show,
            callback: function($$v) {
              _vm.show = $$v
            },
            expression: "show"
          }
        },
        [
          _c(
            "form",
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Название",
                    "label-for": "name",
                    "invalid-feedback": "Поле обязательно для заполнения"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: { id: "name", required: "" },
                    model: {
                      value: _vm.name,
                      callback: function($$v) {
                        _vm.name = $$v
                      },
                      expression: "name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Стоимость",
                    "label-for": "price",
                    "invalid-feedback": "Поле обязательно для заполнения"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: { id: "price", type: "number", required: "" },
                    model: {
                      value: _vm.price,
                      callback: function($$v) {
                        _vm.price = $$v
                      },
                      expression: "price"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-alert",
                {
                  attrs: { dismissible: "", fade: "", show: _vm.showAlert },
                  on: {
                    dismissed: function($event) {
                      _vm.showAlert = false
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.message) +
                      "\n            "
                  )
                ]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalNewProduct.vue?vue&type=template&id=c3d05f7e&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modalNewProduct.vue?vue&type=template&id=c3d05f7e& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "btn-group mr-2" },
    [
      _c(
        "b-button",
        {
          directives: [
            {
              name: "b-modal",
              rawName: "v-b-modal",
              value: "modalNewProduct",
              expression: "'modalNewProduct'"
            }
          ]
        },
        [_vm._v("Добавить")]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { id: "modalNewProduct", title: "Добавить новую услугу" },
          on: { show: _vm.resetModal },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                var cancel = ref.cancel
                return [
                  _c(
                    "b-button",
                    {
                      attrs: { disabled: _vm.showSpinner, variant: "success" },
                      on: {
                        click: function($event) {
                          return _vm.addProduct()
                        }
                      }
                    },
                    [
                      _vm.showSpinner
                        ? _c("b-spinner", { attrs: { small: "" } })
                        : _vm._e(),
                      _vm._v("\n                Создать\n            ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "secondary" } }, [
                    _vm._v("\n                Отмена\n            ")
                  ])
                ]
              }
            }
          ])
        },
        [
          _c(
            "form",
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Название",
                    "label-for": "name",
                    "invalid-feedback": "Поле обязательно для заполнения"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: { id: "name", required: "" },
                    model: {
                      value: _vm.name,
                      callback: function($$v) {
                        _vm.name = $$v
                      },
                      expression: "name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Стоимость",
                    "label-for": "price",
                    "invalid-feedback": "Поле обязательно для заполнения"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: { id: "price", type: "number", required: "" },
                    model: {
                      value: _vm.price,
                      callback: function($$v) {
                        _vm.price = $$v
                      },
                      expression: "price"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-alert",
                {
                  attrs: { dismissible: "", fade: "", show: _vm.showAlert },
                  on: {
                    dismissed: function($event) {
                      _vm.showAlert = false
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.message) +
                      "\n            "
                  )
                ]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ProductsTable.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/ProductsTable.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductsTable_vue_vue_type_template_id_0fd55f6f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsTable.vue?vue&type=template&id=0fd55f6f& */ "./resources/js/components/ProductsTable.vue?vue&type=template&id=0fd55f6f&");
/* harmony import */ var _ProductsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsTable.vue?vue&type=script&lang=js& */ "./resources/js/components/ProductsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductsTable_vue_vue_type_template_id_0fd55f6f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductsTable_vue_vue_type_template_id_0fd55f6f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProductsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProductsTable.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ProductsTable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProductsTable.vue?vue&type=template&id=0fd55f6f&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ProductsTable.vue?vue&type=template&id=0fd55f6f& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsTable_vue_vue_type_template_id_0fd55f6f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsTable.vue?vue&type=template&id=0fd55f6f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductsTable.vue?vue&type=template&id=0fd55f6f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsTable_vue_vue_type_template_id_0fd55f6f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsTable_vue_vue_type_template_id_0fd55f6f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/modalEditProduct.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/modalEditProduct.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalEditProduct_vue_vue_type_template_id_527f78e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalEditProduct.vue?vue&type=template&id=527f78e3& */ "./resources/js/components/modalEditProduct.vue?vue&type=template&id=527f78e3&");
/* harmony import */ var _modalEditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalEditProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/modalEditProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalEditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalEditProduct_vue_vue_type_template_id_527f78e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalEditProduct_vue_vue_type_template_id_527f78e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modalEditProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modalEditProduct.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/modalEditProduct.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./modalEditProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalEditProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modalEditProduct.vue?vue&type=template&id=527f78e3&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/modalEditProduct.vue?vue&type=template&id=527f78e3& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEditProduct_vue_vue_type_template_id_527f78e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./modalEditProduct.vue?vue&type=template&id=527f78e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalEditProduct.vue?vue&type=template&id=527f78e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEditProduct_vue_vue_type_template_id_527f78e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEditProduct_vue_vue_type_template_id_527f78e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/modalNewProduct.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/modalNewProduct.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalNewProduct_vue_vue_type_template_id_c3d05f7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalNewProduct.vue?vue&type=template&id=c3d05f7e& */ "./resources/js/components/modalNewProduct.vue?vue&type=template&id=c3d05f7e&");
/* harmony import */ var _modalNewProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalNewProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/modalNewProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalNewProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalNewProduct_vue_vue_type_template_id_c3d05f7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalNewProduct_vue_vue_type_template_id_c3d05f7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modalNewProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modalNewProduct.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/modalNewProduct.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalNewProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./modalNewProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalNewProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalNewProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modalNewProduct.vue?vue&type=template&id=c3d05f7e&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/modalNewProduct.vue?vue&type=template&id=c3d05f7e& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalNewProduct_vue_vue_type_template_id_c3d05f7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./modalNewProduct.vue?vue&type=template&id=c3d05f7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalNewProduct.vue?vue&type=template&id=c3d05f7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalNewProduct_vue_vue_type_template_id_c3d05f7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalNewProduct_vue_vue_type_template_id_c3d05f7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);