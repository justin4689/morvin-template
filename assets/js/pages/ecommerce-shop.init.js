$("#world-map-markers").vectorMap({
  map: "world_mill_en",
  normalizeFunction: "polynomial",
  hoverOpacity: 0.7,
  hoverColor: !1,
  regionStyle: { initial: { fill: "#dde3ec" } },
  markerStyle: {
    initial: {
      r: 9,
      fill: "#0099ff",
      "fill-opacity": 0.9,
      stroke: "#fff",
      "stroke-width": 7,
      "stroke-opacity": 0.4,
    },
    hover: { stroke: "#fff", "fill-opacity": 1, "stroke-width": 1.5 },
  },
  backgroundColor: "transparent",
  markers: [
    { latLng: [41.9, 12.45], name: "USA" },
    { latLng: [12.05, -61.75], name: "Russia" },
    { latLng: [1.3, 103.8], name: "Australia" },
  ],
});
