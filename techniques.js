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
    application: 'You may have several farm plots with the same crop; dissolve merges them into larger polygons that represent agricultural production areas.'
  },
  {
    id: 'dissolve-buffer',
    title: 'Dissolve Buffer',
    file: 'dissolve_buffer.html',
    category: 'One-layer techniques',
    application: 'If you have three gold mines, create buffers around each mine and dissolve them into one polygon to analyze the total impact area as a single unit.'
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
    id: 'intersect-polygon-several',
    title: 'Intersect Polygon (Several)',
    file: 'intersection_polygon_several.html',
    category: 'Multi-layer techniques',
    application: 'Use this to compare overlay behavior: intersection keeps matching attributes from both layers, while clip keeps only the clipped layer attributes.'
  },
  {
    id: 'union',
    title: 'Union',
    file: 'union.html',
    category: 'Multi-layer techniques',
    application: 'Union can combine zoning and hazard polygons into one layer so planners can see every zone-hazard combination in one map.'
  },
  {
    id: 'difference',
    title: 'Difference',
    file: 'difference1.html',
    category: 'Multi-layer techniques',
    application: 'Difference can remove protected forests from potential development parcels, leaving only the land available for construction.'
  },
  {
    id: 'symmetric-difference',
    title: 'Symetric Difference',
    file: 'symetric_difference.html',
    category: 'Multi-layer techniques',
    application: 'Each polygon can represent a species range; the symmetric difference shows areas where the two species do not interact. Another example is two transportation coverage polygons: the symmetric difference highlights areas where people only have one transportation option.'
  }
];
