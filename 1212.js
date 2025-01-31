document.addEventListener("DOMContentLoaded", function () {
  var map = L.map("map").setView([43.238949, 76.889709], 13); // Центр карты (Алматы)

  // Добавляем слой карты OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
  }).addTo(map);

  // Массив ресторанов
  var restaurants = [
    {
      lat: 43.23972,
      lng: 76.91766,
      title: "Bella Ciao (итальянская траттория)",
    },
    { lat: 43.240526, lng: 76.910877, title: "Sansara Lounge (ресто-бар)" },
    { lat: 43.235982, lng: 76.953713, title: "Libera Restaurant & Terrace" },
  ];

  // Добавляем маркеры на карту
  restaurants.forEach(function (location) {
    L.marker([location.lat, location.lng])
      .addTo(map)
      .bindPopup("<b>" + location.title + "</b>")
      .openPopup();
  });
});
