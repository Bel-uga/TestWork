<template>
    <div v-show="visible">
        <div class="preloader">
            <div class="spinner-border text-secondary" role="status"></div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            visible: false,
        };
    },
    mounted() {},
    methods: {
        show: function () {
            this.visible = true;
        },
        hide: function () {
            this.visible = false;
        },
    },
};
</script>
<style scoped>
.preloader {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8fafc;
    z-index: 10000;
    position: absolute;
}
</style>
