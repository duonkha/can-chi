const chi_table = {
  0: 'Tý',
  1: 'Sửu',
  2: 'Dần',
  3: 'Mão',
  4: 'Thìn',
  5: 'Tỵ',
  6: 'Ngọ',
  7: 'Mùi',
  8: 'Thân', // Start here
  9: 'Dậu',
  10: 'Tuất',
  11: 'Hợi',
};

const can_table = {
  0: 'Giáp',
  1: 'Ất',
  2: 'Bính',
  3: 'Đinh',
  4: 'Mậu',
  5: 'Kỷ',
  6: 'Canh', // Start here
  7: 'Tân',
  8: 'Nhâm',
  9: 'Quý',
};

const get_can_chi = (unit, can_offset, chi_offset) => {
  const can = can_table[(unit + can_offset) % 10];
  const chi = chi_table[(unit + chi_offset) % 12];

  return `${can} ${chi}`;
};

const get_days = date_str => {
  const origin = new Date('0001-01-01');
  const date = new Date(date_str);

  const one_day = 1000 * 60 * 60 * 24;
  const time_diff = date.getTime() - origin.getTime();
  const days = Math.round(time_diff / one_day);

  return days;
};

const from_year = year => {
  return get_can_chi(year, 6, 8);
};

const from_year_month = (year, month) => {
  return get_can_chi(year * 12 + month, 3, 1);
};

const from_year_month_day = (year, month, day) => {
  const days = get_days(`${year}-${month}-${day}`);

  return get_can_chi(days, 5, 3);
};

module.exports = {from_year, from_year_month, from_year_month_day};
