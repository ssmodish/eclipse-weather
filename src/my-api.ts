export const getCities = async () => {
  conat res = await fetch('http://dataservice.accuweather.com/locations/v1/topcities/50?')
  return [{ id: 55, name: 'texarkana' }];
};
