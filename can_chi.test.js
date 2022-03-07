const can_chi = require('./can_chi');

test('from_year', () => {
  expect(can_chi.from_year(1780)).toBe('Canh Tý');
  expect(can_chi.from_year(1945)).toBe('Ất Dậu');
  expect(can_chi.from_year(2022)).toBe('Nhâm Dần');
});

test('from_year_month', () => {
  expect(can_chi.from_year_month(1984, 1)).toBe('Bính Dần');
  expect(can_chi.from_year_month(1985, 1)).toBe('Mậu Dần');
  expect(can_chi.from_year_month(1989, 8)).toBe('Quý Dậu');
  expect(can_chi.from_year_month(2016, 5)).toBe('Giáp Ngọ');
});

test('from_year_month_day', () => {
  expect(can_chi.from_year_month_day(1995, 3, 1)).toBe('Tân Mão');
  expect(can_chi.from_year_month_day(1996, 3, 1)).toBe('Đinh Dậu');
  expect(can_chi.from_year_month_day(1996, 2, 28)).toBe('Ất Mùi');
  expect(can_chi.from_year_month_day(1996, 2, 29)).toBe('Bính Thân');
  expect(can_chi.from_year_month_day(2022, 4, 2)).toBe('Ất Dậu');
});
