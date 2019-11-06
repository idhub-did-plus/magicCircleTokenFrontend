<template>
    <div class="detail">
        <Header></Header>
        <div id="detailBox">
            <div id="header">
                <span>Token</span>
                <span>{{symbol}}</span>
            </div>
            <div id="content">
                <div id="box">
                    <div><p>Name:</p><p>{{name}}</p></div>
                    <div><p>totalSupply:</p><p>{{totalSupply}}</p></div>
                    <div><p class="list">Controllers:</p>
                        <p class="right">
                            <table>
                                <tr v-for="(item,index) in controllers" :key="index">
                                    <td>{{item}}</td>
                                </tr>
                            </table>
                        </p>
                    </div>
                    <div>
                        <p class="list">Partition:</p>
                        <p class="right">
                            <table>
                                <tr v-for="(item,index) in this.partitions" :key="index">
                                    <td>{{item}}</td>
                                </tr>
                            </table>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.detail{
    background: #f8f9fa;
    #detailBox{
        width:1125px;
        margin: 0 auto;
        #header{
            height:20px;
            padding:20px;
            border-bottom: 1px solid #ccc;
            span{
                font-size: 20px;
                font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
                font-weight: 400;
                color:#1e2022;
            }
            span:nth-child(2){
                font-size: 18px;
                padding-left: 10px;
                color:#77838f;
            }
        }
        #content{
            padding:30px 5px;
            #box{
                width:80%;
                height:80%;
                margin-top: 30px;
                border:1px solid #ccc;
                div{
                    background: #fff;
                    border-bottom: 1px solid #ccc;
                    overflow: hidden;
                    p{
                        font-size:13px;
                        padding:0 20px;
                        display: inline-block;
                    }
                    p:nth-child(1){
                        width:20%;
                    }
                    p:nth-child(2){
                        width:70%;
                    }
                    .list{
                        display: block;
                        margin-bottom: 0;
                        margin-top:15px; 
                        float: left;
                    }
                    .right{
                        margin-left: 24%;
                        margin-top: 0;
                        table{
                            tr{
                                td{
                                    padding-bottom:8px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
<script>
import Header from "../components/header"
export default {
    components:{
        Header
    },
    data(){
        return {
            address:"",
            name:"",
            symbol:"",
            totalSupply:"",
            controllers:[],
            owner:"",
            partitions:[],
            n:false,
            s:false
        }
    },
    mounted(){
        this.address = this.$route.query.addr;
        var abiArray = 
        [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_name",
                        "type": "bytes32"
                    },
                    {
                        "name": "_uri",
                        "type": "string"
                    },
                    {
                        "name": "_documentHash",
                        "type": "bytes32"
                    }
                ],
                "name": "setDocument",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "name": "_operator",
                        "type": "address"
                    }
                ],
                "name": "authorizeOperatorByPartition",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "name": "_tokenHolder",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    },
                    {
                        "name": "_operatorData",
                        "type": "bytes"
                    }
                ],
                "name": "operatorRedeemByPartition",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "name": "_operator",
                        "type": "address"
                    }
                ],
                "name": "revokeOperatorByPartition",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "name": "_operators",
                        "type": "address[]"
                    }
                ],
                "name": "setPartitionControllers",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "isIssuable",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "name": "_tokenHolder",
                        "type": "address"
                    }
                ],
                "name": "balanceOfByPartition",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "_isIssuable",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "isControllable",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "granularity",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "_isControllable",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "redeemByPartition",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "name": "_tokenHolder",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "issueByPartition",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalPartitions",
                "outputs": [
                    {
                        "name": "",
                        "type": "bytes32[]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    },
                    {
                        "name": "_operatorData",
                        "type": "bytes"
                    }
                ],
                "name": "canOperatorTransferByPartition",
                "outputs": [
                    {
                        "name": "",
                        "type": "bytes1"
                    },
                    {
                        "name": "",
                        "type": "bytes32"
                    },
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "renounceIssuance",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "name": "_operator",
                        "type": "address"
                    },
                    {
                        "name": "_tokenHolder",
                        "type": "address"
                    }
                ],
                "name": "isOperatorForPartition",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_tokenHolder",
                        "type": "address"
                    }
                ],
                "name": "partitionsOf",
                "outputs": [
                    {
                        "name": "",
                        "type": "bytes32[]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "controllers",
                "outputs": [
                    {
                        "name": "",
                        "type": "address[]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "name": "_tokenHolder",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    },
                    {
                        "name": "_operatorData",
                        "type": "bytes"
                    }
                ],
                "name": "controllerRedeem",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    },
                    {
                        "name": "_operatorData",
                        "type": "bytes"
                    }
                ],
                "name": "operatorTransferByPartition",
                "outputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_operator",
                        "type": "address"
                    }
                ],
                "name": "authorizeOperator",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    },
                    {
                        "name": "_operatorData",
                        "type": "bytes"
                    }
                ],
                "name": "controllerTransfer",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_name",
                        "type": "bytes32"
                    }
                ],
                "name": "getDocument",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    },
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_operator",
                        "type": "address"
                    },
                    {
                        "name": "_tokenHolder",
                        "type": "address"
                    }
                ],
                "name": "isOperator",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "renounceControl",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_operators",
                        "type": "address[]"
                    }
                ],
                "name": "setControllers",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "canTransferByPartition",
                "outputs": [
                    {
                        "name": "",
                        "type": "bytes1"
                    },
                    {
                        "name": "",
                        "type": "bytes32"
                    },
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "transferByPartition",
                "outputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_operator",
                        "type": "address"
                    }
                ],
                "name": "revokeOperator",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "decimals",
                        "type": "uint256"
                    },
                    {
                        "name": "controllers",
                        "type": "address[]"
                    },
                    {
                        "name": "ConfigurableComplianceServiceaddr",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_controller",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "_data",
                        "type": "bytes"
                    },
                    {
                        "indexed": false,
                        "name": "_operatorData",
                        "type": "bytes"
                    }
                ],
                "name": "ControllerTransfer",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_controller",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_tokenHolder",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "_data",
                        "type": "bytes"
                    },
                    {
                        "indexed": false,
                        "name": "_operatorData",
                        "type": "bytes"
                    }
                ],
                "name": "ControllerRedemption",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_name",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "name": "_uri",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "name": "_documentHash",
                        "type": "bytes32"
                    }
                ],
                "name": "Document",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_fromPartition",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "name": "_operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "_data",
                        "type": "bytes"
                    },
                    {
                        "indexed": false,
                        "name": "_operatorData",
                        "type": "bytes"
                    }
                ],
                "name": "TransferByPartition",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_fromPartition",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "name": "_toPartition",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "ChangedPartition",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_tokenHolder",
                        "type": "address"
                    }
                ],
                "name": "AuthorizedOperator",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_tokenHolder",
                        "type": "address"
                    }
                ],
                "name": "RevokedOperator",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "name": "_operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_tokenHolder",
                        "type": "address"
                    }
                ],
                "name": "AuthorizedOperatorByPartition",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "name": "_operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_tokenHolder",
                        "type": "address"
                    }
                ],
                "name": "RevokedOperatorByPartition",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "Issued",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "Redeemed",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "name": "_operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "_data",
                        "type": "bytes"
                    },
                    {
                        "indexed": false,
                        "name": "_operatorData",
                        "type": "bytes"
                    }
                ],
                "name": "IssuedByPartition",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_partition",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "name": "_operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "_operatorData",
                        "type": "bytes"
                    }
                ],
                "name": "RedeemedByPartition",
                "type": "event"
            }
        ];
        //合约地址
        var address = this.address;
        var MyContract = web3.eth.contract(abiArray);
        // 使用合约地址实例化合约
        var ERC1400Contract = MyContract.at(this.address);
        //获取token name
        var p1 = ERC1400Contract.name.call((error,result)=>{
            if(!error){
                this.name = result;
            }else{
                this.n = true;
                console.log(error);
            }
        })
        //获取symbol
        var p2 = ERC1400Contract.symbol.call((error,result)=>{
            if(!error){
                this.symbol = result;
            }else{
                console.log(error);
                this.s = true;
            }
        })
        //获取totalSupply
        var p3 = ERC1400Contract.totalSupply.call((error,result)=>{
            if(!error){
                var str = String(result.c[0]);
                this.totalSupply = str.substring(0,str.length-3);
            }else{
                console.log(error)
            }
        })
        //获取controllers
        var p4 = ERC1400Contract.controllers.call((error,result)=>{
            if(!error){
                this.controllers = result;
            }else{
                console.log(error)
            }
        })
        //获取totalPartitions
        var p5 = ERC1400Contract.totalPartitions.call((error,result)=>{
            if(!error){
                this.partitions = result;
            }else{
                console.log(error)
            }
        })
    },
    watch:{
        '$route'(to,from){
            window.location.reload()
        }
    }
}
</script>