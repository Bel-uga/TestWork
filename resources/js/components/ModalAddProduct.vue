<template>
    <div
        class="modal fade"
        id="modalAddProduct"
        tabindex="-1"
        aria-labelledby="modalAddProductLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <form @submit.prevent="addProduct">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalAddProductLabel">
                            Добавить товар
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="modalAddProductName"> Название </label>
                            <input
                                type="text"
                                class="form-control"
                                id="modalAddProductName"
                                v-model="form.name"
                                aria-describedby="modalAddProductNameError"
                                required
                            />
                            <small
                                id="modalAddProductNameError"
                                class="form-text text-danger"
                                v-if="errors.name"
                            >
                                {{ errors.name.join(",") }}
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="modalAddPrice"> Цена </label>
                            <input
                                type="number"
                                class="form-control"
                                id="modalAddPrice"
                                v-model="form.price"
                                aria-describedby="modalAddProductPriceError"
                                min="1"
                                required
                            />
                            <small
                                id="modalAddProductPriceError"
                                class="form-text text-danger"
                                v-if="errors.price"
                            >
                                {{ errors.price.join(",") }}
                            </small>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Закрыть
                        </button>
                        <button type="submit" class="btn btn-primary">
                            Добавить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            form: {
                name: "",
                price: 0,
            },
            errors: {},
        };
    },
    methods: {
        addProduct: function () {
            this.$root.$refs.preloader.show();
            axios
                .post("/api/product", {
                    name: this.form.name,
                    price: this.form.price,
                })
                .then((response) => {
                    this.resetForm();
                    this.$root.$refs.preloader.hide();
                    $("#modalAddProduct").modal("hide");
                    this.$parent.$refs.productTableMessage.show(
                        "Товар успешно добавлен."
                    );
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    this.$root.$refs.preloader.hide();
                });
        },
        resetForm: function () {
            this.form.name = "";
            this.form.price = 0;
        },
    },
};
</script>
