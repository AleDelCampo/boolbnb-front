<script>
export default {
    name: 'AppFooter',

    data() {
        return {
            members: [
                {
                    nome: "Andrea",
                    cognome: "Livornese"
                },
                {
                    nome: "Alberto",
                    cognome: "Taddeucci"
                },
                {
                    nome: "Alessandro",
                    cognome: "Del Campo"
                },
                {
                    nome: "Giuseppe",
                    cognome: "Trapasso"
                },
                {
                    nome: "Pool",
                    cognome: "Gutirrez"
                },
            ],

            emails: [
                "andrealivornese@gmail.com",
                "alberto.taddeucci@gmail.com",
                "alessandrodelcampo@gmail.com",
                "trapassogiuseppe158@gmail.com",
                "pool.gutierrezv@gmail.com"
            ],

            socials: [
                "fa-facebook",
                "fa-x-twitter",
                "fa-instagram",
                "fa-google-plus-g",
                "fa-tiktok",
                "fa-youtube"
            ]
        }
    }
}
</script>


<template>

    <footer>
        <div class="container py-5">


            <div id="footer-title">
                BoolBnB
            </div>

            <div class="d-flex justify-content-between">

                <div class="d-flex flex-column">

                    <div class="col-title">
                        Membri
                    </div>

                    <div class="components">
                        <ul>
                            <li v-for="member in members">
                                <div class="name">
                                    {{ member.nome }}
                                    {{ member.cognome }}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="d-flex flex-column">

                    <div class="col-title">
                        Contatti
                    </div>

                    <div class="components">
                        <ul>
                            <li v-for="email in emails">
                                {{ email }}
                            </li>
                        </ul>
                    </div>

                </div>

                <div class="d-flex flex-column">
                    <div class="col-title text-center">
                        Social
                    </div>

                    <div id="social-grid">
                        <div v-for="social in socials" class="icon">
                            <i class="fa-brands" :class="social"></i>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <hr>

        <div class="container py-4">
            <h6 class="text-center mb-3">
                Progetto finale di gruppo Boolean®, BoolBnB.
            </h6>

            <div id="copyright">
                Copyright© 2024, Boolean®.
            </div>
        </div>

    </footer>

</template>

<style lang="scss" scoped>

footer {
    background-color: whitesmoke;
}

#footer-title {
    font-size: 1.6em;
    font-weight: bold;
    text-align: center;

    margin-bottom: 36px;
    color: #006769c0;
}

#social-grid {
    max-width: 200px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 50px;
        height: 50px;

        border: 2px solid #006769c0;

        font-size: 1.3em;

        transition: all .2s ease-in-out;
        
    }

    .icon:hover {
        background-color: #006769c0;
        color: black;
        cursor: pointer;
    }

}

#copyright {
    text-align: center;
    font-weight: bold;
    font-size: .7em;
    opacity: .8;
}

.col-title {
    font-size: 1.6em;
    font-weight: 600;

    margin-bottom: 10px;
}

.components {
    li {
        font-size: 1.2em;
        cursor: pointer;

        a {
            color: white;
            text-decoration: none;
        }
    }
}

ul {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    
    row-gap: 5px;

    font-size: .8em;
    list-style-type: none;
    opacity: .8;
    cursor: pointer;
}

hr {
    border-top: 2px solid #006769c0;
}

</style>

