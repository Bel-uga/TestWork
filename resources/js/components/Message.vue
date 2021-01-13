<template>
    <div
        class="alert alert-success alert-dismissible fade"
        :class="{ show: visible }"
        role="alert"
        v-if="visible"
    >
        {{ text }}
        <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
        >
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            visible: false,
            text: "",
        };
    },
    methods: {
        show: function (message) {
            this.text = message;
            this.visible = true;
        },
    },
};
</script>
