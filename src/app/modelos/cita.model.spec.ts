import { Cita } from './cita.model';


describe('Cita', () => {
  it('should create an instance', () => {
    expect(new Cita('2023-01-01', '09:00', '10:00', null, null)).toBeTruthy();
  });
});
