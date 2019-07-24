<template>
    <div class="wrapper">

        <v-sidebar></v-sidebar>
        <div class="content-box">

            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>


<script>

    import vSidebar from './Sidebar.vue';
    import bus from '../common/bus';
    export default {
        data(){
            return {
                collapse: false
            }
        },
        components:{
             vSidebar
        },
        created(){
            // bus.$on('collapse', msg => {
            //     this.collapse = msg;
            // })
        }
    }
</script>
