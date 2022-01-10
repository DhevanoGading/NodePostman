const express = require('express')                  //import express yang telah di install sebelumnya
const bodyParser = require('body-parser')           //deklarasi atau import express yang telah di install sebelumnya
const app = express()                               //deklarasi express dalam variabel app
const port = 8080                                   //deklarasi port untuk menjalankan node
 
app.use(bodyParser.urlencoded({extended:false}))
 
app.get('/', (req, res) => {                        // endpoint '/' untuk menjalankan function yang berisi req dan res
    res.send("Hello Programers!") 
})
 
app.get('/orang/:nama', (req,res)=>{                //deklarasi function app.get untuk membaca atau me-GET data dari REST API /orang/:nama
    var namaOrang = req.params.nama                 //deklarasi variabel namaOrang dengan tipe data var yang berisi request dari params nama
    res.end('Menampilkan nama siswa : '+namaOrang)  //endpoint atau menampilkan data dari REST API
})
 
app.post('/orang', (req, res)=>{                    //deklarasi function app.post untuk membuat data menggunakan REST API /orang
    var namaOrang = req.body.nama                   //deklarasi variabel namaOrang dengan tipe data yang berisi request dari isi body yang memiliki value nama
    var alamat = req.body.alamat                    //deklarasi variabel alamat dengan tipe data yang berisi request dari isi body yang memiliki value alamat
    res.end('Menampilkan orang baru, atas nama : '+namaOrang+', yang beralamat di '+alamat) //responsive endpoint dari request yang di atas dan menampilkannya
})
 
app.delete('/orang/:id', (req, res) => {            //deklarasi function app.delete untuk menghapus data menggunakan REST API /orang/:id
    var id = req.params.id                          //deklarasi variabel id dengan tipe data var yang berisi request dari params id
    var namaOrang = req.body.nama                   //deklarasi variabel namaOrang dengan tipe data yang berisi request dari isi body yang memiliki value nama
    res.end('ID '+id+' telah dihapus, atas nama '+namaOrang) //responsive endpint untuk menampilkan data dari request id dan namaOrang
});
 
app.put('/orang/:id', (req, res) => {               //deklarasi function app.put untuk mengubah data menggunakan REST API /orang/:id
    var id = req.params.id                          //deklarasi variabel id dengan tipe data var yang berisi request dari params id
    var namaOrang = req.body.nama                   //deklarasi variabel namaOrang dengan tipe data yang berisi request dari isi body yang memiliki value nama
    var alamat = req.body.alamat                    //deklarasi variabel alamat dengan tipe data yang berisi request dari isi body yang memiliki value alamat
    res.end('Seseorang dengan ID '+id+', telah terupdate') //responsive endpoint dari REST API app.put untuk menampilkan hasil dari mengubah data
});
 
app.listen(port, () => {                            //untuk masuk ke dalam server
    console.log(`Server di port ${port}`)           //untuk menampilkan jika berhasil masuk ke dalam server
})

// Params adalah tempat untuk mengisi data namun terlihat dalam url atau REST API
// Sedangkan Body adalah tempat untuk mengisi data yang tidak terlihat di url atau REST API