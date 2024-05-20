<script>
export default {
    name: 'AppHeader',
}
</script>


<template>

    <header>
        <nav class="p-3">
            <div class="container-fluid" id="inner-nav">
                <a class="navbar-brand" href="#">
                    <router-link :to="{ name: 'HomePage' }">
                        <img id="logo" src="/public/BoolBnB.png" alt="Logo" class="d-inline-block align-text-top">
                    </router-link>
                </a>

                <div id="nav-links">
                    <ul>
                        <li>
                            <router-link :to="{name: 'HomePage'}">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{}">
                                Contatti
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{}">
                                In Evidenza
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div id="reg-log">
                
                    <div id="reg-log-inner">
                        <a style="border-top-left-radius: 24px; border-bottom-left-radius: 24px;" href="http://127.0.0.1:8000/login">Accedi</a>
                        <a style="border-top-right-radius: 24px; border-bottom-right-radius: 24px;" href="http://127.0.0.1:8000/register">Registrati</a>
                    </div>
                
                </div>

            </div>
        </nav>
    </header>

</template>

<style lang="scss">
nav {

    #logo {
        width: 120px;
        border-radius: 24px;
    }

    background-color: #006769c0;

    .container {
        border-bottom: 1px solid white;
    }

    #inner-nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #nav-links{
        ul{
            display: flex;
            gap:20px;

            margin: 0;
            padding: 0;


            list-style-type: none;

          li>*{
            text-decoration: none;
            color:white;
          }
        }

    }

    #reg-log-inner{
        display: flex;

        a{
            display: inline-block;
            padding:6px 10px;
            border:1px solid white;

            transition: .3s;

            &:hover{
                background-color: white;
                color:#3f8d8e;
            }
        }

        &>*{
            text-decoration: none;
            color:white;
        }
    }
}
</style>