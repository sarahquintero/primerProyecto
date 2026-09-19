import { Paciente } from './paciente.model';

describe('Paciente class', () => {
  it('should create an instance', () => {
    expect(new Paciente()).toBeTruthy();
  });
});
