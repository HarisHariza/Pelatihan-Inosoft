<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Toko Peralatan Mandi</div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Nama Barang</th>
                                <th scope="col">Deskripsi</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Harga</th>
                                </tr>
                            </thead>
                            <tbody>
                                <row-component v-for="(produk, index) in produklist" :key="index" :produk="produk" @emitclick="addlist(produk)"/>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">Keranjang Belanja</div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Nama Barang</th>
                                <th scope="col">jumlah</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <RowShoppingChart v-for="(produk, index) in shoppingchartlist" :key="index" :shopping_list="produk" @emitclick="deletelist(produk)"/>
                                <tr>
                                    <td>Total Belanja</td>
                                    <td v-if="shoppingchartlist.length !== 0 ">{{shoppingchartlist.map(item => item.quantity*item.price).reduce((prev, next) => prev + next)}}</td>
                                </tr>
                                <tr>
                                    <td><button-component text="submit" @emitclick="pembayaran()"></button-component></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RowShoppingChart from "./RowShoppingChart.vue";
    export default {
    data() {
        return {
            produklist: [
                { barang: "sabun", deskripsi: "untuk membersihkan badan", stock: 10, price: 3000 },
                { barang: "sikat gigi", deskripsi: "untuk menyikat gigi", stock: 15, price: 5000 },
                { barang: "shampoo", deskripsi: "buat menyuci rambut", stock: 5, price: 4000 }
            ],
            shoppingchartlist: []
        };
    },
    methods: {
        addlist(produk) {
            if (produk.stock > 0) {
                produk.stock -= 1;
                let obj = this.shoppingchartlist.find(o => o.barang === produk.barang);
                if(obj === undefined){
                    this.shoppingchartlist.push({barang:produk.barang, quantity:1, price:produk.price})
                }
                else{
                    obj.quantity+=1
                }
                
            }
        },
        deletelist(produk) {
            if (produk.quantity > 0) {
                produk.quantity -= 1;
                let obj2 = this.produklist.find(o => o.barang === produk.barang);
                obj2.stock +=1;
                let obj = this.shoppingchartlist.find(o => o.barang === produk.barang);
                if(obj.quantity === 0){
                    let index = this.shoppingchartlist.indexOf(obj)
                    this.shoppingchartlist.splice(index,1)
                }
            }
        },
        pembayaran(){
            alert("total pembayaran :" + (this.shoppingchartlist.map(item => item.quantity*item.price).reduce((prev, next) => prev + next)));
        },
    },
    mounted() {
        console.log("Component mounted.");
    },
    components: { RowShoppingChart }
}
</script>
