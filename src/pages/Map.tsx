import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "../assets/styles/Map.css";

export default function Map() {
	const mapContainer = useRef(null);
	const map = useRef(null);

	useEffect(() => {
		if (map.current) return;
		map.current = new maplibregl.Map({
			container: mapContainer.current,
			style: "https://api.maptiler.com/maps/basic-v2/style.json?key=aJ1aWBQyxkpsVjqWZPpk",
			center: [106.845599, -6.21462],
			zoom: 10,
		});
	});

	return (
		<div className="map-wrap">
			<div ref={mapContainer} className="map" />
		</div>
	);
}
