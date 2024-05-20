<script>
export default {
    name: 'AppHeader',
}
</script>


<template>

    <header>
        <nav class="p-3">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <router-link :to="{ name: 'HomePage' }">
                        <img id="logo" src="/public/BoolBnB.png" alt="Logo" class="d-inline-block align-text-top">
                    </router-link>
                </a>
            </div>
        </nav>
    </header>

</template>

<style lang="scss">
nav {

    #logo {
        width: 240px;
        border-radius: 24px;
    }

    background-color: #006769c0;

    .container {
        border-bottom: 1px solid white;
    }
}
</style>