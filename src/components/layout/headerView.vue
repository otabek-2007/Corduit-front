<template>
    <div class="container-header">
        <div class="header">
            <div class="content">
                <div class="header-logo">
                    <div class="logo">
                        <h3>conduit</h3>
                    </div>
                </div>
                <div class="header-navbar">
                    <div class="navbar">
                        <ul>
                            <router-link tag="li" :to="{name:'homeView'}"><a href="">Home</a></router-link>
                            <li><a href="">Home</a></li>
                            <li><a href="">Sign in</a></li>
                            <li><a href="">Sign up</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss">
.container-header {
    width: 100%;
    top: 0px;
    position: absolute;
    display: flex;
    height: 30px;
    justify-content: center;

    .header {
        height: 100%;
        width: 96%;
        padding: 10px 20px;
        .content {
            height: 100%;
            width: 100%;
            display: inline-flex;
            justify-content: center;

            .header-logo {
                height: 100%;
                width: 20%;

                .logo {
                    width: 100%;
                    height: 100%;
                    h3{
                        font-family: sans-serif;
                        font-weight: bold;
                        font-size: 25px;
                        color: #5cb85c;
                    }
                }
            }

            .header-navbar {
                height: 100%;
                width: 80%;

                .navbar {
                    display: flex;
                    justify-content: right;
                    width: 100%;
                    height: 100%;
                    text-align: right;
                    ul{
                        display: flex;
                        flex-direction: row;
                        li{
                            margin-right: 20px;
                        }
                    }
                }
            }
        }
    }
}
</style>