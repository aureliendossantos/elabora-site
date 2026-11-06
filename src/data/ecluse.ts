/* The lock of the home's 3D section (src/demos/ecluse/): what it shows first, and the colours its inspector offers.
   The settings are the object's own props (its manifest, src/demos/ecluse/objet/object.manifest.json). */
export const ECLUSE_DEPART = {
  mode: 'explore', scenario: 'uphill', rise: 3, visualStyle: 'illustrated', cameraView: 'isometric', informationLevel: 'guided',
  showAnnotations: false, motionIntensity: 'expressive', allowViewChange: false, sound: false, hints: false,
  waterColor: '#5B93A8', grassColor: '#8FA36B', hullColor: '#2F5D50',
} as const;

export const TEINTES = {
  waterColor: ['#5B93A8', '#3E7FA6', '#4E9C8F', '#7A8F9E'],
  grassColor: ['#8FA36B', '#6E9450', '#B3A66A', '#A2B8A0'],
  hullColor: ['#2F5D50', '#9C3B2E', '#24466E', '#3B3A36'],
} as const;
