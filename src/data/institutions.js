/**
 * @type import("../components/EducationForm").Institution[]
 */

const TERTIARY_EDUCATION_INSTITUTIONS = [
  { displayName: 'Massachusetts Institute of Technology', name: 'us_mit' },
  { displayName: 'University of Oxford', name: 'uk_oxford' },
  { displayName: 'University of Belgrade', name: 'srb_belgrade' },
  { displayName: 'Université Paris-Saclay', name: 'fr_paris_saclay' },
  {
    displayName: 'Lomonosov Moscow State University',
    name: 'ru_lomonosov_msu',
  },
];

const SCHOOL_INSTITUTIONS = [
  { displayName: 'Avondale Junior School', name: 'avondale_js' },
  { displayName: 'Vainona Primary School', name: 'vainona_ps' },
  { displayName: 'Highfield High School', name: 'highfield' },
  { displayName: 'Mbizi Primary School', name: 'mbizi' },
];

export { TERTIARY_EDUCATION_INSTITUTIONS, SCHOOL_INSTITUTIONS };
