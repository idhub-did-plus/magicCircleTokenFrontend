<template>
    <div class="list">
        <div>
            <table>
                <tr>
                    <th>Token Name</th>
                    <th>Symbol</th>
                    <th>Token Address</th>
                </tr>
                <tr v-for="item in tokenList" :key="item.id">
                    <td><a @click="toDetail(item.address)">{{item.name}}</a></td>
                    <td>{{item.symbol}}</td>
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
                    name:"Demo_IdentiyHubSecurityToken",
                    symbol:"DIDH_ST",
                    address:"0x189c398be0d95defeec71afdb725ba190069bbcb"
                },
                {
                    id:2,
                    name:"Demo_MagicCircleSecurityToken  ",
                    symbol:"DMC_ST ",
                    address:"0xf7f9bb90fe43886a1b459071ebadd3a625b4486c"
                },
                {
                    id:3,
                    name:"Demo_Apple,Inc.SecurityToken",
                    symbol:"DAAPL_ST",
                    address:"0xfb62598385eb545ba258e7f19a0dcf2dffca65e8"
                },
                {
                    id:4,
                    name:"Demo_Alphabet,Inc.SecurityToken",
                    symbol:"DGOOG_ST",
                    address:"0xae624cf3239a21deb8deb4e7ed5f9db82052912a"
                },{
                    id:5,
                    name:"Demo_AmazonSecurityToken",
                    symbol:"DAMZN_ST",
                    address:"0xe82016723aff3b29a6362af88b7644af83623d6f"
                },
                {
                    id:6,
                    name:"Demo_Facebook,Inc.SecurityToken",
                    symbol:"DFB_ST",
                    address:"0x1cda98775f075cbd6e287fc76ab469b18e45bfb0"
                },
                {
                    id:7,
                    name:"Demo_AlibabaGroupHoldingLtdST",
                    symbol:"DBABA_ST",
                    address:"0xf63155093e63886b8616ee5a827f18fe9a47c722"
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