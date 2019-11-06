<template>
    <div class="list">
        <div>
            <table>
                <tr>
                    <th>Token Name</th>
                    <th>Token Address</th>
                </tr>
                <tr v-for="item in tokenList" :key="item.id">
                    <td><a @click="toDetail(item.address)">{{item.name}}</a></td>
                    <td>{{item.address}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style lang="scss">
    .list{
        width:1125px;
        margin: 0 auto;
        div{
            margin-top: 50px;
            background: #fff;
            padding:5px 10px;
            padding-bottom: 50px;
            table{
                border-collapse:collapse;
                width:100%;
                background: #fff;
                tr{
                    padding:20px;
                    border-bottom: 1px solid #e7eaf3;
                    th{
                        text-align: left;
                        padding:10px;
                        font-size: 13px;
                        color:#6c757e;
                    }
                    td{
                        padding:10px;
                        color: #3498db!important;
                        font-size: 13px;
                        a{
                            cursor: pointer;
                        }
                    }
                }
                tr:nth-child(1){
                    background: #f8fafd;
                    border-bottom: 3px solid #e7eaf3;
                }
            }
        }
    }
</style>
<script>
export default {
    data(){
        return {
            tokenList:[
                {
                    id:1,
                    name:"Tether USD (USDT)",
                    address:"0xdac17f958d2ee523a2206206994597c13d831ec7"
                },
                {
                    id:2,
                    name:"BNB (BNB)",
                    address:"0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
                },
                {
                    id:3,
                    name:"Bitfinex LEO Token (LEO)",
                    address:"0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3"
                },
                {
                    id:4,
                    name:"HuobiToken (HT)",
                    address:"0x6f259637dcd74c767781e37bc6133cd6a68aa161"
                },{
                    id:5,
                    name:"ChainLink Token (LINK)",
                    address:"0x514910771af9ca656af840dff83e8264ecf986ca"
                },
                {
                    id:6,
                    name:"Maker (MKR)",
                    address:"0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
                }
            ]
        }
    },
    methods:{
        toDetail(Addr){
            if(this.Addr != ""){
                this.$router.push({
                    path:"detail",
                    query:{
                        addr:Addr
                    }
                })
            }
        }
    }
}
</script>