import Ember from 'ember';

export function arrayFilterBy(params) {
  var array = params[0],
      filterByKey = params[1],
      filterByValue = params[2];
  return array.filterBy(filterByKey, filterByValue);
}

export default Ember.Helper.helper(arrayFilterBy);
