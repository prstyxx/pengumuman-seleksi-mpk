const daftarDiterima = ["Tb.Abdul Aziz", "Mochamad Arwansyah Prastya"]; // Contoh daftar nama yang diterima

        document.getElementById('formPendaftaran').onsubmit = function(event) {
            event.preventDefault();
            const nama = document.getElementById('nama').value;
            const status = daftarDiterima.includes(nama) ? "Diterima" : "Tidak Diterima";
            document.getElementById('hasil').textContent = Nama: ${nama}, Status: ${status};
        };
    </script> 
 </body>
</html>
