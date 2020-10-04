import { AdminAreaModule } from './admin-area.module';

describe('AdminAreaModule', () => {
  let adminAreaModule: AdminAreaModule;

  beforeEach(() => {
    adminAreaModule = new AdminAreaModule();
  });

  it('should create an instance', () => {
    expect(adminAreaModule).toBeTruthy();
  });
});
