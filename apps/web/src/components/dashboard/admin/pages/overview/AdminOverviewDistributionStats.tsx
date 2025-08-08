'use client';

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import 'mapbox-gl/dist/mapbox-gl.css';
import { locations } from './data/locations';
import VisitorPieChart from './particles/VisitorPieChart';

interface PulsingDot {
  width: number;
  height: number;
  data: Uint8ClampedArray;
  context: CanvasRenderingContext2D | null;
  onAdd(): void;
  render(): boolean;
}

const AdminOverviewDistributionStats = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoicm9iaW5taW5kIiwiYSI6ImNtOGozb2xrcDBmaXgycXNlanl6NTI1bzEifQ.q7zst4iSdDY5rtAI_Sw_KQ';

    const pulsingDot: PulsingDot = {
      width: 100,
      height: 100,
      data: new Uint8ClampedArray(100 * 100 * 4),
      context: null,
      onAdd() {
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
      },
      render() {
        const duration = 1000;
        const t = (performance.now() % duration) / duration;
        const radius = (this.width / 2) * 0.3;
        const outerRadius = (this.width / 2) * 0.7 * t + radius;
        const context = this.context;

        if (!context) return false;

        context.clearRect(0, 0, this.width, this.height);

        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          outerRadius,
          0,
          Math.PI * 2,
        );
        context.fillStyle = `rgba(255, 100, 100, ${1 - t})`;
        context.fill();

        context.beginPath();
        context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
        context.fillStyle = 'rgba(255, 0, 0, 1)';
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 2 * (1 - t);
        context.fill();
        context.stroke();

        this.data = context.getImageData(0, 0, this.width, this.height).data;

        mapRef.current?.triggerRepaint();
        return true;
      },
    };

    mapRef.current = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v11',
      center: [0, 20],
      zoom: 1.5,
      projection: 'equirectangular',
    });

    mapRef.current.on('load', () => {
      mapRef.current?.addImage('pulsing-dot', pulsingDot, {
        pixelRatio: 2,
      });

      mapRef.current?.addSource('dot-point', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: locations.map((location) => ({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [location.lng, location.lat],
            },
            properties: {},
          })),
        },
      });

      mapRef.current?.addLayer({
        id: 'points',
        type: 'symbol',
        source: 'dot-point',
        layout: {
          'icon-image': 'pulsing-dot',
        },
      });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <section>
      <div className="grid gap-4 lg:grid-cols-7">
        <div className="lg:col-span-5">
          <Card>
            <CardHeader>
              <CardTitle>Distribution Overview</CardTitle>
              <CardDescription>
                Interactive map showing regional user presence across world
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                ref={mapContainerRef}
                className="w-full h-120 rounded-xl overflow-hidden border border-border"
                id="map"
              />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <VisitorPieChart />
        </div>
      </div>
    </section>
  );
};

export default AdminOverviewDistributionStats;
