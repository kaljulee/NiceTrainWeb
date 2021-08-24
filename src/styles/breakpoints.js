// { xsmall: 0 }, // all mobile devices
// { small: 576 }, // mobile devices (not sure which one's this big)
// { medium: 768 }, // ipad, ipad pro, ipad mini, etc
// { large: 992 }, // smaller laptops
// { xlarge: 1200 } // laptops and desktops
// import {} from '@emotion/styled';
import facepaint from 'facepaint';

const breakpoints = {
  xsmall: 0, // all mobile devices
  small: 576, // mobile devices (not sure which one's this big)
  medium: 768, // ipad, ipad pro, ipad mini, etc
  large: 992, // smaller laptops
  xlarge: 1200
};

const mq = facepaint(Object.values(breakpoints));

export function settableBreakpoints() {
  return Object.keys(breakpoints).reduce((acc, key) => {
    const newObj = {};
    newObj[key] = breakpoints[key];
    acc.push(newObj);
    return acc;
  }, []);
}

export default breakpoints;
