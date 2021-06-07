<template>
    <div class="container-fluid pt-3">
        <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
            <h1 class="h2">Товары</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
                <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#modalAddProduct"
                >
                    Добавить товар
                </button>
            </div>
        </div>
        <div class="form-inline">
            <div class="form-group mb-2">
                <label for="productsTableLimit" class="mr-3"> Показать </label>
                <select
                    id="productsTableLimit"
                    class="form-control"
                    v-model="limit"
                    @change="getProducts(1)"
                >
                    <option selected val="10">10</option>
                    <option val="20">20</option>
                    <option val="30">30</option>
                    <option val="40">40</option>
                    <option val="50">50</option>
                </select>
            </div>
        </div>
        <message ref="productTableMessage"></message>
        <modalAddProduct></modalAddProduct>
        <modalEditProduct ref="modalEditProduct"></modalEditProduct>
        <div class="table-responsive">
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название</th>
                        <th scope="col">Цена</th>
                        <th scope="col" class="delete-column"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in products.data" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        <td>
                            <button
                                type="button"
                                class="btn btn btn-outline-dark btn-sm"
                                title="Редактировать товар"
                                data-toggle="modal"
                                data-target="#modalEditProduct"
                                @click="
                                    $refs.modalEditProduct.getProduct(
                                        product.id
                                    )
                                "
                            >
                                <i
                                    class="fa fa-pencil-square-o fa-lg"
                                    aria-hidden="true"
                                ></i>
                            </button>
                            <button
                                type="button"
                                class="btn btn btn-outline-dark btn-sm"
                                title="Удалить товар"
                                @click="deleteProduct(product.id)"
                            >
                                <i
                                    class="fa fa-trash fa-lg"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <nav>
            <ul class="pagination justify-content-center my-3">
                <li class="page-item">
                    <a
                        class="page-link text-secondary rounded-0 btn"
                        aria-label="Previous"
                        @click="getProducts(1)"
                    >
                        <i
                            class="fa fa-angle-double-left"
                            aria-hidden="true"
                        ></i>
                    </a>
                </li>
                <li class="page-item">
                    <a
                        class="page-link text-secondary rounded-0 btn"
                        aria-label="Previous"
                        @click="
                            getProducts(
                                products.current_page > 1
                                    ? products.current_page - 1
                                    : products.current_page
                            )
                        "
                    >
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </a>
                </li>
                <li
                    class="page-item"
                    v-for="pageNumber in pagination.max_page"
                    :key="pageNumber"
                    v-bind:class="{
                        active:
                            pageNumber + pagination.offset ===
                            products.current_page,
                    }"
                >
                    <a
                        class="page-link rounded-0 ml-2 btn"
                        @click="getProducts(pageNumber + pagination.offset)"
                    >
                        {{ pageNumber + pagination.offset }}
                    </a>
                </li>
                <li class="page-item">
                    <a
                        class="page-link rounded-0 ml-2 text-secondary btn"
                        aria-label="Next"
                        @click="
                            getProducts(
                                products.current_page < products.last_page
                                    ? products.current_page + 1
                                    : products.current_page
                            )
                        "
                    >
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                </li>
                <li class="page-item">
                    <a
                        class="page-link rounded-0 ml-2 text-secondary btn"
                        aria-label="Next"
                        @click="getProducts(products.last_page)"
                    >
                        <i
                            class="fa fa-angle-double-right"
                            aria-hidden="true"
                        ></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import modalAddProduct from "./modalAddProduct";
import modalEditProduct from "./modalEditProduct";
import message from "../message";
export default {
    components: {
        modalAddProduct,
        modalEditProduct,
        message,
    },
    data: function () {
        return {
            products: [],
            pagination: {
                max_page: 10,
                offset: 1,
            },
            limit: 10,
        };
    },
    mounted: function () {
        this.getProducts(1);
    },
    methods: {
        getProducts: function (page) {
            this.$root.$refs.preloader.show();
            axios
                .get("/api/product", {
                    params: {
                        page: page,
                        limit: this.limit,
                    },
                })
                .then((response) => {
                    this.products = response.data.products;
                    Vue.nextTick(() => {
                        this.setPaginate();
                        this.$root.$refs.preloader.hide();
                    });
                })
                .catch((error) => {
                    this.$root.$refs.preloader.hide();
                    this.$refs.productTableMessage.show(
                        "Произошла ошибка во время получения товаров."
                    );
                });
        },
        deleteProduct: function (id) {
            this.$root.$refs.preloader.show();
            axios
                .delete(`/api/product/${id}`)
                .then((response) => {
                    this.$root.$refs.preloader.hide();
                    this.getProducts(1);
                    this.$refs.productTableMessage.show(
                        "Товар успешно удален."
                    );
                })
                .catch((error) => {
                    this.$root.$refs.preloader.hide();
                    this.$refs.productTableMessage.show(
                        "Произошла ошибка во время удаления товара."
                    );
                });
        },
        setPaginate() {
            this.pagination.max_page =
                this.products.last_page <= 10 ? this.products.last_page : 10;
            this.pagination.offset =
                this.products.last_page <= 10 || this.products.current_page <= 5
                    ? 0
                    : this.products.current_page - 5;
            if (
                this.products.last_page - this.products.current_page < 5 &&
                this.products.last_page > 10
            ) {
                this.pagination.offset = this.products.last_page - 10;
            }
        },
    },
};
</script>
<style>
.delete-column {
    width: 95px;
    min-width: 95px;
}
</style>