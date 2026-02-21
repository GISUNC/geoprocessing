window.TECHNIQUES = [
  {
    id: 'introduction',
    title: 'Introduction: Spatial Analysis & Geoprocessing',
    file: 'introduction.html',
    category: 'Overview',
    application: 'Use this slide to frame the lesson: spatial analysis studies location-based patterns, while geoprocessing creates new layers from existing data.'
  },

  {
    id: 'buffer-point',
    title: 'Buffer Point',
    file: 'bufferSVG.html',
    category: 'One-layer techniques',
    application: 'Each point can represent a bus stop or well; the buffer shows service coverage within a chosen walking distance.'
  },
  {
    id: 'buffer-line',
    title: 'Buffer Line',
    file: 'linebufferSVG.html',
    category: 'One-layer techniques',
    application: 'A line can represent a river or road; buffering it defines impact zones such as flood-risk corridors or road-noise zones.'
  },
  {
    id: 'buffer-polygon',
    title: 'Buffer Polygon',
    file: 'polygonbufferSVG.html',
    category: 'One-layer techniques',
    application: 'A polygon can represent a protected park; the buffer defines surrounding management zones where land-use is restricted.'
  },
  {
    id: 'buffer-multisize',
    title: 'Buffer Multi-size',
    file: 'buffer_multisize.html',
    category: 'One-layer techniques',
    application: 'Each point can represent a cellphone tower, and each circle size shows how far the signal from that tower can reach.'
  },
  {
    id: 'dissolve',
    title: 'Dissolve',
    file: 'dissolve.html',
    category: 'One-layer techniques',
    application: 'Small administrative units can be dissolved by state name to create one polygon per state for regional reporting.'
  },
  {
    id: 'dissolve-buffer',
    title: 'Dissolve Buffer',
    file: 'dissolve_buffer.html',
    category: 'One-layer techniques',
    application: 'Buffers around nearby facilities can be dissolved into a single service area to identify total coverage without overlaps.'
  },
  {
    id: 'convex-hull',
    title: 'Convex Hull',
    file: 'convexhull.html',
    category: 'One-layer techniques',
    application: 'Animal GPS points can be wrapped with a convex hull to estimate the species home-range extent.'
  },
  {
    id: 'random-points',
    title: 'Random Points',
    file: 'randomPoints.html',
    category: 'One-layer techniques',
    application: 'Generate random sample locations within a study area for field surveys, audits, or training/testing datasets.'
  },

  {
    id: 'intersect-point',
    title: 'Intersect Point',
    file: 'intersection_point.html',
    category: 'Multi-layer techniques',
    application: 'Each point can represent hospital locations and the polygon a county boundary; the result is only the hospitals inside that county.'
  },
  {
    id: 'intersect-line',
    title: 'Intersect Line',
    file: 'intersection_line.html',
    category: 'Multi-layer techniques',
    application: 'Road lines intersected with flood polygons return only road segments affected by flooding.'
  },
  {
    id: 'intersect-polygon',
    title: 'Intersect Polygon',
    file: 'intersection_poly.html',
    category: 'Multi-layer techniques',
    application: 'Intersect land-use and soil polygons to find areas where both conditions are met for crop suitability.'
  },
  {
    id: 'union',
    title: 'Union',
    file: 'union.html',
    category: 'Multi-layer techniques',
    application: 'Union combines zoning and hazard polygons into one layer preserving all boundaries for comprehensive planning.'
  },
  {
    id: 'difference',
    title: 'Difference',
    file: 'difference1.html',
    category: 'Multi-layer techniques',
    application: 'Subtract protected areas from candidate development land to keep only buildable zones.'
  },
  {
    id: 'symmetric-difference',
    title: 'Symetric Difference',
    file: 'symetric_difference.html',
    category: 'Multi-layer techniques',
    application: 'Find non-overlapping areas between old and new zoning plans to highlight regions that changed.'
  }
];
