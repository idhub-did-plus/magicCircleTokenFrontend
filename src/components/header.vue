<template>
    <div class="header">
        <div id="headerBox">
            <div class="head">
                <div id="logoBox">
                    <img @click="home" src="../assets/logo1.png" alt="">
                </div>
                <div id="searchBox">
                    <form action="" autocomplete="off">
                        <input type="text" id="text" placeholder="Search by Address" v-model="address">
                        <button @click="detail"><img src="../assets/放大镜.png" alt=""></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #headerBox{
        border-bottom: 1px solid #ccc;
        background: #fff;
        .head{
            width:1125px;
            height:115px;
            margin: 0 auto;
            #logoBox{
                float:left;
                width:17%;
                height:40%;
                margin-left: 1%;
                margin-top: 2.75%;
                img{
                    width:100%;
                    height:100%;
                    cursor: pointer;
                }
            }
            #searchBox{
                float:right;
                width:40%;
                height:40%;
                margin-top: 2.75%;
                margin-right: 1%;
                form{
                    height:100%;
                    border:none;
                    #text{
                        float:left;
                        height:96%;
                        width:82%;
                        border:none;
                        padding:0 10px;
                        border:1px solid #3498db;
                        outline: none;
                    }
                    button{
                        float:right;
                        height:100%;
                        width:13.1%;
                        border:none;
                        outline: none;
                        background-color: #3498db;
                        border-color: #3498db;
                        cursor: pointer;
                        img{
                            cursor: pointer;
                            width:41%;
                            height:45%;
                        }
                    }
                }
            }
        }
    }
</style>
<script>
export default {
    data(){
        return {
            address:""
        }
    },
    methods:{
        detail(){
            if(this.address != ""){
                this.$router.push({
                    path:"detail",
                    query:{
                        addr:this.address
                    }
                });
            }
        },
        home(){
            this.$router.push({path:"search"})
        }
    }
}
</script>