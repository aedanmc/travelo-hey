const testLocationData = {
  result: {
    item1: {
      name: 'test1',
      formatted_phone_number: '(800)-555-1212',
      formatted_address: '7777 Test Address Ave',
      place_id: 'test_place_id_1',
    },
    item2: {
      name: 'test2',
      formatted_phone_number: '(800)-555-1213',
      formatted_address: '7778 Test Address Ave',
      place_id: 'test_place_id_2',
    },
    item3: {
      name: 'test3',
      formatted_phone_number: '(800)-555-1244',
      formatted_address: '7779 Test Address Ave',
      place_id: 'test_place_id_3',
    },
    item4: {
      name: 'test4',
      formatted_phone_number: '(800)-555-1220',
      formatted_address: '7780 Test Address Ave',
      place_id: 'test_place_id_4',
    },
  },
};

export default function getStaticLocations() {
  const { result } = testLocationData;
  const items = [];
  const keys = Object.keys(result);
  keys.forEach((key) => {
    items.push(result[key]);
  });
  return items;
}
