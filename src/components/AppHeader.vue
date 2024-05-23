<script>
export default {
    name: 'AppHeader',

    data() {
        return {
                toggle: true
            }
        },

    
}
</script>

<template>

    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand me-5" href="#">
                    <router-link :to="{ name: 'HomePage' }">
                                <img id="logo" src="/public/BoolBnB.png" alt="Logo" class="d-inline-block align-text-top">
                    </router-link>
                </a>

                <button class="navbar-toggler border-0 shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-3 me-auto my-2 my-lg-0 gap-lg-4 " style="--bs-scroll-height: 100px;">
                        <li>
                            <router-link class="router line" :to="{ name: 'HomePage' }">
                                Home
                            </router-link>
                                        
                        </li>
                        <li>
                            <router-link class="router line" :to="{}">
                                Contatti
                            </router-link>
                        </li>
                        <li>
                            <router-link class="router line" :to="{}">
                                In Evidenza
                            </router-link>
                        </li>
                    </ul>
                    <div id="reg-log">

                        <ul class="navbar-nav ms-3 me-auto my-2 my-lg-0" style="--bs-scroll-height: 100px;">
                            <li>
                                <a class="router link-be"
                                    href="http://127.0.0.1:8000/login">Accedi
                                    <span><i class="fa-solid fa-arrow-right"></i></span>
                                </a>
                                
                                
                                            
                            </li>
                            <li>
                                <a  class="router link-be"
                                href="http://127.0.0.1:8000/register">Registrati
                                <span><i class="fa-solid fa-arrow-right"></i></span>
                                </a>
                                
                            </li>
                            
                        </ul>
        
                        <!-- <div id="reg-log-inner">
                        </div>
                        -->
                    </div>
                </div>
            </div>
        </nav>

        
    </header>

</template>

<style lang="scss">
nav {

    background-color:white;
   

    #logo {
        width: 120px;
        border-radius: 18px;
    }



    #navbarNav {
        ul {
            

            display: flex;
            font-weight: bold;

            list-style-type: none;


            li {
                

                position: relative;
                display: flex;
                align-items: center;

                padding-bottom: 5px;


                

                .router{
                    text-decoration: none;

                    color: #006769c0;

                    &:hover{
                        color: black;
                    }
                }


            }

             
        }

    }

    .link-be {
        display: flex;
        justify-content: start;
        align-items: center;
        padding-inline: 20px;
        background-color: white;
    
    
        div {
            padding: 10px;
            padding-right: 40px;
            padding-left: 20px;
    
            margin-right: 10px;
            border-right: 1px solid black;
    
        }
    
        span {
            margin-left: 10px;
            opacity: 1;
            
            transition: opacity 0.3s ease, transform 0.3s ease;
    
    
        }
    
        &:hover {
    
            div {
                border-right: 1px solid transparent;
    
            }
    
            span {
    
                opacity: 0;
                transform: translate(100%);
    
            }
        }
    }

    
}

@media screen and (min-width: 992px) {

    .line{

        &:hover::before{

            content: "";
            position: absolute;
            bottom: -20px;
            left: 0;
            width: 100%;
            border-bottom: 5px solid #006769c0;
        }
}


}

</style>