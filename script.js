var map = L.map('map').setView([1.4669, 124.8446], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var locations = {
    "Wanea": {
        lat: 1.45386852, 
        lng: 124.837393, 
        img: "Wanea.png", 
        faktor: "Penggunaan lahan tidak teratur, kemiringan lereng curam", 
        dampak: "Kerusakan jalan dan lahan pertanian", 
        jenis: "Alluvial dan Latosol"
    },
    "Malendeng": {
        lat: 1.47064, 
        lng: 124.88218, 
        img: "Malendeng1.png", 
        faktor: "Curah hujan tinggi, kemiringan lereng curam", 
        dampak: "Kerusakan infrastruktur dan lahan pertanian", 
        jenis: "Alluvial dan Latosol"
    },
    "Pandu": {
        lat: 1.56682197, 
        lng: 124.8580559, 
        img: "Pandu1.png", 
        faktor: "Penggunaan lahan tidak sesuai dan curah hujan tinggi", 
        dampak: "Kerusakan permukiman dan lahan pertanian", 
        jenis: "Latosol"
    },
    "Bailang": {
        lat: 1.54305187, 
        lng: 124.85139, 
        img: "Bailang1.png", 
        faktor: "Kemiringan lereng curam dan curah hujan tinggi", 
        dampak: "Kerusakan jalan dan lahan pertanian", 
        jenis: "Alluvial"
    },
    "Kairagi Weru": {
        lat: 1.482500, 
        lng: 124.888056, 
        img: "Kairagi Weru1.png", 
        faktor: "Penggunaan lahan tidak teratur dan kemiringan lereng curam", 
        dampak: "Kerusakan bangunan dan lahan pertanian", 
        jenis: "Latosol"
    },
    "Pakowa": {
        lat: 1.457759, 
        lng: 124.843165, 
        img: "Pakowa1.png", 
        faktor: "Curah hujan tinggi, kemiringan lereng curam", 
        dampak: "Kerusakan infrastruktur dan lahan pertanian", 
        jenis: "Alluvial dan Latosol"
    },
    "Ranomuut": {
        lat: 1.48392726, 
        lng: 124.86949529, 
        img: "Ranomuut2.png", 
        faktor: "Curah hujan tinggi dan kemiringan lereng curam", 
        dampak: "Kerusakan permukiman dan lahan pertanian", 
        jenis: "Alluvial dan Latosol"
    },
    "Kima Atas": {
        lat: 1.54658872, 
        lng: 124.89896521, 
        img: "KimaAtas1.png", 
        faktor: "Penggunaan lahan tidak sesuai dan curah hujan tinggi", 
        dampak: "Kerusakan permukiman dan lahan pertanian", 
        jenis: "Tanah Kering, Alluvial dan Latosol"
    },
    "Malalayang Dua": {
        lat: 1.44693871, 
        lng: 124.78807757, 
        img: "Malalayang Dua.png", 
        faktor: "Penggunaan lahan tidak teratur dan kemiringan lereng curam", 
        dampak: "Kerusakan bangunan dan lahan pertanian", 
        jenis: "Alluvial dan Latosol"
    },
    "Sumompo": {
        lat: 1.5191851, 
        lng: 124.8588478, 
        img: "Sumompo1.png", 
        faktor: "Curah hujan tinggi, kemiringan lereng curam", 
        dampak: "Kerusakan infrastruktur dan lahan pertanian", 
        jenis: "Alluvial dan Latosol"
    },
};

for (let place in locations) {
    L.marker([locations[place].lat, locations[place].lng])
        .addTo(map)
        .bindPopup(`<b>${place}</b><br>${locations[place].faktor}`);
}

function showDetail(lat, lng, place) {
    map.setView([lat, lng], 14);
    document.getElementById("location-name").textContent = place;
    document.getElementById("location-image").src = locations[place].img;
    document.getElementById("faktor").textContent = locations[place].faktor;
    document.getElementById("dampak").textContent = locations[place].dampak;
    document.getElementById("jenis-tanah").textContent = locations[place].jenis;
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah halaman pindah ke save_contact.php

    console.log("Form submitted!");

    let formData = new FormData();
    formData.append("email", document.getElementById("email").value);
    formData.append("name", document.getElementById("name").value);

    fetch("http://localhost:8080/longsor/contact/save_contact.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log("Response dari server:", data); // Debugging di console
        document.getElementById("responseMessage").innerText = data;
        document.getElementById("contactForm").reset();
    })
    .catch(error => console.error("Error:", error));
    
});

