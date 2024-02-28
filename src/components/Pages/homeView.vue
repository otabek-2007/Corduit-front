<template>
    <div class="container-home">
        <div class="header">
            <header-view></header-view>
        </div>
        <div class="body">
            <div class="body-text">
                <h4>conduit</h4>
                <p>A place to share your knowledge.</p>
            </div>
            <div class="body-show">
            </div>
        </div>
    </div>
</template>

<script>
import headerView from '@/components/layout/headerView.vue'
const components = {
    headerView
}
export default {
    name: 'homeView',
    components
}
</script>

<style lang="scss" scoped>
.container-home {
    width: 100%;
    height: 100%;

    .body {
        width: 100%;
        display: flex;
        flex-direction: column;

        .body-text {
            background-color: #5cb85c;
            padding: 30px 10px;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;

            h4 {
                font-family: sans-serif;
                font-weight: bold;
                color: white;
                font-size: 50px;
            }

            p {
                color: white;
                font-size: 1.5rem;
                font-weight: 300 !important;
            }
        }
    }
}
</style>
